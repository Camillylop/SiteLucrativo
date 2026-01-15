import { motion } from "framer-motion";
import { Search, Layout, Palette, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Entendimento",
    description: "Conversamos para entender seu negócio, público-alvo e objetivos estratégicos.",
    color: "bg-[#4285F4]", // Google Blue
  },
  {
    number: "02",
    icon: Layout,
    title: "Estratégia",
    description: "Desenvolvo a estrutura do site com foco total em SEO e conversão de visitantes.",
    color: "bg-[#EA4335]", // Google Red
  },
  {
    number: "03",
    icon: Palette,
    title: "Design",
    description: "Aplico um design moderno e minimalista que transmite autoridade e confiança.",
    color: "bg-[#FBBC04]", // Google Yellow
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lançamento",
    description: "Seu site vai ao ar otimizado para todos os dispositivos e pronto para vender.",
    color: "bg-[#34A853]", // Google Green
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
            Como funciona o projeto
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Um processo organizado e transparente para entregar resultados reais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-medium transition-all duration-300 relative overflow-hidden group"
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
