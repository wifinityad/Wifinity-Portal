import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como contrato el servicio de Wifinity?",
    a: "Es muy sencillo. Completa el formulario en la seccion Contratar de esta pagina con tu nombre, telefono y direccion. Automaticamente se abrira WhatsApp con tu informacion lista para enviarsela a uno de nuestros promotores, quien te contactara en minutos.",
  },
  {
    q: "Cuanto tiempo tarda la instalacion?",
    a: "Una vez aprobada tu solicitud, nuestro equipo tecnico se pone en contacto contigo para coordinar la visita. En la mayoria de los casos la instalacion se realiza dentro de las 24 a 48 horas habiles.",
  },
  {
    q: "Tienen cobertura en mi zona?",
    a: "Contamos con cobertura en varias zonas. Puedes consultarlo directamente con nuestros promotores al momento de contratar; ellos verifican la disponibilidad en tu direccion exacta de forma rapida.",
  },
  {
    q: "Que pasa si mi internet falla?",
    a: "Usua el formulario de Falla Tecnica en la seccion Reportes de esta pagina. Tu reporte llega directamente por WhatsApp al equipo tecnico a cargo, quien se comunicara contigo para diagnosticar y resolver la falla lo antes posible.",
  },
  {
    q: "Puedo cambiar de plan?",
    a: "Si, puedes cambiar a un plan mayor en cualquier momento. Contacta a nuestros promotores por la seccion Contratar o directamente por WhatsApp y ellos gestionaran el cambio sin interrumpir tu servicio.",
  },
  {
    q: "Tienen soporte tecnico disponible?",
    a: "Nuestro equipo de soporte esta disponible para atender reportes de lunes a sabado. Para emergencias criticas de servicio tambien contamos con atencion fuera de horario. Usa el formulario de reporte en esta pagina para contactarnos.",
  },
  {
    q: "Como pago mi factura?",
    a: "Los metodos de pago disponibles se informan al momento de contratar el servicio. Generalmente manejamos transferencias bancarias y pago movil. Tu promotor te indicara todas las opciones disponibles en tu zona.",
  },
  {
    q: "Que equipos incluye la instalacion?",
    a: "La instalacion incluye el router WiFi de alta potencia necesario para tu plan. Los planes Premium y Ultra incluyen equipos de mayor alcance. Si necesitas cobertura adicional en tu hogar, nuestros tecnicos te asesoraran sobre la mejor solucion.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 text-primary">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Preguntas frecuentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Todo lo que necesitas saber
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Resolvemos las dudas mas comunes sobre nuestro servicio. Si no encuentras tu pregunta, escribe a nuestros promotores.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-card border border-white/10 rounded-2xl px-6 overflow-hidden data-[state=open]:border-primary/30"
                  data-testid={`faq-item-${i}`}
                >
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-primary hover:no-underline py-5 text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
          >
            <p className="text-white/70 mb-4 text-lg">
              No encontraste tu respuesta? Nuestro equipo esta listo para ayudarte.
            </p>
            <button
              onClick={() => document.querySelector("#contratar")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity"
              data-testid="button-faq-contactar"
            >
              <HelpCircle className="w-4 h-4" />
              Contactar a un promotor
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
