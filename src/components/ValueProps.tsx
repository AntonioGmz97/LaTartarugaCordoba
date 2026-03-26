import { motion } from "framer-motion";
import { Utensils, BadgeEuro, Heart, ChefHat } from "lucide-react";

const values = [
  { icon: Utensils, title: "Platos abundantes", desc: "Aquí nadie se queda con hambre. Raciones generosas que satisfacen de verdad." },
  { icon: BadgeEuro, title: "Calidad-precio top", desc: "Ingredientes de primera a precios accesibles. La mejor relación de Córdoba." },
  { icon: Heart, title: "Ambiente acogedor", desc: "Un local íntimo con luces cálidas, perfecto para disfrutar sin prisas." },
  { icon: ChefHat, title: "Recetas originales", desc: "Creaciones únicas como nuestra hamburguesa envuelta que no encontrarás en otro sitio." },
];

const ValueProps = () => (
  <section className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué <span className="text-gradient">La Tartaruga</span>?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Más que un restaurante, una experiencia gastronómica que repites</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-8 text-center hover-lift group"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <v.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">{v.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProps;
