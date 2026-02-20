import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dayName = currentTime.toLocaleDateString("en-US", { weekday: "long" });
  const monthName = currentTime.toLocaleDateString("en-US", { month: "long" });
  const dayNum = currentTime.getDate();
  const year = currentTime.getFullYear();
  const timeStr = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const isFriday = currentTime.getDay() === 5;

  // Calculate days until Friday
  const daysUntilFriday = (5 - currentTime.getDay() + 7) % 7;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground font-body text-lg tracking-widest uppercase mb-4"
        >
          {monthName} {year}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-7xl md:text-9xl font-bold text-gradient-warm mb-2"
        >
          {dayName}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="font-display text-8xl md:text-[12rem] font-extrabold leading-none text-foreground/10 -mt-6 md:-mt-12"
        >
          {dayNum}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 font-body text-4xl md:text-5xl font-light tracking-tight text-foreground/70"
        >
          {timeStr}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10"
        >
          {isFriday ? (
            <span className="inline-block px-8 py-3 rounded-full bg-gradient-warm text-primary-foreground font-body font-semibold text-lg tracking-wide animate-pulse-warm">
              🎉 It's Friday!
            </span>
          ) : (
            <span className="inline-block px-8 py-3 rounded-full glass-card text-muted-foreground font-body text-lg">
              {daysUntilFriday === 0 ? "🎉 It's Friday!" : `${daysUntilFriday} day${daysUntilFriday > 1 ? "s" : ""} until Friday`}
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
