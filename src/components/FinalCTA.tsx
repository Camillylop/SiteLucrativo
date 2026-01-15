import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Star } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para criação de site.";

export function FinalCTA() {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto bg-background rounded-[2.5rem] p-8 md:p-20 text-center border border-border shadow-strong relative overflow-hidden"
        >
          {/* Subtle Google Sparkle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4285F4]/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#34A853]/5 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EA4335]/10 border border-[#EA4335]/20 text-[#EA4335] mb-8"
            >
              <Star className="w-4 h-4 fill-[#EA4335]" />
              <span className="font-semibold text-sm">Vagas limitadas para este mês</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-8 tracking-tight leading-[1.1]">
              Pronto para ter um site que{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#34A853]">
                realmente funciona?
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-normal leading-relaxed">
              Não deixe seus concorrentes saírem na frente. Solicite agora um orçamento
              gratuito e transforme sua presença digital em poucos dias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full px-10 h-14 text-lg font-medium bg-[#4285F4] hover:bg-[#357ae8] shadow-md hover:shadow-lg transition-all"
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Solicitar Orçamento Grátis
                </a>
              </Button>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6">
              <div className="flex items-center gap-2 text-foreground font-medium text-sm">
                <CheckCircle className="w-5 h-5 text-[#34A853]" />
                <span>Resposta em até 1 hora</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium text-sm">
                <CheckCircle className="w-5 h-5 text-[#34A853]" />
                <span>Orçamento sem compromisso</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium text-sm">
                <CheckCircle className="w-5 h-5 text-[#34A853]" />
                <span>Sem taxas escondidas</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
