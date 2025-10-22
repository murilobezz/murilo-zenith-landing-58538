import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import logoMB from "@/assets/logo-mb.png";
import doctorProfile from "@/assets/doctor-profile.jpg";

export const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and About */}
          <div className="space-y-4">
            <img src={logoMB} alt="Dr. Murilo Bezerra Logo" className="h-16" />
            <p className="text-primary-foreground/80 text-sm">
              Médico com foco em Nutrologia • Performance • Saúde e Bem-estar
            </p>
            <p className="text-primary-foreground/60 text-sm">CRM 520128795-8</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              {/* Telefone clicável */}
              <a
                href="tel:+5521972366819"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(21) 97236-6819</span>
              </a>

              {/* E-mail clicável */}
              <a
                href="mailto:muriloo.bzr@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>muriloo.bzr@gmail.com</span>
              </a>

              {/* Instagram clicável */}
              <a
                href="https://instagram.com/murilobezz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@murilobezz</span>
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Locais de Atendimento</h3>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Nilópolis - RJ</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Nova Iguaçu - RJ</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Botafogo - Rio de Janeiro</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Barra da Tijuca - Rio de Janeiro</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Atendimento Online</span>
              </div>
            </div>
          </div>

          {/* Doctor Photo */}
          <div className="flex items-center justify-center">
            <img 
              src={doctorProfile} 
              alt="Dr. Murilo Bezerra" 
              className="w-48 h-48 object-cover rounded-lg shadow-elegant"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-gold/80 text-sm">
            © 2025 Dr. Murilo Bezerra - Médico com foco em Nutrologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
