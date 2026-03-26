import { motion } from "framer-motion";
import { Star, MapPin, DollarSign, Beef } from "lucide-react";

const highlights = [
  { icon: Star, label: "4,7 / 5 en reseñas", color: "text-accent" },
  { icon: DollarSign, label: "10–20€ por persona", color: "text-primary" },
  { icon: MapPin, label: "Poniente Sur, Córdoba", color: "text-accent" },
  { icon: Beef, label: "Hamburguesas envueltas", color: "text-primary" },
];

const Highlights = () => (
  <section id="destacados" className="py-16 border-y border-border">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-3 p-6"
          >
            <h.icon className={`${h.color} w-8 h-8`} />
            <span className="font-semibold text-sm md:text-base text-foreground">{h.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Highlights;
