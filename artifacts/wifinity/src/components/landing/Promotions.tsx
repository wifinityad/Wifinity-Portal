import { motion } from "framer-motion";
import { Tag, Clock, Wifi, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const promos = [
  {
    icon: Tag,
    badge: "Oferta limitada",
    title: "Primer mes 50% OFF",
    description:
      "Contrata cualquier plan este mes y paga la mitad en tu primera factura. Sin compromisos, sin letras pequeñas.",
    cta: "Aprovechar ahora",
    gradient: "from-cyan-500/20 to-blue-600/10",
    border: "border-cyan-500/30",
    glow: "shadow-[0_0_40px_-15px_rgba(0,255,255,0.4)]",
  },
  {
    icon: Clock,
    badge: "Tiempo limitado",
    title: "Instalacion gratuita",
    description:
      "Instalamos tu conexion de fibra optica sin costo adicional. Tecnico certificado en tu hogar en menos de 48 horas.",
    cta: "Solicitar instalacion",
    gradient: "from-blue-600/20 to-indigo-600/10",
    border: "border-blue-500/30",
    glow: "shadow-[0_0_40px_-15px_rgba(99,102,241,0.4)]",
  },
  {
    icon: Users,
    badge: "Plan familiar",
    title: "Combo Familia: 2 equipos",
    description:
      "Conecta toda tu casa. Obtiene 2 routers de alta potencia incluidos en tu plan Premium o Ultra sin costo extra.",
    cta: "Ver planes",
    gradient: "from-violet-500/20 to-purple-600/10",
    border: "border-violet-500/30",
    glow: "shadow-[0_0_40px_-15px_rgba(139,92,246,0.4)]",
    onClick: "#paquetes",
  },
];

export default function Promotions() {
  const handleClick = (promo: (typeof promos)[0]) => {
    const target = promo.onClick || "#contratar";
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="promociones" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 text-primary"
          >
            <Wifi className="w-4 h-4" />
            <span className="text-sm font-medium">Ofertas exclusivas</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
          >
            Promociones activas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg text-white/60"
          >
            Aprovecha nuestras ofertas por tiempo limitado y conéctate hoy mismo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((promo, i) => {
            const Icon = promo.icon;
            return (
              <motion.div
                key={promo.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative flex flex-col rounded-3xl p-8 bg-gradient-to-br ${promo.gradient} border ${promo.border} ${promo.glow} overflow-hidden cursor-default`}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20 pointer-events-none" />

                <span className="self-start inline-block text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white/70 mb-6">
                  {promo.badge}
                </span>

                <div className="mb-4 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{promo.title}</h3>
                <p className="text-white/60 leading-relaxed flex-1 mb-8">{promo.description}</p>

                <Button
                  className="w-full rounded-xl font-bold"
                  onClick={() => handleClick(promo)}
                  data-testid={`button-promo-${i}`}
                >
                  {promo.cta}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
