import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { useState } from "react";

const quotes = [
  { text: "Friday is the golden child of the weekdays.", author: "Unknown" },
  { text: "It's Friday! Time to go make stories for Monday.", author: "Unknown" },
  { text: "February is merely as long as is needed to pass the time until March.", author: "J.R. Stockton" },
  { text: "Every Friday, I like to high five myself for getting through another week.", author: "Unknown" },
  { text: "Music always sounds better on Friday.", author: "Lou Brutus" },
  { text: "The only thing better than Friday is a Friday in February.", author: "Unknown" },
];

const QuoteCard = () => {
  const [index, setIndex] = useState(0);

  const nextQuote = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="glass-card p-8 glow-amber relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-warm opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative">
        <span className="font-display text-6xl text-primary/20 leading-none">"</span>
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-xl md:text-2xl text-foreground italic -mt-8 ml-6"
        >
          {quotes[index].text}
        </motion.p>
        <p className="text-muted-foreground font-body mt-4 ml-6">
          — {quotes[index].author}
        </p>

        <button
          onClick={nextQuote}
          className="mt-4 ml-6 text-muted-foreground hover:text-primary transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default QuoteCard;
