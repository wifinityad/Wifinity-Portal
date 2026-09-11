import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre completo"),
  telefono: z.string().min(7, "Ingresa un teléfono válido"),
  direccion: z.string().min(5, "Ingresa tu dirección"),
  referencia: z.string().min(3, "Ingresa una referencia del lugar"),
  paquete: z.string().min(1, "Selecciona un paquete"),
});

type FormData = z.infer<typeof schema>;

const WHATSAPP_NUMBER = "529231117996";

export default function ContractForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nombre: "",
      telefono: "",
      direccion: "",
      referencia: "",
      paquete: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const text = encodeURIComponent(
      `Hola Wifinity! Me interesa contratar el servicio.\n\n` +
      `Nombre completo: ${data.nombre}\n` +
      `Teléfono de contacto: ${data.telefono}\n` +
      `Dirección: ${data.direccion}\n` +
      `Referencia del lugar: ${data.referencia}\n` +
      `Paquete de interés: ${data.paquete}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    form.reset();
  };

  return (
    <section id="contratar" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 text-primary">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Vía WhatsApp</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Contratar servicio
            </h2>
            <p className="text-lg text-white/60">
              Completa el formulario y un promotor te contactará vía WhatsApp.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-white/10 rounded-3xl p-8 shadow-xl"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">Solicitud enviada</h3>
                <p className="text-white/60">Se abrió WhatsApp con tu información. Un promotor te responderá pronto.</p>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Nombre completo</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Juan Pérez"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary"
                            data-testid="input-nombre-contrato"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="direccion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Dirección</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Calle, número, colonia"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary"
                            data-testid="input-direccion-contrato"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="referencia"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Referencia del lugar</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ej: frente al parque, a un lado de la tienda..."
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary"
                            data-testid="input-referencia-contrato"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Número de teléfono de contacto</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="923-XXX-XXXX"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary"
                            data-testid="input-telefono-contrato"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="paquete"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Paquete de interés</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger
                              className="bg-white/5 border-white/10 text-white focus:border-primary"
                              data-testid="select-paquete-contrato"
                            >
                              <SelectValue placeholder="Selecciona un paquete" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-white/10">
                            <SelectItem value="Básico — 150 Megas ($350/mes)">Básico — 150 Megas ($350/mes)</SelectItem>
                            <SelectItem value="Plus — 200 Megas ($450/mes)">Plus — 200 Megas ($450/mes)</SelectItem>
                            <SelectItem value="Premium — 300 Megas ($650/mes)">Premium — 300 Megas ($650/mes)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 rounded-xl text-lg font-bold gap-3"
                    data-testid="button-submit-contrato"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enviar por WhatsApp
                    <Send className="w-4 h-4" />
                  </Button>

                  <p className="text-center text-sm text-white/40">
                    Se abrirá WhatsApp con tu información. Un promotor te responderá pronto.
                  </p>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
