import { motion } from "framer-motion";
import { Search, Layout, Palette, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Ouvimos seu desafio",
    description: "Conversamos para entender profundamente suas dores, objetivos e o que realmente importa para você.",
    color: "bg-primary",
  },
  {
    number: "02",
    icon: Layout,
    title: "Desenhamos a solução ideal",
    description: "Criamos uma estratégia personalizada, não um template genérico, pensada especificamente para você.",
    color: "bg-[hsl(142,70%,45%)]",
  },
  {
    number: "03",
    icon: Palette,
    title: "Criamos sua presença única",
    description: "Desenvolvemos uma identidade digital que reflete sua essência e diferencia você da concorrência.",
    color: "bg-[hsl(262,80%,60%)]",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Você colhe resultados",
    description: "Seu site vai ao ar e você começa a ser encontrado por quem realmente precisa dos seus serviços.",
    color: "bg-[hsl(20,90%,60%)]",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-32 bg-background">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-foreground text-sm font-medium mb-4 border border-border">
            Processo
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-4 tracking-tight">
            Como trabalhamos juntos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Uma parceria transparente focada em transformar sua presença digital.
          </p>
        </motion.div>

        {/* Steps Grid - with connecting line on desktop */}
        <div className="relative grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-medium transition-all duration-300 relative overflow-hidden group pt-4"
            >
              <div className="flex flex-col h-full relative z-10">
                <div className={`w-12 h-12 rounded-xl ${step.color} text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-6 h-6" />
                </div>

                <div className="text-sm font-bold text-muted-foreground/30 mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
