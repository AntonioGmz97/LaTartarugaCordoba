import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const Contact = () => (
  <section id="contacto" className="py-20 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span className="w-8 h-[2px] bg-primary" />
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Contacto</span>
          <span className="w-8 h-[2px] bg-primary" />
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacta con <span className="text-gradient">nosotros</span></h2>
        <p className="text-muted-foreground">Llámanos directamente o visítanos</p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {/* Info + Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="glass-card rounded-2xl p-6 space-y-5 shadow-xl shadow-primary/5">
            <motion.div 
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group"
              whileHover={{ x: 5 }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Dirección</p>
                <p className="text-muted-foreground text-sm">Calle José María Martorell 8, 14005 Córdoba</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto self-center" />
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group"
              whileHover={{ x: 5 }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Teléfono</p>
                <p className="text-muted-foreground text-sm">857 87 25 45</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto self-center" />
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group"
              whileHover={{ x: 5 }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Horario</p>
                <p className="text-muted-foreground text-sm">21:00 – 23:00 (todos los días)</p>
              </div>
            </motion.div>
            
            <motion.a
              href="tel:+34857872545"
              className="block w-full text-center bg-gradient-to-r from-primary to-accent text-primary-foreground py-4 rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Llamar ahora
              </span>
            </motion.a>
          </div>

          {/* Map */}
          <motion.div 
            className="rounded-2xl overflow-hidden h-52 shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.0!2d-4.7983975!3d37.8795772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m1!1s0xd6d21fba3f54f95:0x20a2742ae21351b7!2sLa%20Tartaruga%20C%C3%B3rdoba!5e0!3m2!1ses!2ses!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación La Tartaruga Córdoba"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
