import { motion } from "framer-motion";
import skinLayers from "@/assets/skin-layers.jpg";

const layers = [
  { name: "Epidermis", desc: "The outermost layer of the skin. It acts as a protective barrier, preventing water loss and blocking harmful bacteria and UV radiation." },
  { name: "Dermis", desc: "Lies beneath the epidermis and contains blood vessels, nerves, hair follicles, and glands. It provides strength and elasticity." },
  { name: "Hypodermis", desc: "The deepest layer of skin. Made mostly of fat and connective tissue, it helps with insulation, cushioning, and energy storage." },
];

const SkinLayersSection = () => (
  <section id="skin-layers" className="section-padding section-alt">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="script-heading text-4xl md:text-5xl text-center mb-14"
      >
        How the Skin Works
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src={skinLayers}
          alt="Cross-section of skin layers"
          className="rounded-lg shadow-md w-full"
          loading="lazy" width={800} height={600}
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        />

        <div className="space-y-8">
          {layers.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }}
              className="ingredient-card"
            >
              <h3 className="text-xl font-semibold mb-2">{l.name}</h3>
              <p className="text-foreground/75 leading-relaxed">{l.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkinLayersSection;
