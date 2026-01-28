import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, TrendingUp, TriangleAlert, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

type Question = {
    id: number;
    text: string;
    options: {
        label: string;
        value: number;
    }[];
};

const questions: Question[] = [
    {
        id: 1,
        text: "Como os clientes encontram sua empresa hoje?",
        options: [
            { label: "Principalmente indicação (boca a boca)", value: 1 },
            { label: "Instagram/Redes Sociais", value: 2 },
            { label: "Google e Pesquisa Orgânica", value: 3 },
            { label: "Anúncios Pagos e Funil Automático", value: 4 },
        ],
    },
    {
        id: 2,
        text: "Se você parar de postar ou prospectar por 1 mês, o que acontece?",
        options: [
            { label: "As vendas param quase totalmente", value: 1 },
            { label: "Cai bastante, mas entra algo", value: 2 },
            { label: "Tenho leads chegando, mas fecho menos", value: 3 },
            { label: "As vendas continuam no automático", value: 4 },
        ],
    },
    {
        id: 3,
        text: "Qual sua maior dificuldade no digital?",
        options: [
            { label: "Não sei por onde começar", value: 1 },
            { label: "Tenho site mas não vende nada", value: 2 },
            { label: "Atraio muitos curiosos e poucos clientes", value: 3 },
            { label: "Preciso escalar e falta braço/processo", value: 4 },
        ],
    },
    {
        id: 4,
        text: "Como é seu processo de vendas atual?",
        options: [
            { label: "Totalmente manual via WhatsApp", value: 1 },
            { label: "Uso CRM mas é bagunçado", value: 2 },
            { label: "Tenho scripts e processos definidos", value: 3 },
            { label: "CRM integrado com marketing e automações", value: 4 },
        ],
    },
];

export function DigitalMaturityQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (value: number) => {
        const newScore = score + value;
        if (currentQuestion < questions.length - 1) {
            setScore(newScore);
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setScore(newScore);
            setShowResult(true);
        }
    };

    const getResult = () => {
        // Max score = 16 (4 * 4)
        // Low: 4-7 | Med: 8-11 | High: 12-16
        if (score <= 8) {
            return {
                level: "Invisível Digitalmente",
                icon: TriangleAlert,
                color: "text-red-500",
                title: "Sua empresa corre risco.",
                description: "Você depende demais do acaso e de indicações. Sem processos digitais, seu concorrente vai engolir sua fatia de mercado em breve.",
                action: "Precisamos criar sua fundação digital urgente."
            };
        } else if (score <= 12) {
            return {
                level: "Em Crescimento, mas Travado",
                icon: TrendingUp,
                color: "text-amber-500",
                title: "Você deixa dinheiro na mesa.",
                description: "Você já tem presença, mas ela não trabalha por você. Seu esforço é desproporcional ao resultado porque faltam automação e estratégia.",
                action: "Vamos transformar seu esforço em máquina de vendas."
            };
        } else {
            return {
                level: "Pronto para Escalar",
                icon: ShieldCheck,
                color: "text-green-500",
                title: "Você está no caminho certo.",
                description: "Sua base é boa, mas para dobrar o faturamento sem dobrar a equipe, você precisa de soluções high-end e otimização de conversão.",
                action: "Vamos otimizar sua conversão para o próximo nível."
            };
        }
    };

    const resultData = getResult();

    return (
        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="container-responsive max-w-4xl mx-auto px-4">

                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
                        Diagnóstico Gratuito
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Qual seu Nível de Maturidade Digital?
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Descubra em 1 minuto o que está travando o crescimento da sua empresa.
                    </p>
                </div>

                <div className="bg-card border border-border rounded-3xl shadow-2xl p-6 md:p-10 min-h-[400px] flex items-center justify-center relative overflow-hidden">
                    {/* Background blobs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

                    <AnimatePresence mode="wait">
                        {!showResult ? (
                            <motion.div
                                key={currentQuestion}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="w-full max-w-2xl"
                            >
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-sm font-medium text-muted-foreground">
                                        Pergunta {currentQuestion + 1} de {questions.length}
                                    </span>
                                    <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary transition-all duration-500"
                                            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                        />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-foreground mb-8 leading-relaxed">
                                    {questions[currentQuestion].text}
                                </h3>

                                <div className="grid gap-4">
                                    {questions[currentQuestion].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswer(option.value)}
                                            className="w-full text-left p-5 rounded-xl border border-border bg-background/50 hover:bg-muted/50 hover:border-primary/50 transition-all duration-200 group flex items-center justify-between"
                                        >
                                            <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                                                {option.label}
                                            </span>
                                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center max-w-2xl"
                            >
                                <div className={`w-20 h-20 mx-auto rounded-full bg-muted flex items-center justify-center mb-6 ring-4 ring-offset-4 ring-offset-card ${resultData.color.replace('text-', 'ring-').replace('500', '200')}`}>
                                    <resultData.icon className={`w-10 h-10 ${resultData.color}`} />
                                </div>

                                <h3 className="text-xl font-bold text-muted-foreground mb-2">Seu Diagnóstico:</h3>
                                <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${resultData.color}`}>
                                    {resultData.level}
                                </h2>

                                <div className="bg-muted/30 rounded-2xl p-6 mb-8 border border-border">
                                    <h4 className="font-bold text-lg text-foreground mb-2">{resultData.title}</h4>
                                    <p className="text-muted-foreground mb-4">{resultData.description}</p>
                                    <p className="font-semibold text-primary">{resultData.action}</p>
                                </div>

                                <Button size="lg" className="w-full md:w-auto text-lg px-8 py-6 shadow-xl shadow-primary/20 animate-pulse" asChild>
                                    <a href={`https://wa.me/5519997117300?text=Olá! Fiz o teste no site e meu resultado foi: ${resultData.level}. Quero saber como resolver.`} target="_blank" rel="noopener noreferrer">
                                        Agendar Sessão Estratégica Gratuita
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
