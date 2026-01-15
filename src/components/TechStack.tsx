import { motion } from "framer-motion";
import { Code2, Database, Globe, Layout, Smartphone, Zap } from "lucide-react";

const technologies = [
    { name: "Design Moderno", icon: Layout },
    { name: "Responsivo", icon: Smartphone },
    { name: "Performance", icon: Zap },
    { name: "SEO Otimizado", icon: Globe },
    { name: "Código Limpo", icon: Code2 },
    { name: "Hospedagem", icon: Database },
];

export function TechStack() {
    // Duplicar os itens para criar o efeito de loop infinito
    const duplicatedTechs = [...technologies, ...technologies, ...technologies];

    return (
        <section className="py-12 border-y border-border bg-muted/30 overflow-hidden">
            <div className="relative">
                {/* Carrossel infinito - funciona em todas as telas */}
                <motion.div
                    className="flex gap-12 py-2"
                    animate={{
                        x: [0, -1200],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedTechs.map((tech, index) => (
                        <div
                            key={`${tech.name}-${index}`}
                            className="flex items-center gap-2.5 whitespace-nowrap flex-shrink-0"
                        >
                            <tech.icon className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium text-muted-foreground">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Gradientes nas bordas para efeito de fade */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 via-muted/30 to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 via-muted/30 to-transparent pointer-events-none z-10" />
            </div>
        </section>
    );
}
