import { motion } from "framer-motion";
import serumImg from "@/assets/serum-dropper.jpg";
import creamImg from "@/assets/cream-swatches.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6 }
  }),
};

const AboutSection = () => (
  <section id="about" className="section-padding max-w-5xl mx-auto">
    <motion.h2
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      variants={fadeIn} custom={0}
      className="script-heading text-4xl md:text-5xl text-center mb-10"
    >
      About The Skin Fix
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
      <div className="space-y-4 text-center md:text-left">
        {[
          "Welcome to The Skin Fix. Let's be honest — you don't really know half the stuff you're putting on your face. That's where we come in.",
          "Think of us as your quiet advisors, the ones who know the truth behind the hype.",
          "Every week, we dive into the products everyone's talking about, break down what's real, what's not, and help you figure out what actually works for your skin.",
        ].map((text, i) => (
          <motion.p
            key={i}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeIn} custom={i + 1}
            className="text-base md:text-lg leading-relaxed text-foreground/80"
          >
            {text}
          </motion.p>
        ))}
      </div>
      <motion.img
        src={serumImg}
        alt="Serum dropper on skin"
        className="rounded-lg shadow-md w-full max-w-sm mx-auto"
        loading="lazy" width={640} height={800}
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      />
    </div>

    <div className="grid md:grid-cols-2 gap-10 items-center">
      <motion.img
        src={creamImg}
        alt="Skincare cream swatches"
        className="rounded-lg shadow-md w-full max-w-sm mx-auto md:order-first"
        loading="lazy" width={640} height={400}
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      />
      <div className="space-y-4 text-center md:text-left">
        {[
          "No fluff. No clickbait. Just the facts — whispered, analyzed, and delivered directly to you.",
          "We mix science, experience, and a little curiosity to bring you the inside scoop.",
          "Whether you're wondering about that new viral serum or trying to understand why certain ingredients matter, we've got your back — quietly, confidently, and always with your best interest in mind.",
        ].map((text, i) => (
          <motion.p
            key={i}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeIn} custom={i + 4}
            className="text-base md:text-lg leading-relaxed text-foreground/80"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
