import { MessageCircle, Phone } from "lucide-react";
import logoSrc from "@assets/wifinity_logo_trans_1779826721675.avif";

const sections = [
  {
    title: "Servicio",
    links: [
      { name: "Paquetes", href: "#paquetes" },
      { name: "Promociones", href: "#promociones" },
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
              Conexion de fibra optica para tu hogar o negocio. Velocidad real, soporte local, sin sorpresas.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/584120000001`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                data-testid="link-whatsapp-promotores"
              >
                <MessageCircle className="w-4 h-4" />
                Promotores: +58 412 000 0001
              </a>
              <a
                href={`https://wa.me/584120000002`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium"
                data-testid="link-whatsapp-soporte"
              >
                <Phone className="w-4 h-4" />
                Soporte: +58 412 000 0002
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
          <p className="text-white/20 text-xs">
            Proveedor de internet local — Conectando tu comunidad
          </p>
        </div>
      </div>
    </footer>
  );
}
