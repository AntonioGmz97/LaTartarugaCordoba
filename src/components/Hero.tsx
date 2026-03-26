import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import heroImg from "@/assets/hamburguesa.png";
import FloatingParticles from "./FloatingParticles";

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Animated Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-gradient-xy" />
    
    {/* Floating Particles */}
    <FloatingParticles />
    
    {/* BG Image */}
    <div className="absolute inset-0">
      <motion.img
        src={heroImg}
        alt="Hamburguesa envuelta La Tartaruga"
        className="w-full h-full object-cover"
        loading="eager"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
    </div>

    <div className="relative z-10 container text-center py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
      >
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-primary font-semibold text-sm tracking-wide uppercase">Pizza y Tapas en Córdoba</span>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight tracking-tight mb-6"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Sabores que invitan
        </motion.span>
        <br />
        <motion.span 
          className="text-gradient italic"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          a quedarse
        </motion.span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
      >
        Pizzas artesanales, hamburguesas envueltas y platos abundantes en Córdoba
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-3 justify-center px-4"
      >
        <motion.a 
          href="#carta" 
          className="group relative bg-primary text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">Ver Carta</span>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
        </motion.a>
        
        <motion.a 
          href="#contacto" 
          className="bg-secondary text-secondary-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-secondary/30 transition-all"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Reservar
        </motion.a>
        
        <motion.a 
          href="#pedidos" 
          className="relative border-2 border-primary text-primary px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 group-hover:text-primary-foreground transition-colors">A Domicilio</span>
          <motion.div 
            className="absolute inset-0 bg-primary"
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      </motion.div>
    </div>

    <motion.a 
      href="#destacados" 
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <ChevronDown size={32} />
    </motion.a>
  </section>
);

export default Hero;
