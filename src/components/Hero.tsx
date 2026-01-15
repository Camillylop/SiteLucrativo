import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5519997117300?text=Olá! Gostaria de solicitar um orçamento para criação de site.";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 bg-background">
      <div className="container-responsive relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

          {/* Main Headline - Apple Style with Google accent */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[1.05] mb-6 tracking-tight"
          >
            Sites que vendem.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853]">
              Simples assim.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl font-normal leading-relaxed"
          >
            Design limpo. Performance excepcional. Resultados reais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            {/* Google-style primary button */}
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-base font-medium bg-[#4285F4] hover:bg-[#357ae8] shadow-md hover:shadow-lg transition-all"
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-12 text-base font-medium border-2 border-border hover:bg-muted/50 group"
              asChild
            >
              <a href="#portfolio" className="flex items-center gap-2">
                Ver projetos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Feature Highlights - Material Design inspired */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl pt-20 border-t border-border"
          >
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-[#4285F4] to-[#357ae8] mb-2 tracking-tight">
                100+
              </div>
              <div className="text-base text-muted-foreground">Projetos entregues</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-[#EA4335] to-[#c5221f] mb-2 tracking-tight">
                4.9
              </div>
              <div className="text-base text-muted-foreground">Avaliação média</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-[#34A853] to-[#0f9d58] mb-2 tracking-tight">
                24h
              </div>
              <div className="text-base text-muted-foreground">Tempo de resposta</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
