import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPost } from "@/lib/posts";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20 px-6 max-w-2xl mx-auto text-center">
          <h1 className="script-heading text-4xl mb-4">Not found</h1>
          <p className="text-foreground/70 mb-6">That article doesn't exist (yet).</p>
          <Link to="/blog" className="text-primary underline">
            Back to the journal
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20 px-6 max-w-2xl mx-auto">
        <motion.article
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blog" className="text-sm text-foreground/60 hover:text-primary transition-colors">
            ← Journal
          </Link>
          <header className="mt-6 mb-10 text-center">
            <time className="text-xs uppercase tracking-widest text-foreground/50">
              {new Date(post.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="script-heading text-4xl md:text-5xl mt-3">{post.title}</h1>
            {post.author && (
              <p className="text-sm text-foreground/60 mt-2">by {post.author}</p>
            )}
          </header>

          <div className="prose-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </motion.article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
