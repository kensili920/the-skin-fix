import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ingredient {
  name: string;
  whatItIs: string;
  howItWorks: string;
  whoBenefits: string;
  evidence: string;
  evidenceUrl: string;
}

const ingredients: Ingredient[] = [
  {
    name: "Hyaluronic Acid",
    whatItIs: "A naturally occurring sugar in the body's connective tissue that helps give skin its structure and hydration. While collagen gets all the hype, hyaluronic acid is the real key to that plump, fresh-looking skin.",
    howItWorks: "Hyaluronic acid can hold up to 1,000 times its weight in water. It keeps moisture locked into your skin, slows water loss, and helps skin stay plump and hydrated. Studies even show it helps with wound healing.",
    whoBenefits: "Anyone looking to hydrate and plump their skin, smooth fine lines, boost elasticity, calm redness, support wound healing, and help manage conditions like eczema.",
    evidence: "Supported by board certified dermatological research from healthline.com.",
    evidenceUrl: "https://healthline.com",
  },
  {
    name: "Niacinamide",
    whatItIs: "A form of vitamin B3 that helps strengthen the skin barrier.",
    howItWorks: "Supports ceramide production and reduces inflammation in the epidermis.",
    whoBenefits: "Acne-prone, oily, and sensitive skin types.",
    evidence: "Supported by dermatological research from the American Academy of Dermatology.",
    evidenceUrl: "https://aad.org",
  },
  {
    name: "Salicylic Acid",
    whatItIs: "A beta-hydroxy acid (BHA), originally derived from willow bark.",
    howItWorks: "Since it's oil-soluble, it slips deep into pores to clear excess oil, calm inflammation, and keep breakouts in check.",
    whoBenefits: "Perfect for anyone dealing with acne, oily skin or scalp, redness, dandruff, or psoriasis.",
    evidence: "Supported by research from The Skin Cancer and Dermatology Institute.",
    evidenceUrl: "https://skincancerdermatology.com",
  },
  {
    name: "Peptides",
    whatItIs: "Strings of amino acids added to skincare products to boost their effectiveness.",
    howItWorks: "Combine together to make proteins, specifically elastin and collagen, which help your skin stay strong and flexible.",
    whoBenefits: "People looking for skin firmness, elasticity, and hydration.",
    evidence: "Supported by dermatological research from Cleveland Clinic.",
    evidenceUrl: "https://my.clevelandclinic.org",
  },
  {
    name: "Benzoyl Peroxide",
    whatItIs: "A topical acne treatment that targets acne-causing bacteria. Think of it as the skin's built-in security detail.",
    howItWorks: "It increases your skin's oxidizing activity, releasing oxygen onto the surface. Acne bacteria hate oxygen. The extra oxygen helps destroy the bacteria, clear clogged pores, and make any leftover bacteria much easier to wash away.",
    whoBenefits: "Best for anyone dealing with inflammatory acne — especially those surprise red breakouts. Particularly helpful for oily and acne-prone skin types.",
    evidence: "Supported by dermatological research from Dermatica.",
    evidenceUrl: "https://dermatica.co.uk",
  },
  {
    name: "Ceramides",
    whatItIs: "Fats or lipids that make up about half of your epidermis.",
    howItWorks: "They combine with cholesterol and fatty acids to form tightly packed, organized lipid layers that reduce water loss and protect against external irritants.",
    whoBenefits: "Ideal for dry, sensitive, compromised, or eczema-prone skin (basically anyone whose barrier needs reinforcement).",
    evidence: "Supported by dermatological research from Cleveland Clinic.",
    evidenceUrl: "https://my.clevelandclinic.org",
  },
  {
    name: "Azelaic Acid",
    whatItIs: "A skincare ingredient that dermatologists use to treat things like acne, redness, and dark spots.",
    howItWorks: "It helps reduce acne-causing bacteria, calms inflammation and redness, prevents pores from clogging, and slows pigment production to help fade dark spots left from breakouts.",
    whoBenefits: "People with mild to moderate acne, especially if they also deal with redness or dark marks. Often recommended for sensitive skin because it tends to be less irritating.",
    evidence: "Supported by dermatological research from The National Library of Medicine.",
    evidenceUrl: "https://pubmed.ncbi.nlm.nih.gov",
  },
];

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
