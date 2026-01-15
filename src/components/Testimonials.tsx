import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Nutricionista",
    content: "Finalmente tenho um site que reflete minha profissionalidade. Já recebi vários contatos de novos pacientes!",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Advogado",
    content: "O processo foi simples e o resultado superou minhas expectativas. Recomendo para qualquer profissional.",
    rating: 5,
  },
  {
    name: "Ana Paula",
    role: "Proprietária de Clínica",
    content: "Nosso site ficou moderno e nossos pacientes elogiam muito. Valeu cada centavo investido.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-background relative">
      <div className="absolute top-1/2 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            O Que Dizem <span className="text-gradient">Meus Clientes</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Veja o feedback de profissionais que já transformaram sua presença online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative rounded-3xl p-6 md:p-8 glass-card"
            >
              <div className="absolute top-6 right-6 p-2 rounded-xl bg-white/5">
                <Quote className="w-5 h-5 text-accent/50" />
              </div>

              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-zinc-300 mb-8 leading-relaxed text-base md:text-lg">"{testimonial.content}"</p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg">
                  {testimonial.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-bold text-white mb-1">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-zinc-400 font-medium uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
