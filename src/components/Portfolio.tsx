import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const solutions = [
  {
    category: "Automação & Escala B2B",
    title: "Portal de Vendas Self-Service",
    description: "Indústria com 15 consultores perdia 40% do tempo tirando pedidos manuais no WhatsApp. Criamos um portal B2B integrado ao ERP.",
    impact: "Custo de Venda: -70%",
    image: "/images/b2b-dashboard-v2.png",
    link: "#"
  },
  {
    category: "Infoproduto High-Ticket",
    title: "Ecossistema de Membros Premium",
    description: "Expert faturava alto mas estava estagnado. Desenvolvemos uma plataforma própria com upsell automático e recuperação de vendas.",
    impact: "Faturamento: +40%",
    image: "/images/solution-booking.png",
    link: "#"
  },
  {
    category: "Autoridade & Posicionamento",
    title: "Rebranding Corporativo",
    description: "Consultoria de elite era confundida com agências populares. Criamos uma identidade visual e site que transmitem exclusividade.",
    impact: "Ticket Médio: 2x Maior",
    image: "/images/solution-branding.png",
    link: "#"
  }
];

export function Portfolio() {
  return (
    <section id="solucoes" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container-responsive relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-4 tracking-tight">
            Soluções que entregamos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Não vendemos apenas sites. Entregamos ferramentas que resolvem problemas reais do seu negócio.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group flex flex-col h-full bg-card rounded-[2rem] border border-border overflow-hidden hover:shadow-strong transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-60" />
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Impact Badge */}
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="px-4 py-2 rounded-full bg-background/95 backdrop-blur-md border border-primary/20 shadow-lg flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-bold text-foreground">{solution.impact}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                  {solution.category}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {solution.description}
                </p>

                <div className="pt-6 border-t border-border mt-auto">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors cursor-pointer">
                    Quero uma solução assim
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
