import { MessageCircle, Mail, MapPin } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para criação de site.";

export function Footer() {
  return (
    <footer id="contato" className="bg-background border-t border-white/10 text-zinc-300">
      <div className="container-responsive py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold mb-4 block text-white flex items-center gap-2">
              Site<span className="text-primary">Lucrativo</span>
            </a>
            <p className="text-zinc-400 mb-6 text-sm md:text-base">
              Criação de sites profissionais focados em resultados.
              Transforme sua presença online e conquiste mais clientes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-3">
              <a href="#servicos" className="text-zinc-400 hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#portfolio" className="text-zinc-400 hover:text-primary transition-colors">
                Portfólio
              </a>
              <a href="#como-funciona" className="text-zinc-400 hover:text-primary transition-colors">
                Como Funciona
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Contato</h4>
            <div className="flex flex-col gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
                (11) 99999-9999
              </a>
              <a
                href="mailto:contato@sitelucrativo.com.br"
                className="flex items-center gap-3 text-zinc-400 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                contato@sitelucrativo.com.br
              </a>
              <div className="flex items-center gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 text-primary" />
                São Paulo, SP - Brasil
              </div>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              Atendo todo o Brasil. O primeiro contato é sempre gratuito!
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} SiteLucrativo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
