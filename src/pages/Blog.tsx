import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allPosts } from "@/lib/posts";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20 px-6 max-w-3xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h1 className="script-heading text-5xl md:text-6xl mb-3">Journal</h1>
          <p className="text-foreground/70">Notes on ingredients, routines, and quietly better skin.</p>
        </motion.header>

        <div className="space-y-10">
          {allPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border-b border-border pb-10 last:border-0"
            >
              <Link to={`/blog/${post.slug}`} className="group block">
                <time className="text-xs uppercase tracking-widest text-foreground/50">
                  {new Date(post.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-foreground/75 leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-4 text-sm text-primary tracking-wide">
                  Read more →
                </span>
              </Link>
            </motion.article>
          ))}
          {allPosts.length === 0 && (
            <p className="text-center text-foreground/60">No articles yet — check back soon.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
