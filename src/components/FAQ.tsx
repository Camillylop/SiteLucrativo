import { ActionFunctionArgs } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "Quanto custa para fazer um site?",
        answer: "O investimento varia de acordo com a complexidade do projeto. Sites institucionais simples começam com valores mais acessíveis, enquanto lojas virtuais ou sistemas personalizados requerem maior investimento. Entre em contato pelo WhatsApp para um orçamento personalizado gratuito."
    },
    {
        question: "Quanto tempo leva para ficar pronto?",
        answer: "Para sites institucionais e landing pages, o prazo médio é de 5 a 10 dias úteis após o recebimento de todo o material (textos e imagens). Projetos mais complexos podem levar de 15 a 30 dias."
    },
    {
        question: "O site vai funcionar no celular?",
        answer: "Sim! Todos os sites que desenvolvo são 100% responsivos, ou seja, se adaptam perfeitamente a computadores, tablets e smartphones."
    },
    {
        question: "Preciso pagar mensalidade?",
        answer: "Eu não cobro mensalidade pelo desenvolvimento. O site é seu! Você terá apenas os custos anuais de domínio (aprox. R$ 40/ano) e hospedagem (aprox. R$ 30/mês), que são pagos diretamente aos provedores."
    },
    {
        question: "Como funciona o pagamento?",
        answer: "Geralmente trabalho com 50% de entrada para início do projeto e 50% na aprovação final, antes da publicação. Aceito PIX, transferência e cartão de crédito (com parcelamento)."
    },
    {
        question: "O site aparece no Google?",
        answer: "Sim, desenvolvo o site seguindo as melhores práticas de SEO (Otimização para Mecanismos de Busca) para facilitar que seu cliente te encontre no Google."
    }
];

export function FAQ() {
    return (
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
            <div className="container-responsive relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                        Dúvidas Comuns
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Perguntas <span className="text-gradient">Frequentes</span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Tire suas dúvidas sobre o processo de criação de sites profissionais.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <AccordionItem value={`item-${index}`} className="border border-white/10 bg-white/5 rounded-2xl px-6 data-[state=open]:bg-white/10 data-[state=open]:border-primary/20 transition-all duration-300">
                                    <AccordionTrigger className="text-left text-white hover:text-primary hover:no-underline py-6 text-lg font-medium">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-zinc-400 text-base leading-relaxed pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
