import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ingredientsData from "@/content/ingredients.json";

interface Ingredient {
  name: string;
  whatItIs: string;
  howItWorks: string;
  whoBenefits: string;
  evidence: string;
  evidenceUrl: string;
}

const ingredients: Ingredient[] = ingredientsData as Ingredient[];

const IngredientLibrary = () => {
  const [selected, setSelected] = useState(ingredients[0].name);
  const current = ingredients.find(i => i.name === selected)!;

  return (
    <section id="library" className="section-padding max-w-4xl mx-auto">
      <h2 className="script-heading text-4xl md:text-5xl text-center mb-10">Ingredient Library</h2>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {ingredients.map(ing => (
          <button
            key={ing.name}
            onClick={() => setSelected(ing.name)}
            className={`px-4 py-2 rounded-full text-sm transition-all border ${
              selected === ing.name
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-foreground/70 border-border hover:border-primary/40"
            }`}
          >
            {ing.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.name}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="ingredient-card"
        >
          <h3 className="text-2xl font-semibold mb-6">{current.name}</h3>

          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <div>
              <h4 className="font-semibold text-foreground mb-1">What it is:</h4>
              <p>{current.whatItIs}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">How it works:</h4>
              <p>{current.howItWorks}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Who benefits:</h4>
              <p>{current.whoBenefits}</p>
            </div>
          </div>

          <p className="evidence-note">
            {current.evidence.replace(/from .*$/, "from ")}{" "}
            <a href={current.evidenceUrl} target="_blank" rel="noopener noreferrer" className="underline text-primary hover:opacity-80">
              {current.evidenceUrl.replace(/https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
            </a>.
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default IngredientLibrary;
