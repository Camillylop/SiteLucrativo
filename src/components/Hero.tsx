import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Zap, Search, Target, Palette, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para criação de site.";

const benefits = [
  { icon: Zap, text: "Sites Ultra Rápidos" },
  { icon: Palette, text: "Design Premium" },
  { icon: Search, text: "SEO Otimizado" },
  { icon: Target, text: "Foco em Conversão" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] animate-float opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/20 rounded-full blur-[80px] md:blur-[120px] animate-float opacity-30" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />
      </div>

      <div className="container-responsive relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm shadow-lg shadow-primary/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Desenvolvimento de Sites Profissionais
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] md:leading-tight mb-8"
          >
            Sites Lucrativos que <br className="hidden md:block" />
            <span className="text-gradient">Vendem Por Você</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed mx-auto"
          >
            Transforme visitantes em clientes com um site profissional, rápido e otimizado para vendas. O investimento que se paga sozinho.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0 mb-16"
          >
            <Button variant="cta" size="xl" className="w-full sm:w-auto group relative overflow-hidden" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Orçamento Gratuito
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 transform" />
              </a>
            </Button>

            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#portfolio">
                Ver Projetos
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card p-4 md:p-6 rounded-2xl flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform duration-300 border-primary/10 hover:border-primary/30 group"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>


        </div>
      </div>
    </section>
  );
}
