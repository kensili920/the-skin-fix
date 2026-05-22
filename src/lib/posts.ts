import matter from "gray-matter";

// Vite imports all markdown files at build time as raw strings
const modules = import.meta.glob("/src/content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author?: string;
}

export interface Post extends PostMeta {
  content: string;
}

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

export const allPosts: Post[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = matter(raw);
    return {
      slug: slugFromPath(path),
      title: String(data.title ?? slugFromPath(path)),
      date: String(data.date ?? ""),
      excerpt: String(data.excerpt ?? ""),
      author: data.author ? String(data.author) : undefined,
      content,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}
