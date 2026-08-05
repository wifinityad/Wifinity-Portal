import { MessageCircle, Phone, MapPin } from "lucide-react";
import logoSrc from "@assets/wifinity_logo_trans_1779826721675.avif";

const sections = [
  {
    title: "Servicio",
    links: [
      { name: "Paquetes", href: "#paquetes" },
      { name: "Cobertura", href: "#cobertura" },
      { name: "Contratar", href: "#contratar" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { name: "Reportar falla", href: "#reportes" },
      { name: "Quejas", href: "#quejas" },
      { name: "Preguntas frecuentes", href: "#faq" },
    ],
  },
];

const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-flex mb-4">
              <img
                src={logoSrc}
                alt="Wifinity"
                className="h-16 w-auto drop-shadow-lg"
                data-testid="img-logo-footer"
              />
            </a>
            <p className="text-white/50 leading-relaxed max-w-sm mb-6">
              Conexión de internet para tu hogar o negocio. Velocidad real, soporte local, sin sorpresas.
            </p>

            {/* Offices */}
            <div className="space-y-5 mb-6">
              <div>
                <p className="text-white/80 font-semibold text-sm mb-1">📍 Oficinas Wifinity Agua Dulce</p>
                <p className="text-white/50 text-sm leading-relaxed">Col. Benito Juárez, calle Emiliano Zapata #10, CP 96680</p>
                <a
                  href="tel:9231117996"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm mt-1"
                  data-testid="link-tel-aguadulce"
                >
                  <Phone className="w-3.5 h-3.5" />
                  923-111-7996
                </a>
              </div>
              <div>
                <p className="text-white/80 font-semibold text-sm mb-1">📍 Módulo Tonalá</p>
                <p className="text-white/50 text-sm leading-relaxed">Calle Benito Juárez, CP 96390, a un costado del parque Tonalá</p>
                <a
                  href="tel:9231208437"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm mt-1"
                  data-testid="link-tel-tonala"
                >
                  <Phone className="w-3.5 h-3.5" />
                  923-120-8437
                </a>
              </div>
            </div>

            {/* WhatsApp contacts */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/529231117996"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                data-testid="link-whatsapp-promotores"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Agua Dulce: 923-111-7996
              </a>
              <a
                href="https://wa.me/529231208437"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium"
                data-testid="link-whatsapp-soporte"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Tonalá: 923-120-8437
              </a>
            </div>
          </div>

          {/* Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className="text-white/60 hover:text-primary transition-colors"
                      data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Wifinity. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            Agua Dulce & Tonalá, Veracruz — Conectando tu comunidad
          </p>
        </div>
      </div>
    </footer>
  );
}
