import { motion } from "framer-motion";
import { Star, Quote, MessageCircle } from "lucide-react";

const reviews = [
  { text: "Comida espectacular y cantidades enormes. La hamburguesa envuelta es una locura total.", author: "María G.", rating: 5 },
  { text: "Servicio rápido y muy atento. El local es pequeño pero super acogedor, volveremos seguro.", author: "Carlos R.", rating: 5 },
  { text: "Las hamburguesas envueltas son únicas en Córdoba. No he probado nada igual.", author: "Ana P.", rating: 5 },
  { text: "Calidad-precio increíble. Cenamos dos personas por 30€ y salimos rodando.", author: "Javier M.", rating: 4 },
  { text: "Las pizzas artesanales están brutales. La masa crujiente y los ingredientes fresquísimos.", author: "Laura S.", rating: 5 },
  { text: "Ambiente genial para ir con amigos. La música, las luces... todo perfecto.", author: "Pedro L.", rating: 5 },
];

const Reviews = () => (
  <section id="resenas" className="py-20 bg-card/50 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
    
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
          <MessageCircle className="w-5 h-5 text-accent" />
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Testimonios</span>
        </motion.div>
        
        <motion.div 
          className="flex items-center justify-center gap-1 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, rotate: -30 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
            >
              <Star className="w-7 h-7 text-accent fill-accent" />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          4,7 <span className="text-muted-foreground text-2xl font-normal">/ 5</span>
        </motion.h2>
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          +200 reseñas de clientes satisfechos
        </motion.p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={r.author}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all"
          >
            {/* Quote icon */}
            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
            
            <div className="flex gap-1 mb-3">
              {[...Array(r.rating)].map((_, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + j * 0.05 }}
                >
                  <Star className="w-4 h-4 text-accent fill-accent" />
                </motion.div>
              ))}
            </div>
            
            <p className="text-foreground/90 text-sm leading-relaxed mb-4 relative z-10">"{r.text}"</p>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-xs font-bold">
                {r.author.charAt(0)}
              </div>
              <p className="text-muted-foreground text-sm font-semibold">— {r.author}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <motion.a
          href="https://www.google.com/maps/place/La+Tartaruga+C%C3%B3rdoba/@37.8795772,-4.7983975,20z/data=!4m8!3m7!1s0xd6d21fba3f54f95:0x20a2742ae21351b7!8m2!3d37.8795772!4d-4.7983975!9m1!1b1!16s%2Fg%2F11yssrh4_8?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Ver más en Google
          <motion.span
            className="inline-block"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Reviews;
