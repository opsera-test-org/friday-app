import HeroSection from "@/components/HeroSection";
import VibeCard from "@/components/VibeCard";
import WeekendPlans from "@/components/WeekendPlans";
import QuoteCard from "@/components/QuoteCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-6">
        <VibeCard />
        <WeekendPlans />
        <div className="md:col-span-2">
          <QuoteCard />
        </div>
      </section>

      <footer className="text-center py-10 text-muted-foreground font-body text-sm">
        Friday Feb · Made with warmth ✨
      </footer>
    </div>
  );
};

export default Index;
