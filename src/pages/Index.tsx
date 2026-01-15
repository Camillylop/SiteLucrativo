import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { TargetAudience } from "@/components/TargetAudience";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/10 selection:text-foreground">
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Portfolio />
        <TargetAudience />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
