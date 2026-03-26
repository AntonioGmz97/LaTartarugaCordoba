import { motion } from "framer-motion";
import { Truck, Clock, Package, ArrowRight } from "lucide-react";

const Orders = () => (
  <section id="pedidos" className="py-20 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
    
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
          <Package className="w-5 h-5 text-accent" />
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Domicilio</span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Pide <span className="text-gradient">a domicilio</span></h2>
        <p className="text-muted-foreground">Recíbelo en casa con Glovo</p>
      </motion.div>

      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="relative group"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-primary/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative bg-background/80 backdrop-blur-xl rounded-2xl p-8 text-center border border-border/50 shadow-xl">
            <motion.div 
              className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mx-auto mb-6"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Truck className="w-10 h-10 text-accent" />
              </motion.div>
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-3">Envío a domicilio</h3>
            <p className="text-muted-foreground mb-6">Recíbelo en casa con Glovo. Disponible desde las 21:00 todos los días.</p>
            
            <motion.a
              href="https://glovoapp.com/es/es/cordoba/stores/la-tartaruga-cordoba"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-8 py-4 rounded-xl font-semibold shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Pedir con Glovo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-10"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 text-muted-foreground text-sm">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> Disponible desde las 21:00
          </span>
          <span className="hidden sm:inline">|</span>
          <span>Pedido mínimo variable según zona</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Orders;
