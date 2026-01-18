import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    segment: "Landing Page",
    title: "CoachPro",
    description: "Site profissional com sistema de agendamento integrado.",
    result: "+40% conversão",
    image: "/images/nutri.png",
    link: "https://coachpro-two.vercel.app/"
  },
  {
    segment: "Institucional",
    title: "Apex Dental",
    description: "Presença digital moderna com galeria de casos.",
    result: "#1 no Google",
    image: "/images/dentist.png",
    link: "#"
  },
  {
    segment: "Profissional",
    title: "Advocacia Almeida&Torres",
    description: "Landing page premium focada em autoridade.",
    result: "2x consultas",
    image: "/images/lawyer.png",
    link: "https://institucional-advocacia-red.vercel.app/"
  },
  {
    segment: "E-commerce",
    title: "Moderne",
    description: "Loja completa com catálogo e checkout.",
    result: "Vendas 24/7",
    image: "/images/fashion.png",
    link: "#"
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-background">
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
            Projetos recentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Cada projeto é desenvolvido com atenção aos detalhes.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target={project.link !== "#" ? "_blank" : "_self"}
              rel={project.link !== "#" ? "noopener noreferrer" : ""}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group block rounded-3xl border border-border bg-card overflow-hidden hover:shadow-strong transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Floating badge */}
                <div className="absolute top-6 right-6">
                  <div className="w-11 h-11 rounded-full bg-background/95 backdrop-blur-md flex items-center justify-center border border-border/50 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-medium">
                  {project.segment}
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-3 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-foreground">
                    {project.result}
                  </span>
                  <span className="text-sm text-primary font-medium group-hover:translate-x-1 transition-transform">
                    Ver projeto →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
