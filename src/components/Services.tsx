import { motion } from "framer-motion";
import { Building2, Briefcase, Store, Rocket, Search, Gauge, MessageSquare, Clock } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Sites Institucionais",
    description: "Apresente sua empresa de forma profissional e conquiste a confiança dos clientes.",
  },
  {
    icon: Briefcase,
    title: "Sites para Especialistas",
    description: "Ideal para advogados, médicos, personal trainers e consultores.",
  },
  {
    icon: Store,
    title: "E-commerce & Lojas",
    description: "Venda seus produtos 24 horas por dia com uma loja virtual completa.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "Páginas de alta conversão focadas em vender um produto ou serviço específico.",
  },
];

const differentials = [
  {
    icon: Search,
    title: "SEO Avançado",
    description: "Estrutura otimizada para colocar seu site na primeira página do Google.",
  },
  {
    icon: Gauge,
    title: "Velocidade Extrema",
    description: "Carregamento instantâneo para não perder nenhum cliente impaciente.",
  },
  {
    icon: MessageSquare,
    title: "Suporte Premium",
    description: "Atendimento direto pelo WhatsApp para qualquer dúvida ou ajuste.",
  },
  {
    icon: Clock,
    title: "Entrega Expressa",
    description: "Seu projeto no ar em tempo recorde, sem enrolação.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            O Que Eu Faço
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Soluções Digitais <span className="text-gradient">Completas</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Desenvolvo muito mais que sites. Crio ferramentas de vendas que funcionam
            24 horas por dia para o seu negócio crescer.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 md:mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Differentials */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por que escolher meu trabalho?
            </h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Enquanto agências tradicionais cobram caro e demoram meses, eu entrego
              qualidade premium com agilidade e foco total no seu resultado.
            </p>
            <div className="space-y-6">
              {differentials.map((diff, index) => (
                <div key={diff.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <diff.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">{diff.title}</h4>
                    <p className="text-zinc-400 text-sm md:text-base">{diff.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card p-1">
              <div className="bg-zinc-900 rounded-xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">100%</div>
                  <div className="text-zinc-400 uppercase tracking-widest text-sm">Satisfação</div>
                </div>
              </div>
              {/* Decorative floating elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse delay-1000" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
