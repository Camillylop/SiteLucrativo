import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "Quanto custa para fazer um site?",
        answer: "Cada projeto é único, assim como seu negócio. O investimento depende dos seus objetivos e do que você precisa para alcançá-los. Vamos conversar sem compromisso para entender seu desafio e criar uma proposta personalizada que faça sentido para você."
    },
    {
        question: "Quanto tempo leva para ficar pronto?",
        answer: "Trabalhamos com agilidade sem comprometer a qualidade. Sites mais simples ficam prontos em 5 a 10 dias úteis, enquanto projetos mais robustos levam de 15 a 30 dias. O importante é que você tenha um site que realmente funciona, não apenas algo rápido."
    },
    {
        question: "O site vai funcionar no celular?",
        answer: "Sim! Todos os sites que desenvolvo são 100% responsivos, ou seja, se adaptam perfeitamente a computadores, tablets e smartphones."
    },

    {
        question: "Como funciona o pagamento?",
        answer: "Trabalhamos com 50% no início do projeto e 50% na aprovação final, antes de publicar. Aceitamos PIX, transferência e cartão de crédito com parcelamento. Queremos que você se sinta confortável e seguro durante todo o processo."
    },
    {
        question: "O site aparece no Google?",
        answer: "Sim! Otimizamos seu site para que você seja encontrado por quem procura seus serviços. Afinal, de que adianta ter um site bonito se seus clientes não conseguem te achar? Trabalhamos para que você apareça nas buscas certas."
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
                        Respondemos suas principais dúvidas com total transparência.
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
