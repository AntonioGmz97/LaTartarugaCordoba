import { motion } from "framer-motion";

const CtaBanner = () => (
  <section className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
    <div className="absolute inset-0 bg-background/80" />
    <div className="container relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          ¿Listo para cenar <span className="text-gradient">brutal</span> esta noche?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
          Reserva tu mesa o pide a domicilio y descubre por qué somos el favorito de Córdoba
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contacto" className="bg-primary text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105">
            Reservar Mesa
          </a>
          <a href="#pedidos" className="border-2 border-accent text-accent px-10 py-4 rounded-lg font-bold text-lg hover:bg-accent hover:text-accent-foreground transition-all hover:scale-105">
            Pedir ahora
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaBanner;
