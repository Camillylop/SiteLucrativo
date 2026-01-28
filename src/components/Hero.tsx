import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5519997117300?text=Olá! Quero conversar sobre como posso atrair mais clientes online.";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 bg-background overflow-hidden px-4 md:px-0">
      {/* Background Gradient Spotlights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none opacity-50 dark:opacity-20" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -ml-32 -mb-32 pointer-events-none opacity-50 dark:opacity-20" />

      <div className="container-responsive relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Content Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] mb-6 tracking-tight"
            >
              Como você atrai mais clientes
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                sem depender só de indicação?
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl font-normal leading-relaxed"
            >
              Ajudamos profissionais e empresas a serem encontrados por quem realmente precisa dos seus serviços.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-20 lg:mb-0 w-full lg:w-auto"
            >
              <Button
                size="lg"
                className="rounded-full px-8 h-12 text-base font-medium shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Vamos conversar sobre seu desafio
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 text-base font-medium border-2 border-border hover:bg-muted/50 group w-full sm:w-auto"
                asChild
              >
                <a href="#solucoes" className="flex items-center justify-center gap-2">
                  Ver como ajudamos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-strong border border-white/10 glass-card p-2 bg-background/50 backdrop-blur-sm">
              <img
                src="/images/hero-mockup.png"
                alt="Dashboard de crescimento digital"
                className="w-full h-auto rounded-xl shadow-inner"
              />

              {/* Floating Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-4 rounded-xl shadow-strong border border-border flex items-center gap-4 max-w-xs"
              >
                <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </div>
                <div>
                  <p className="font-bold text-lg">+142%</p>
                  <p className="text-xs text-muted-foreground">Novos clientes este mês</p>
                </div>
              </motion.div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>

        {/* Mobile-only Image (smaller version) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:hidden mt-12 mb-12"
        >
          <div className="rounded-2xl overflow-hidden shadow-medium border border-border">
            <img
              src="/images/hero-mockup.png"
              alt="Crescimento Digital"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Feature Highlights - Material Design inspired */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl mx-auto pt-10 lg:pt-20 border-t border-border mt-10"
        >
          <div className="text-center group">
            <div className="text-4xl md:text-5xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary/70 mb-2 tracking-tight">
              100+
            </div>
            <div className="text-base text-muted-foreground">Profissionais que cresceram conosco</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-accent to-accent/70 mb-2 tracking-tight">
              4.9
            </div>
            <div className="text-base text-muted-foreground">Satisfação dos nossos parceiros</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent mb-2 tracking-tight">
              24h
            </div>
            <div className="text-base text-muted-foreground">Para começarmos a trabalhar juntos</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
