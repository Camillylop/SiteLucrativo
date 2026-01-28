import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Nutricionista",
    content: "Antes eu dependia só de indicação. Agora sou encontrada no Google e recebo contatos de novos pacientes toda semana. Minha agenda mudou completamente!",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Advogado",
    content: "Eu tinha receio de investir em site, mas o retorno veio rápido. Hoje 40% dos meus clientes me encontram online. Valeu cada centavo!",
    rating: 5,
  },
  {
    name: "Ana Paula",
    role: "Proprietária de Clínica",
    content: "Paramos de perder tempo respondendo as mesmas perguntas no WhatsApp. O site faz isso por nós e só chegam leads realmente interessados.",
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
            Como ajudamos profissionais como você
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Transformações reais de quem decidiu investir em presença digital.
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
                  <Star key={i} className="w-5 h-5 fill-[#FF6B35] text-[#FF6B35]" />
                ))}
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0066CC] to-[#00A86B] flex items-center justify-center text-white font-bold text-lg shadow-md">
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
