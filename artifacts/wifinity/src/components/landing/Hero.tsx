import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Shield, Clock } from "lucide-react";
import logoSrc from "@assets/wifinity_logo_trans_1779826721675.avif";

const stats = [
  { icon: Zap, label: "Hasta 300 Megas", desc: "Velocidad real garantizada" },
  { icon: Shield, label: "99.9% uptime", desc: "Red estable y confiable" },
  { icon: Clock, label: "Soporte rapido", desc: "Equipo local disponible" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Texto izquierda */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm text-primary"
            >
              <Zap className="w-4 h-4 fill-primary" />
              <span className="text-sm font-medium">La red más rápida de tu zona.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white"
            >
              Conecta tu mundo{" "}
              <br />
              <span className="text-gradient">Sin límites.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed"
            >
              Internet de fibra óptica de alta velocidad para tu hogar o negocio.
              Sin caídas, sin contratos engañosos. Solo velocidad pura y un equipo
              local que sí te responde.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Button
                size="lg"
                className="rounded-full h-14 px-8 text-lg font-bold group"
                onClick={() => document.querySelector("#contratar")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-hero-contratar"
              >
                Contratar ahora
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-8 text-lg font-bold bg-white/5 border-white/10 hover:bg-white/10 hover:text-white"
                onClick={() => document.querySelector("#paquetes")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-hero-paquetes"
              >
                Ver paquetes
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{stat.label}</p>
                      <p className="text-white/50 text-xs">{stat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Logo derecha */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center shrink-0"
          >
            <img
              src={logoSrc}
              alt="Wifinity"
              className="w-56 md:w-80 xl:w-96 drop-shadow-[0_0_60px_rgba(0,200,255,0.25)]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
