import React from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Básico",
    speed: "150 Megas",
    price: "$350",
    features: [
      "Navegación web y redes sociales",
      "Streaming en HD",
      "Videollamadas fluidas",
      "Soporte local",
    ],
  },
  {
    name: "Plus",
    speed: "200 Megas",
    price: "$450",
    features: [
      "Trabajo desde casa",
      "Streaming en 4K",
      "Juegos en línea",
      "Múltiples dispositivos",
      "Soporte local",
    ],
    popular: true,
  },
  {
    name: "Premium",
    speed: "300 Megas",
    price: "$650",
    features: [
      "Descargas ultrarrápidas",
      "Streaming múltiple en 4K",
      "Juegos sin lag",
      "Hogar completo conectado",
      "Soporte prioritario",
    ],
  },
];

export default function Packages() {
  return (
    <section id="paquetes" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Elige tu velocidad ideal
          </h2>
          <p className="text-lg text-white/60">
            Planes diseñados para cada tipo de familia. Paga solo por lo que necesitas, con la mejor estabilidad de la región.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/20 to-card border border-primary shadow-[0_0_40px_-15px_rgba(0,255,255,0.3)]"
                  : "bg-card border border-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Zap className="w-4 h-4 fill-primary-foreground" />
                  Más popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-medium text-white/80 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black text-white">{plan.speed}</span>
                </div>
                <div className="flex items-baseline gap-1 text-primary">
                  <span className="text-2xl font-bold">{plan.price}</span>
                  <span className="text-sm font-medium">/ mes</span>
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/70">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-xl h-12 font-bold text-lg ${
                  plan.popular ? "" : "bg-white/10 hover:bg-white/20 text-white border-none"
                }`}
                variant={plan.popular ? "default" : "outline"}
                onClick={() => {
                  const select = document.querySelector('select[name="paquete"]') as HTMLSelectElement;
                  if (select) {
                    select.value = plan.name;
                    select.dispatchEvent(new Event('change', { bubbles: true }));
                  }
                  document.querySelector("#contratar")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contratar {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
