import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5519997117300?text=Olá! Quero conversar sobre como posso atrair mais clientes online.";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-md opacity-50 animate-pulse group-hover:opacity-80 transition-opacity" />
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-strong group-hover:scale-110 transition-transform duration-200">
          <MessageCircle className="w-7 h-7" />
        </div>
      </div>
    </motion.a>
  );
}
