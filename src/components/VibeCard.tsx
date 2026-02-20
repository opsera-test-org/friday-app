import { motion } from "framer-motion";
import { useState } from "react";

const vibes = [
  { emoji: "☕", label: "Cozy", color: "coral" },
  { emoji: "🔥", label: "Fired Up", color: "amber" },
  { emoji: "🌊", label: "Chill", color: "navy" },
  { emoji: "✨", label: "Inspired", color: "coral" },
  { emoji: "🎵", label: "Groovy", color: "amber" },
  { emoji: "💭", label: "Dreamy", color: "navy" },
];

const VibeCard = () => {
  const [selectedVibe, setSelectedVibe] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card p-8"
    >
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
        What's your vibe?
      </h2>
      <p className="text-muted-foreground font-body mb-6">
        Pick your February Friday energy
      </p>

      <div className="grid grid-cols-3 gap-3">
        {vibes.map((vibe, i) => (
          <motion.button
            key={vibe.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedVibe(i)}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 font-body ${
              selectedVibe === i
                ? "border-primary bg-primary/10 glow-coral"
                : "border-border/50 bg-muted/30 hover:border-primary/30"
            }`}
          >
            <span className="text-3xl">{vibe.emoji}</span>
            <span className={`text-sm font-medium ${selectedVibe === i ? "text-primary" : "text-muted-foreground"}`}>
              {vibe.label}
            </span>
          </motion.button>
        ))}
      </div>

      {selectedVibe !== null && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-6 text-center"
        >
          <p className="text-foreground font-display text-xl italic">
            {vibes[selectedVibe].emoji} Feeling {vibes[selectedVibe].label.toLowerCase()} this Friday
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default VibeCard;
