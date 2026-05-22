import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const recommendations: Record<string, string[]> = {
  "Dry Skin": ["Hyaluronic Acid", "Ceramides", "Glycerin", "Squalane"],
  "Acne": ["Salicylic Acid", "Benzoyl Peroxide", "Retinol", "Niacinamide"],
  "Inflammation": ["Azelaic Acid", "Niacinamide", "Centella Asiatica", "Green Tea Extract"],
  "Sensitive Skin": ["Ceramides", "Aloe Vera", "Oat Extract", "Panthenol"],
};

const IngredientFinder = () => {
  const [concern, setConcern] = useState("");
  const [results, setResults] = useState<string[] | null>(null);

  const handleFind = () => {
    if (concern) setResults(recommendations[concern] ?? []);
  };

  return (
    <section id="finder" className="section-padding max-w-3xl mx-auto text-center">
      <h2 className="script-heading text-4xl md:text-5xl mb-8">Ingredient Finder</h2>
      <p className="text-foreground/70 mb-6">Choose your skin concern:</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <select
          value={concern}
          onChange={(e) => { setConcern(e.target.value); setResults(null); }}
          className="rounded-md border border-border bg-card px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 w-full sm:w-auto"
        >
          <option value="">-- Select --</option>
          {Object.keys(recommendations).map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <button
          onClick={handleFind}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
        >
          Find Ingredients
        </button>
      </div>

      <AnimatePresence mode="wait">
        {results && (
          <motion.div
            key={concern}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {results.map(r => (
              <span key={r} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm">
                {r}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default IngredientFinder;
