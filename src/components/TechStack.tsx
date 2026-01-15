import { motion } from "framer-motion";
import { Code2, Database, Globe, Layout, Smartphone, Zap } from "lucide-react";

const technologies = [
    { name: "Design Moderno", icon: Layout },
    { name: "Responsividade", icon: Smartphone },
    { name: "Alta Performance", icon: Zap },
    { name: "SEO Otimizado", icon: Globe },
    { name: "Código Limpo", icon: Code2 },
    { name: "Hospedagem", icon: Database },
];

export function TechStack() {
    return (
        <section className="py-12 bg-background border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 blur-3xl" />

            <div className="container-responsive relative z-10">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center gap-2 group cursor-default"
                        >
                            <tech.icon className="w-5 h-5 text-zinc-600 group-hover:text-primary transition-colors duration-300" />
                            <span className="text-zinc-500 font-medium text-sm md:text-base group-hover:text-zinc-300 transition-colors duration-300">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
