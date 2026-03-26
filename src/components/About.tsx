import { motion } from "framer-motion";
import { Heart, Sparkles, Utensils } from "lucide-react";
import interiorImg from "@/assets/interior.png";

const About = () => (
  <section id="nosotros" className="py-20 relative overflow-hidden">
    {/* Background decorations */}
    <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/3" />
    
    <div className="container relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          <motion.div 
            className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
          <div className="relative">
            <motion.img
              src={interiorImg}
              alt="Interior de La Tartaruga Córdoba"
              className="rounded-2xl w-full h-[400px] object-cover shadow-2xl"
              loading="lazy"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl px-6 py-4 font-bold text-lg shadow-xl flex items-center gap-2"
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, rotate: 3 }}
            >
              <Heart className="w-5 h-5 fill-current" />
              Desde Córdoba
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Utensils className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Sobre nosotros</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Más que un restaurante,
            <br />
            <span className="text-gradient italic">una experiencia</span>
          </h2>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              En <strong className="text-foreground">La Tartaruga</strong> creemos que comer bien no tiene que ser complicado ni caro. Somos un restaurante informal en el corazón de Córdoba, especialistas en comida abundante, sabrosa y con personalidad.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Nuestro local es pequeño pero acogedor: luces cálidas, música que acompaña y un trato cercano que te hace sentir en casa. Perfecto para parejas, grupos de amigos y familias.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Nuestra filosofía es simple: <strong className="text-foreground">ingredientes de calidad, raciones generosas y recetas que sorprenden</strong>. Desde nuestras hamburguesas envueltas hasta las pizzas artesanales, cada plato está pensado para que quieras repetir.
            </motion.p>
          </div>
          
          <motion.div 
            className="mt-8 p-5 glass-card rounded-xl border-l-4 border-primary shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ x: 5 }}
          >
            <p className="text-sm text-foreground font-medium flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              Consejo: El local es pequeño, te recomendamos reservar con antelación para asegurarte mesa.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
