import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    segment: "Nutricionista",
    problem: "Profissional com dificuldade de conseguir novos pacientes.",
    solution: "Site profissional com foco em SEO local e agendamento.",
    result: "+40% contatos/mês",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
    text: "text-emerald-400"
  },
  {
    segment: "Clínica Odontológica",
    problem: "Sem presença digital, perdendo pacientes para concorrentes.",
    solution: "Site institucional com galeria e depoimentos.",
    result: "Novos pacientes Google",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
    text: "text-blue-400"
  },
  {
    segment: "Advogado",
    problem: "Precisava transmitir autoridade e captar leads.",
    solution: "Landing page focada em áreas de atuação.",
    result: "Dobro de consultas",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
    text: "text-amber-400"
  },
  {
    segment: "Loja de Roupas",
    problem: "Queria expandir vendas pelo Instagram e WhatsApp.",
    solution: "Catálogo online com integração direta.",
    result: "Vendas organizadas",
    color: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/20",
    text: "text-pink-400"
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            Portfólio Selecionado
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Projetos que <span className="text-gradient">Geram Resultados</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Conheça alguns casos de sucesso de clientes que transformaram seus negócios
            através de um site profissional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.segment}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <span className={`inline-block px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-md border ${project.border} ${project.text} text-sm font-medium`}>
                    {project.segment}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">O Desafio</h4>
                    <p className="text-zinc-300 text-base md:text-lg leading-snug">{project.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">A Solução</h4>
                    <p className="text-zinc-300 text-base md:text-lg leading-snug">{project.solution}</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-black/20 ${project.text}`}>
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-white text-lg">{project.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="xl" className="border-white/10 bg-white/5 hover:bg-white/10 text-white min-w-[200px]" asChild>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              Ver Mais Projetos
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
