import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertTriangle, MessageSquare, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const WHATSAPP_SOPORTE = "529231117996";

const reporteSchema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre"),
  telefono: z.string().min(7, "Teléfono inválido"),
  tipo: z.string().min(1, "Selecciona el tipo de problema"),
  descripcion: z.string().min(10, "Describe el problema con más detalle"),
  direccion: z.string().min(5, "Ingresa tu dirección"),
});

const quejaSchema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre"),
  telefono: z.string().min(7, "Teléfono inválido"),
  tipo: z.string().min(1, "Selecciona el tipo de queja"),
  descripcion: z.string().min(10, "Describe la queja con más detalle"),
});

type ReporteData = z.infer<typeof reporteSchema>;
type QuejaData = z.infer<typeof quejaSchema>;

function ReporteForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<ReporteData>({
    resolver: zodResolver(reporteSchema),
    defaultValues: { nombre: "", telefono: "", tipo: "", descripcion: "", direccion: "" },
  });

  const onSubmit = (data: ReporteData) => {
    const text = encodeURIComponent(
      `Hola Wifinity! Necesito reportar un problema.\n\nNombre: ${data.nombre}\nTeléfono: ${data.telefono}\nProblema: ${data.tipo}\nDescripción: ${data.descripcion}\nDirección: ${data.direccion}`
    );
    window.open(`https://wa.me/${WHATSAPP_SOPORTE}?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    form.reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center gap-4"
      >
        <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-amber-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">Reporte enviado</h3>
        <p className="text-white/60">Nuestro equipo técnico recibirá tu reporte por WhatsApp y te contactará pronto.</p>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Nombre</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tu nombre"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-amber-400"
                    data-testid="input-nombre-reporte"
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
                <FormLabel className="text-white/80">Teléfono</FormLabel>
                <FormControl>
                  <Input
                    placeholder="04XX-XXXXXXX"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-amber-400"
                    data-testid="input-telefono-reporte"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="tipo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Tipo de problema</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-amber-400" data-testid="select-tipo-reporte">
                    <SelectValue placeholder="Selecciona el problema" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-card border-white/10">
                  <SelectItem value="Sin internet">Sin internet</SelectItem>
                  <SelectItem value="Internet lento">Internet lento</SelectItem>
                  <SelectItem value="Falla intermitente">Falla intermitente</SelectItem>
                  <SelectItem value="Otro">Otro</SelectItem>
                </SelectContent>
              </Select>
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
                  placeholder="Tu dirección"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-amber-400"
                  data-testid="input-direccion-reporte"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="descripcion"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Descripción del problema</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe qué está pasando..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-amber-400 resize-none"
                  rows={3}
                  data-testid="textarea-descripcion-reporte"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full h-12 rounded-xl font-bold gap-2 bg-amber-500 hover:bg-amber-400 text-black"
          data-testid="button-submit-reporte"
        >
          <Send className="w-4 h-4" />
          Enviar reporte por WhatsApp
        </Button>
      </form>
    </Form>
  );
}

function QuejaForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<QuejaData>({
    resolver: zodResolver(quejaSchema),
    defaultValues: { nombre: "", telefono: "", tipo: "", descripcion: "" },
  });

  const onSubmit = (data: QuejaData) => {
    const text = encodeURIComponent(
      `Hola Wifinity! Quiero registrar una queja.\n\nNombre: ${data.nombre}\nTeléfono: ${data.telefono}\nTipo de queja: ${data.tipo}\nDescripción: ${data.descripcion}`
    );
    window.open(`https://wa.me/${WHATSAPP_SOPORTE}?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    form.reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center gap-4"
      >
        <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-red-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">Queja registrada</h3>
        <p className="text-white/60">Tu queja fue enviada al equipo de atención al cliente por WhatsApp.</p>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Nombre</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tu nombre"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-red-400"
                    data-testid="input-nombre-queja"
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
                <FormLabel className="text-white/80">Teléfono</FormLabel>
                <FormControl>
                  <Input
                    placeholder="04XX-XXXXXXX"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-red-400"
                    data-testid="input-telefono-queja"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="tipo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Tipo de queja</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-red-400" data-testid="select-tipo-queja">
                    <SelectValue placeholder="Selecciona el tipo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-card border-white/10">
                  <SelectItem value="Atención al cliente">Atención al cliente</SelectItem>
                  <SelectItem value="Facturación">Facturación</SelectItem>
                  <SelectItem value="Tiempo de respuesta">Tiempo de respuesta</SelectItem>
                  <SelectItem value="Calidad del servicio">Calidad del servicio</SelectItem>
                  <SelectItem value="Otro">Otro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="descripcion"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Descripción</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Cuéntanos qué pasó..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-red-400 resize-none"
                  rows={3}
                  data-testid="textarea-descripcion-queja"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full h-12 rounded-xl font-bold gap-2 bg-red-500 hover:bg-red-400 text-white"
          data-testid="button-submit-queja"
        >
          <Send className="w-4 h-4" />
          Enviar queja por WhatsApp
        </Button>
      </form>
    </Form>
  );
}

export default function SupportForms() {
  return (
    <section id="reportes" className="py-24 bg-muted/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4 text-amber-400">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">Soporte técnico</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Reportes y quejas
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Reporta fallas técnicas o registra una queja. Nuestro equipo lo recibe directamente por WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto bg-card border border-white/10 rounded-3xl p-8 shadow-xl"
        >
          <Tabs defaultValue="reporte" className="w-full">
            <TabsList className="w-full mb-8 bg-white/5 rounded-xl p-1 h-auto">
              <TabsTrigger
                value="reporte"
                className="flex-1 rounded-lg py-3 font-semibold data-[state=active]:bg-amber-500 data-[state=active]:text-black gap-2"
                data-testid="tab-reporte"
              >
                <AlertTriangle className="w-4 h-4" />
                Falla técnica
              </TabsTrigger>
              <TabsTrigger
                value="queja"
                className="flex-1 rounded-lg py-3 font-semibold data-[state=active]:bg-red-500 data-[state=active]:text-white gap-2"
                data-testid="tab-queja"
              >
                <MessageSquare className="w-4 h-4" />
                Queja
              </TabsTrigger>
            </TabsList>
            <TabsContent value="reporte" id="quejas">
              <ReporteForm />
            </TabsContent>
            <TabsContent value="queja">
              <QuejaForm />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
