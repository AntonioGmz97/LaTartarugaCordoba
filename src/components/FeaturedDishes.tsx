import { motion } from "framer-motion";
import { Flame, Star, Sparkles } from "lucide-react";
import hamburguesaImg from "@/assets/hamburguesa.png";
import pizzaImg from "@/assets/pizza.png";
import platosImg from "@/assets/platos.png";

const dishes = [
  { name: "Hamburguesa Tartaruga", price: "18,00€", img: hamburguesaImg, tag: "Best Seller", tagIcon: Flame, desc: "Nuestra hamburguesa envuelta en masa artesanal con carne, queso fundido y salsa secreta" },
  { name: "American Breakfast", price: "17,40€", img: platosImg, tag: "Recomendado", tagIcon: Star, desc: "Un brunch contundente con huevos, bacon crujiente y toppings de primera" },
  { name: "Pizza La Tartaruga", price: "desde 14,90€", img: pizzaImg, tag: "Popular", tagIcon: Sparkles, desc: "Masa artesanal con ingredientes premium y huevo a baja temperatura" },
  { name: "Patatas con mechada", price: "14,50€", img: platosImg, tag: "Para compartir", tagIcon: Star, desc: "Patatas crujientes con carne mechada deshilachada y queso fundido" },
];

const FeaturedDishes = () => (
  <section className="py-20 bg-card/50">
    <div className="container">
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
          <Sparkles className="w-5 h-5 text-accent" />
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Especialidades</span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Platos <span className="text-gradient">estrella</span></h2>
        <p className="text-muted-foreground">Los favoritos de nuestros clientes</p>
      </motion.div>
      
      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {dishes.map((d, i) => {
          const TagIcon = d.tagIcon;
          return (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
              
              <div className="relative h-52 overflow-hidden">
                <motion.img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                <motion.span 
                  className="absolute top-3 left-3 flex items-center gap-1.5 bg-background/90 backdrop-blur-sm text-xs font-semibold px-3 py-1.5 rounded-full"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <TagIcon className="w-3 h-3 text-accent" />
                  {d.tag}
                </motion.span>
              </div>
              
              <div className="relative p-5">
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{d.name}</h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{d.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-xl">{d.price}</span>
                  <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver más →
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default FeaturedDishes;
