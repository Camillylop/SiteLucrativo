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
                        Dúvidas Comuns
                    </span>
                    <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-4 tracking-tight">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
                        Tire suas dúvidas sobre o processo de criação de sites.
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
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="border border-border bg-background rounded-2xl px-6 data-[state=open]:bg-muted/30 data-[state=open]:border-primary/30 transition-all duration-300 shadow-soft hover:shadow-medium"
                                >
                                    <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6 text-lg font-semibold">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
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
