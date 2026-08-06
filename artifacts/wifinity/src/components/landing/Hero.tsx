import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Wifi, Shield, Clock } from "lucide-react";

const stats = [
  { icon: Zap, label: "Hasta 300 Megas", desc: "Velocidad real garantizada" },
  { icon: Shield, label: "99.9% uptime", desc: "Red estable y confiable" },
  { icon: Clock, label: "Soporte rapido", desc: "Equipo local disponible" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm text-primary"
          >
            <Zap className="w-4 h-4 fill-primary" />
            <span className="text-sm font-medium">La red mas rapida de tu zona</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white"
          >
            Conecta tu mundo{" "}
            <br />
            <span className="text-gradient">sin limites.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed"
          >
            Internet de fibra optica de alta velocidad para tu hogar o negocio.
            Sin caidas, sin contratos engañosos. Solo velocidad pura y un equipo
            local que si te responde.
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

          {/* Stats row */}
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
      </div>
    </section>
  );
}
