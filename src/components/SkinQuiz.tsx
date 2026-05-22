import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    q: "How does your skin feel 30–60 minutes after washing?",
    opts: ["Tight and dry", "Comfortable", "Shiny", "Oily in some areas, dry in others"],
  },
  {
    q: "By the end of the day your face looks...",
    opts: ["Flaky", "Normal", "Very shiny", "Shiny in T-zone only"],
  },
  {
    q: "How often do you get breakouts?",
    opts: ["Rarely", "Sometimes around my period or when I'm stressed", "Frequently", "Only in oily areas"],
  },
  {
    q: "How does your skin react to new products?",
    opts: ["It stings or turns red easily", "Usually fine", "Breaks out", "Depends on the product"],
  },
  {
    q: "What does your makeup start to do after a few hours?",
    opts: ["It clings to patches", "Stays intact", "Slides off or gets shiny", "Melts in T-zone and gets dry elsewhere"],
  },
  {
    q: "How do your pores appear?",
    opts: ["Small and barely visible", "Visible but not noticeable", "Large and noticeable", "Large in some areas and small in others"],
  },
];

type SkinType = "Dry" | "Normal" | "Oily" | "Combination";

const skinTypeDescriptions: Record<SkinType, string> = {
  Dry: "Your skin tends to feel tight and may get flaky. Look for hydrating ingredients like Hyaluronic Acid, Ceramides, and Squalane. Avoid harsh cleansers.",
  Normal: "Lucky you! Your skin is well-balanced. Maintain it with a gentle routine featuring Niacinamide and antioxidants.",
  Oily: "Your skin produces excess sebum. Try Salicylic Acid, Niacinamide, and lightweight moisturizers. Don't skip hydration!",
  Combination: "You have a mix of oily and dry zones. Use gentle, balancing products. Niacinamide and Hyaluronic Acid work great for you.",
};

const SkinQuiz = () => {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [result, setResult] = useState<SkinType | null>(null);

  const handleSelect = (qIndex: number, optIndex: number) => {
    const next = [...answers];
    next[qIndex] = optIndex;
    setAnswers(next);
  };

  const calculateResult = () => {
    const counts = [0, 0, 0, 0]; // dry, normal, oily, combination
    answers.forEach(a => { if (a >= 0) counts[a]++; });
    const max = Math.max(...counts);
    const idx = counts.indexOf(max);
    const types: SkinType[] = ["Dry", "Normal", "Oily", "Combination"];
    setResult(types[idx]);
  };

  const allAnswered = answers.every(a => a >= 0);

  return (
    <section id="quiz" className="section-padding section-alt">
      <div className="max-w-3xl mx-auto">
        <h2 className="script-heading text-4xl md:text-5xl text-center mb-4">What's Your Skin Type?</h2>
        <p className="text-center text-foreground/60 mb-12">
          Answer based on how your skin feels in the morning before skincare.
        </p>

        <div className="space-y-8">
          {questions.map((q, qi) => (
            <motion.div
              key={qi}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: qi * 0.08 }}
              className="ingredient-card"
            >
              <p className="font-semibold mb-4">{qi + 1}. {q.q}</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {q.opts.map((opt, oi) => (
                  <button
                    key={oi}
                    onClick={() => handleSelect(qi, oi)}
                    className={`text-left px-4 py-3 rounded-md border text-sm transition-all ${
                      answers[qi] === oi
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border hover:border-primary/40 text-foreground/70"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={calculateResult}
            disabled={!allAnswered}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          >
            See My Result
          </button>
        </div>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="mt-10 ingredient-card text-center"
            >
              <h3 className="text-2xl font-semibold mb-3">Your Skin Type: {result}</h3>
              <p className="text-foreground/75 leading-relaxed">{skinTypeDescriptions[result]}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkinQuiz;
