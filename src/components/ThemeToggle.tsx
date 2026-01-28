import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { motion } from "framer-motion"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative rounded-full w-10 h-10 transition-all hover:bg-muted"
            title="Alternar tema"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 0 : 1,
                    rotate: theme === "dark" ? 90 : 0
                }}
                transition={{ duration: 0.2 }}
                className="absolute"
            >
                <Sun className="h-5 w-5 text-foreground" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 1 : 0,
                    rotate: theme === "dark" ? 0 : -90
                }}
                transition={{ duration: 0.2 }}
                className="absolute"
            >
                <Moon className="h-5 w-5 text-foreground" />
            </motion.div>
            <span className="sr-only">Alternar tema</span>
        </Button>
    )
}
