import { motion } from "framer-motion";
const niacinamideImg = new URL("../assets/niacinamide.JPG", import.meta.url).href;

const IngredientOfTheWeek = () => (
  <section id="iotw" className="section-padding section-alt">
    <div className="max-w-5xl mx-auto">
      <h2 className="script-heading text-4xl md:text-5xl text-center mb-12">Ingredient of the Week</h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.img
          src={niacinamideImg}
          alt="niacinamide serum"
          className="rounded-lg shadow-md w-full max-w-sm mx-auto"
          loading="lazy" width={640} height={640}
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold mb-6">Ectoine</h3>

          <div className="space-y-5 text-foreground/80 leading-relaxed">
            <div>
              <h4 className="font-semibold text-foreground mb-1">What it is:</h4>
              <p>A stress-protection molecule that hydrates, prevents moisture loss, and 
                reduces inflammation.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">How it works:</h4>
              <p>Ectoine forms a protective water shield around cells, helping them stay hydrated
              and protected from irritation, dryness, and environmental stress.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Who benefits:</h4>
              <p>It's helpful for people with dry, sensitive, or irritated skin, eyes or airways. 
              It's often used for eczema,allergies, dry eyes, and inflammation because
              it's gentle and soothing.</p>
            </div>
          </div>

          <p className="evidence-note">
            Evidence: Supported by dermatological research from{" "}
            <a href="https://www.nlm.nih.gov" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:opacity-80">
              The National Library of Medicine
            </a>.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default IngredientOfTheWeek;
