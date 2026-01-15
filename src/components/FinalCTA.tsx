import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Star } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para criação de site.";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-primary rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent rounded-full blur-[80px] md:blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent mb-8 backdrop-blur-sm shadow-lg shadow-accent/10">
            <Star className="w-4 h-4 fill-accent" />
            <span className="font-semibold text-sm">Vagas limitadas para este mês</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            Pronto para ter um site que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">atrai clientes</span>?
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Não deixe seus concorrentes saírem na frente. Solicite agora um orçamento
            gratuito e descubra como posso ajudar seu negócio a crescer online.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="cta" size="xl" className="w-full sm:w-auto text-lg px-12 py-8 shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 transform hover:-translate-y-1" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-3" />
                Solicitar Orçamento Grátis
              </a>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-8 text-sm font-medium text-zinc-500"
          >
            <div className="flex items-center gap-2 text-zinc-400">
              <div className="bg-primary/20 p-1 rounded-full"><ArrowRight className="w-3 h-3 text-primary" /></div>
              <span>Resposta em até 1 hora</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <div className="bg-primary/20 p-1 rounded-full"><ArrowRight className="w-3 h-3 text-primary" /></div>
              <span>Orçamento sem compromisso</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <div className="bg-primary/20 p-1 rounded-full"><ArrowRight className="w-3 h-3 text-primary" /></div>
              <span>Pagamento facilitado</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
