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
    q: "¿Cómo contrato el servicio de Wifinity?",
    a: `Contratar Wifinity es muy sencillo. Puedes comunicarte con nosotros por WhatsApp, llamada telefónica o a través de nuestras redes sociales. Nuestro equipo verificará la cobertura en tu domicilio y te ayudará a elegir el plan que mejor se adapte a tus necesidades.\n\nAtención Agua Dulce: 923-111-7996\nAtención Tonalá: 923-120-8437`,
  },
  {
    q: "¿Cuánto tiempo tarda la instalación?",
    a: "Una vez confirmado el servicio y la disponibilidad en tu zona, la instalación generalmente se realiza en un plazo de 2 a 3 días hábiles, dependiendo de la agenda técnica y las condiciones del lugar.",
  },
  {
    q: "¿Hay cobertura en mi zona?",
    a: "Wifinity continúa expandiendo su cobertura. Contáctanos con tu dirección o ubicación y con gusto verificaremos si contamos con servicio en tu área.",
  },
  {
    q: "¿Qué pasa si mi servicio de internet presenta una falla?",
    a: "Si experimentas alguna interrupción en el servicio, puedes comunicarte con nuestro equipo de soporte técnico a través del formulario de Reportes en esta página o llamarnos directamente. Revisaremos tu caso y trabajaremos para restablecer tu conexión lo antes posible.",
  },
  {
    q: "¿Necesito estar presente durante la instalación?",
    a: "Sí, es necesario que un adulto esté presente para permitir el acceso al domicilio y confirmar que la instalación quedó funcionando correctamente.",
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
            Resolvemos las dudas más comunes sobre nuestro servicio. Si no encuentras tu pregunta, escríbenos directamente.
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
                  <AccordionContent className="text-white/60 leading-relaxed pb-5 whitespace-pre-line">
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
              ¿No encontraste tu respuesta? Nuestro equipo está listo para ayudarte.
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
