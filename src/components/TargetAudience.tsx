import { motion } from "framer-motion";
import { Users, Award, ShoppingBag, CheckCircle } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Empreendedores",
    description: "Você já tem um negócio, mas precisa de um site profissional para alcançar novos clientes e crescer.",
    benefits: ["Mais visibilidade no Google", "Contatos qualificados", "Presença online 24h"],
  },
  {
    icon: Award,
    title: "Especialistas",
    description: "Um site transmite profissionalismo e confiança para seus pacientes, clientes ou alunos.",
    benefits: ["Autoridade no segmento", "Diferenciação da concorrência", "Portfólio online"],
  },
  {
    icon: ShoppingBag,
    title: "Vendas WhatsApp",
    description: "Se você usa o WhatsApp para vender, um site leva os clientes certos direto para sua conversa.",
    benefits: ["Vendas organizadas", "Leads qualificados", "Menos tempo tirando dúvidas"],
  },
];

export function TargetAudience() {
  return (
    <section className="py-20 md:py-32 bg-background relative sticky-pattern">
      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            Para Quem É
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Este Serviço é <span className="text-gradient">Para Você?</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Descubra se a criação de um site profissional é o próximo passo para o seu negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-3xl p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                <audience.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{audience.title}</h3>
              <p className="text-zinc-400 mb-6 md:mb-8 leading-relaxed h-auto md:h-24 text-sm md:text-base">{audience.description}</p>

              <ul className="space-y-3 md:space-y-4">
                {audience.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
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
