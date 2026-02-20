import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Check, X } from "lucide-react";

interface Plan {
  id: number;
  text: string;
  done: boolean;
}

const WeekendPlans = () => {
  const [plans, setPlans] = useState<Plan[]>([
    { id: 1, text: "Morning coffee ritual ☕", done: false },
    { id: 2, text: "Try that new restaurant 🍜", done: false },
    { id: 3, text: "Movie night in 🎬", done: false },
  ]);
  const [newPlan, setNewPlan] = useState("");

  const addPlan = () => {
    if (!newPlan.trim()) return;
    setPlans([...plans, { id: Date.now(), text: newPlan, done: false }]);
    setNewPlan("");
  };

  const togglePlan = (id: number) => {
    setPlans(plans.map((p) => (p.id === id ? { ...p, done: !p.done } : p)));
  };

  const removePlan = (id: number) => {
    setPlans(plans.filter((p) => p.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass-card p-8"
    >
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
        Weekend Plans
      </h2>
      <p className="text-muted-foreground font-body mb-6">
        What's on the agenda?
      </p>

      <div className="space-y-3">
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
              plan.done ? "bg-primary/5" : "bg-muted/30"
            }`}
          >
            <button
              onClick={() => togglePlan(plan.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                plan.done
                  ? "border-primary bg-primary"
                  : "border-muted-foreground/30 hover:border-primary"
              }`}
            >
              {plan.done && <Check className="w-3 h-3 text-primary-foreground" />}
            </button>
            <span
              className={`flex-1 font-body transition-all ${
                plan.done ? "line-through text-muted-foreground" : "text-foreground"
              }`}
            >
              {plan.text}
            </span>
            <button
              onClick={() => removePlan(plan.id)}
              className="text-muted-foreground/40 hover:text-destructive transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={newPlan}
          onChange={(e) => setNewPlan(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addPlan()}
          placeholder="Add a plan..."
          className="flex-1 bg-muted/30 border border-border/50 rounded-xl px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
        />
        <button
          onClick={addPlan}
          className="bg-gradient-warm text-primary-foreground rounded-xl px-4 py-3 hover:opacity-90 transition-opacity"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default WeekendPlans;
