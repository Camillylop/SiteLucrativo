import { motion } from "framer-motion";
import { Search, Layout, Palette, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Entendimento do Seu Negócio",
    description: "Conversamos para entender seu negócio, público-alvo e objetivos. Assim crio um site que realmente faz sentido para você.",
  },
  {
    number: "02",
    icon: Layout,
    title: "Criação da Estrutura",
    description: "Desenvolvo a estrutura do site com foco em SEO e conversão, organizando as informações de forma estratégica.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Design e Conteúdo",
    description: "Aplico um design profissional e escrevo textos persuasivos que falam diretamente com seus clientes.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Publicação e Orientações",
    description: "Seu site vai ao ar e você recebe orientações claras de como aproveitar ao máximo sua nova presença online.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent md:-translate-x-1/2" />

      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            Processo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Como <span className="text-gradient">Funciona?</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Um processo simples e organizado para você ter seu site pronto rapidamente.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-center gap-8 mb-12 md:mb-16 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(var(--primary),0.5)] -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20"}`}>
                  <div className={`glass-card p-6 md:p-8 rounded-3xl hover:border-primary/30 transition-all duration-300 group`}>
                    <div className={`flex items-center gap-4 md:gap-6 mb-4 md:mb-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                      </div>
                      <span className="text-3xl md:text-4xl font-black text-white/5">{step.number}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{step.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
