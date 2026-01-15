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
            Este Serviço é Para Você?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Descubra se a criação de um site profissional é o próximo passo para o seu negócio.
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
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4285F4] to-[#34A853] text-white flex items-center justify-center mb-6 shadow-md">
                <audience.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">{audience.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">{audience.description}</p>

              <ul className="space-y-4">
                {audience.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm text-foreground font-medium">
                    <CheckCircle className="w-5 h-5 text-[#34A853] flex-shrink-0" />
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
