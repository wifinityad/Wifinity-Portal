import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search, CheckCircle2, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const zones = [
  { name: "18 DE MARZO", status: "active" },
  { name: "ALBORADA", status: "active" },
  { name: "ALLENDE", status: "active" },
  { name: "AGRARIA", status: "active" },
  { name: "BELLA VISTA", status: "active" },
  { name: "BENITO JUÁREZ", status: "active" },
  { name: "CARLOS A. MADRAZO", status: "active" },
  { name: "CENTRO", status: "active" },
  { name: "CINCO PRESIDENTES", status: "active" },
  { name: "CUATRO CAMINOS", status: "active" },
  { name: "DÍAZ ORDAZ", status: "active" },
  { name: "EL BOSQUE", status: "active" },
  { name: "EL MIRADOR", status: "active" },
  { name: "EL MUELLE", status: "active" },
  { name: "EL NARANJAL", status: "active" },
  { name: "EL PALMAR", status: "active" },
  { name: "EL SUSPIRO", status: "active" },
  { name: "EL TORTUGUERO", status: "active" },
  { name: "EMILIANO ZAPATA", status: "active" },
  { name: "KM 2", status: "active" },
  { name: "LAS PALMITAS", status: "active" },
  { name: "LAS PIEDRAS", status: "active" },
  { name: "LÁZARO CÁRDENAS", status: "active" },
  { name: "MAGISTERIAL", status: "active" },
  { name: "MIGUEL HIDALGO", status: "active" },
  { name: "MIL CINCO", status: "active" },
  { name: "NIÑOS HÉROES", status: "active" },
  { name: "NUEVA DEL RÍO", status: "active" },
  { name: "OBRERA", status: "active" },
  { name: "PEMEX", status: "active" },
  { name: "PINGÜINOS", status: "active" },
  { name: "PUNTA GORDA", status: "active" },
  { name: "RIVERA DEL RÍO", status: "active" },
  { name: "SOLIDARIDAD", status: "active" },
  { name: "TONALÁ", status: "active" },
  { name: "CUAUHTEMOCZIN (TABASCO)", status: "active" },
];

const WHATSAPP_COBERTURA = "529231117996";

export default function Coverage() {
  const [search, setSearch] = useState("");

  const filtered = zones.filter((z) =>
    z.name.toLowerCase().includes(search.toLowerCase())
  );

  const active = filtered.filter((z) => z.status === "active");
  const noResults = filtered.length === 0 && search.length > 0;

  return (
    <section id="cobertura" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 text-primary">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Zonas con servicio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Cobertura disponible
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Busca tu colonia o sector para saber si tenemos servicio en tu área. Si no aparece, consúltanos por WhatsApp.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-md mx-auto mb-10 relative"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 pointer-events-none" />
          <Input
            placeholder="Busca tu colonia o sector..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-12 h-14 rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary text-base"
            data-testid="input-buscar-zona"
          />
        </motion.div>

        {noResults ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center bg-card border border-white/10 rounded-3xl p-10"
          >
            <MapPin className="w-10 h-10 text-white/20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              No encontramos "{search}"
            </h3>
            <p className="text-white/50 mb-6">
              Es posible que estemos expandiendo hacia tu zona. Consúltanos directamente y lo verificamos.
            </p>
            <Button
              className="gap-2 rounded-xl font-bold"
              onClick={() => {
                const text = encodeURIComponent(`Hola Wifinity! Quiero saber si tienen cobertura en: ${search}`);
                window.open(`https://wa.me/${WHATSAPP_COBERTURA}?text=${text}`, "_blank");
              }}
              data-testid="button-consultar-zona"
            >
              <MessageCircle className="w-4 h-4" />
              Consultar cobertura en {search}
            </Button>
          </motion.div>
        ) : (
          <div className="max-w-5xl mx-auto">
            {active.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest">
                    Servicio activo ({active.length} zonas)
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {active.map((zone, i) => (
                    <motion.div
                      key={zone.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.02 }}
                      whileHover={{ scale: 1.04 }}
                      className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 cursor-default"
                      data-testid={`zone-active-${i}`}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0 animate-pulse" />
                      <span className="text-sm font-medium text-white truncate">{zone.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm mb-4">
            ¿No ves tu zona? Estamos expandiendo constantemente.
          </p>
          <Button
            variant="outline"
            className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 text-white gap-2"
            onClick={() => {
              const text = encodeURIComponent("Hola Wifinity! Quiero saber si tienen cobertura en mi zona.");
              window.open(`https://wa.me/${WHATSAPP_COBERTURA}?text=${text}`, "_blank");
            }}
            data-testid="button-consultar-cobertura"
          >
            <MessageCircle className="w-4 h-4" />
            Consultar cobertura por WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
