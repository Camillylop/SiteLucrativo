import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Star } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5519997117300?text=Olá! Quero conversar sobre como posso atrair mais clientes online.";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto rounded-[3rem] p-8 md:p-24 text-center border border-border shadow-2xl relative overflow-hidden group"
        >
          {/* Background - Clean & Premium Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60" />

          <div className="relative z-10 flex flex-col items-center">

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[1.1] max-w-4xl">
              Pronto para levar seu negócio para o
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                próximo nível?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Sem pressa, sem compromisso. Apenas uma conversa franca sobre o potencial do seu projeto.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full px-10 h-14 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Agendar conversa agora
                </a>
              </Button>
            </div>

            {/* Minimalist Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-border/50 flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Disponibilidade imediata
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                Projetos Exclusivos
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
