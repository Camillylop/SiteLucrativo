import { motion } from "framer-motion";
import { Building2, Briefcase, Store, Rocket } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Institucional",
    description: "Presença digital profissional para empresas.",
    color: "bg-[#4285F4]", // Google Blue
  },
  {
    icon: Briefcase,
    title: "Profissionais",
    description: "Sites para médicos, advogados e consultores.",
    color: "bg-[#EA4335]", // Google Red
  },
  {
    icon: Store,
    title: "E-commerce",
    description: "Lojas virtuais completas e funcionais.",
    color: "bg-[#FBBC04]", // Google Yellow
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "Páginas focadas em conversão.",
    color: "bg-[#34A853]", // Google Green
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
            Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Soluções web adaptadas para o seu negócio.
          </p>
        </motion.div>

        {/* Services Grid - Google Material Design inspired */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group p-8 rounded-2xl bg-background border border-border hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
            >
              {/* Google-style colored icon */}
              <div className={`w-14 h-14 rounded-xl ${service.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
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
            Todos os projetos incluem SEO otimizado, design responsivo, performance de ponta e suporte dedicado.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
