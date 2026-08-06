import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const offices = [
  {
    name: "Oficinas Wifinity Agua Dulce",
    address: "Col. Benito Juárez, calle Emiliano Zapata #10",
    cp: "CP 96680",
    phone: "923-111-7996",
    phoneFull: "529231117996",
    phoneTel: "9231117996",
    mapUrl: "https://maps.google.com/?q=Agua+Dulce+Veracruz+Col+Benito+Juarez+Emiliano+Zapata+10",
    color: "primary",
  },
  {
    name: "Módulo Tonalá",
    address: "Calle Benito Juárez, a un costado del parque Tonalá",
    cp: "CP 96390",
    phone: "923-120-8437",
    phoneFull: "529231208437",
    phoneTel: "9231208437",
    mapUrl: "https://maps.google.com/?q=Espacio+Alimentario+Tonala+Agua+Dulce+Veracruz",
    color: "secondary",
  },
];

export default function Locations() {
  return (
    <section id="ubicacion" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 text-primary">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Dónde encontrarnos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Visítanos o contáctanos
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Contamos con dos puntos de atención para servirte mejor. Puedes visitarnos, llamarnos o escribirnos por WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offices.map((office, i) => (
            <motion.div
              key={office.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-white/10 rounded-3xl p-8 flex flex-col gap-6 hover:border-primary/30 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-snug">{office.name}</h3>
                  <p className="text-white/50 text-sm mt-1">{office.address}</p>
                  <p className="text-white/30 text-xs mt-0.5">{office.cp}</p>
                </div>
              </div>

              {/* Contact options */}
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${office.phoneTel}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  data-testid={`link-tel-${i}`}
                >
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-white/40 leading-none mb-0.5">Llamada</p>
                    <p className="text-white font-semibold text-sm group-hover:text-primary transition-colors">{office.phone}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${office.phoneFull}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  data-testid={`link-wa-${i}`}
                >
                  <MessageCircle className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-white/40 leading-none mb-0.5">WhatsApp</p>
                    <p className="text-white font-semibold text-sm group-hover:text-primary transition-colors">{office.phone}</p>
                  </div>
                </a>
              </div>

              {/* Map button */}
              <Button
                variant="outline"
                className="w-full rounded-xl bg-white/5 border-white/10 hover:bg-white/10 text-white gap-2"
                onClick={() => window.open(office.mapUrl, "_blank")}
                data-testid={`button-map-${i}`}
              >
                <MapPin className="w-4 h-4" />
                Ver en mapa
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Schedule note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-10 max-w-4xl mx-auto flex items-center justify-center gap-3 text-white/40 text-sm"
        >
          <Clock className="w-4 h-4 shrink-0" />
          <p>Para reportes de falla o soporte técnico usa la sección de <button onClick={() => document.querySelector("#reportes")?.scrollIntoView({ behavior: "smooth" })} className="text-primary hover:underline cursor-pointer">Soporte</button> más abajo.</p>
        </motion.div>
      </div>
    </section>
  );
}
