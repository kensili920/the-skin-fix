import { motion } from "framer-motion";
import retinolImg from "@/assets/retinol.jpg";

const IngredientOfTheWeek = () => (
  <section id="iotw" className="section-padding section-alt">
    <div className="max-w-5xl mx-auto">
      <h2 className="script-heading text-4xl md:text-5xl text-center mb-12">Ingredient of the Week</h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.img
          src={retinolImg}
          alt="Retinol serum bottle"
          className="rounded-lg shadow-md w-full max-w-sm mx-auto"
          loading="lazy" width={640} height={640}
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold mb-6">Retinol</h3>

          <div className="space-y-5 text-foreground/80 leading-relaxed">
            <div>
              <h4 className="font-semibold text-foreground mb-1">What it is:</h4>
              <p>A form of vitamin A that helps to prevent aging and stop acne. It can be purchased over the counter or prescribed.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">How it works:</h4>
              <p>Retinol helps your skin make new cells faster, which keeps pores clear and prevents them from getting clogged. It also gently exfoliates and boosts collagen, so your skin looks smoother and fresher.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Who benefits:</h4>
              <p>Teens and adults who have acne, clogged pores, or uneven skin texture. Especially helpful for regular breakouts or oily skin. Also good for early fine lines.</p>
            </div>
          </div>

          <p className="evidence-note">
            Evidence: Supported by dermatological research from{" "}
            <a href="https://my.clevelandclinic.org" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:opacity-80">
              Cleveland Clinic
            </a>.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default IngredientOfTheWeek;
