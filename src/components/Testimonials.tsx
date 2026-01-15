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
    <section className="py-32 bg-muted/30">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-foreground text-sm font-medium mb-4 border border-border">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-4 tracking-tight">
            O que dizem nossos clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Feedback de profissionais que transformaram sua presença online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl p-8 bg-background border border-border hover:shadow-medium transition-all duration-300"
            >
              <div className="absolute top-6 right-6 p-2 rounded-xl bg-muted">
                <Quote className="w-5 h-5 text-muted-foreground" />
              </div>

              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4285F4] to-[#34A853] flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {testimonial.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
