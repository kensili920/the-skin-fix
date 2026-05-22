import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Skincare products on pink satin"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-foreground/30" />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10 text-center"
    >
      <h1 className="script-heading text-6xl md:text-8xl lg:text-9xl text-primary-foreground drop-shadow-lg">
        The Skin Fix
      </h1>
      <p className="mt-4 text-lg md:text-xl tracking-[0.3em] uppercase text-primary-foreground/80 font-light">
        your skin, our secret
      </p>
    </motion.div>
  </section>
);

export default HeroSection;
