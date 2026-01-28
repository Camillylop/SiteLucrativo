import { motion } from "framer-motion";
import { Users, Award, ShoppingBag, CheckCircle } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Você depende só de indicação?",
    description: "Sabemos como é frustrante ter um ótimo serviço mas não ser encontrado por novos clientes que precisam de você.",
    benefits: ["Ser descoberto no Google", "Atrair clientes qualificados", "Crescer além do boca a boca"],
  },
  {
    icon: Award,
    title: "Sua expertise não aparece online?",
    description: "Entendemos a dificuldade de transmitir sua autoridade e diferencial quando você não tem presença digital profissional.",
    benefits: ["Mostrar sua credibilidade", "Destacar-se da concorrência", "Construir confiança antes do contato"],
  },
  {
    icon: ShoppingBag,
    title: "Perde tempo com perguntas repetitivas?",
    description: "Sabemos que responder as mesmas dúvidas no WhatsApp toma seu tempo e dificulta o crescimento do negócio.",
    benefits: ["Automatizar informações básicas", "Receber leads mais preparados", "Focar em quem realmente vai comprar"],
  },
];

export function TargetAudience() {
  return (
    <section className="py-32 bg-background">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-foreground text-sm font-medium mb-4 border border-border">
            Para Quem É
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-4 tracking-tight">
            Reconhece algum desses desafios?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Você não está sozinho. Esses são os desafios mais comuns de quem precisa crescer online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-medium transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066CC] to-[#00A86B] text-white flex items-center justify-center mb-6 shadow-md">
                <audience.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">{audience.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">{audience.description}</p>

              <ul className="space-y-4">
                {audience.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm text-foreground font-medium">
                    <CheckCircle className="w-5 h-5 text-[#00A86B] flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
