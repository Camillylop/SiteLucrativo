import { motion } from "framer-motion";
import { Building2, Briefcase, Store, Rocket, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Você perde clientes porque não é encontrado no Google?",
    description: "Ajudamos empresas a serem descobertas por quem procura seus serviços online.",
    color: "bg-primary", // Uses Brand Blue defined in primary
  },
  {
    icon: Briefcase,
    title: "Como você transmite autoridade e confiança online?",
    description: "Criamos presença digital que reflete sua expertise e diferencia você da concorrência.",
    color: "bg-[hsl(142,70%,45%)]", // Brand Green
  },
  {
    icon: Store,
    title: "Quer vender 24h sem depender de redes sociais?",
    description: "Desenvolvemos sua loja virtual para você ter autonomia e escalar suas vendas.",
    color: "bg-[hsl(262,80%,60%)]", // Brand Purple
  },
  {
    icon: Rocket,
    title: "Como você transforma visitantes em clientes?",
    description: "Criamos páginas estratégicas que guiam seu público até a decisão de compra.",
    color: "bg-[hsl(20,90%,60%)]", // Brand Orange
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-32 bg-muted/30">
      <div className="container-responsive">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-4 tracking-tight">
            Como podemos ajudar você
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Entendemos os desafios de quem precisa crescer online e temos soluções personalizadas.
          </p>
        </motion.div>

        {/* Services Grid - Bento Style */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group relative overflow-hidden p-8 rounded-3xl bg-card border border-border hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-${service.color.replace('bg-', '')}/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150`} />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Wrapper */}
                <div className={`w-14 h-14 rounded-2xl ${service.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="mt-6 pt-6 border-t border-border/50 flex items-center text-primary font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Saiba mais <ArrowUpRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-sm max-w-3xl mx-auto">
            Em cada projeto, trabalhamos lado a lado com você para garantir que sua presença online gere resultados reais.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
