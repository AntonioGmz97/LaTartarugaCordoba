import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Leaf, Star } from "lucide-react";

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  tags?: string[];
};

type Category = {
  name: string;
  emoji: string;
  items: MenuItem[];
};

const menu: Category[] = [
  {
    name: "Pizzas",
    emoji: "🍕",
    items: [
      { name: "Margarita", desc: "Tomate, mozzarella y albahaca fresca", price: "10,90€", tags: ["🌱"] },
      { name: "La Tartaruga", desc: "Bacon, pollo, cebolla caramelizada, huevo y salsa especial", price: "14,90€", tags: ["🔥", "⭐"] },
      { name: "Carbonara", desc: "Nata, bacon crujiente, parmesano y pimienta negra", price: "13,50€" },
      { name: "BBQ Chicken", desc: "Pollo marinado, cebolla, mozzarella y salsa BBQ ahumada", price: "14,50€", tags: ["🔥"] },
      { name: "Cuatro Quesos", desc: "Mozzarella, gorgonzola, parmesano y emmental", price: "13,90€", tags: ["🌱"] },
      { name: "Vegetal", desc: "Pimientos, champiñones, aceitunas, cebolla y tomate", price: "12,90€", tags: ["🌱"] },
    ],
  },
  {
    name: "Hamburguesas Envueltas",
    emoji: "🍔",
    items: [
      { name: "Hamburguesa Tartaruga", desc: "Carne premium envuelta en masa artesanal, queso fundido y salsa secreta", price: "18,00€", tags: ["🔥", "⭐"] },
      { name: "American Breakfast", desc: "Carne, huevo frito, bacon, queso cheddar y salsa ranch", price: "17,40€", tags: ["🔥", "⭐"] },
      { name: "Classic Smash", desc: "Doble carne smash, cheddar, cebolla y pepinillos", price: "15,90€" },
      { name: "Crispy Chicken", desc: "Pollo crujiente, lechuga, tomate y mayonesa de ajo", price: "14,90€" },
    ],
  },
  {
    name: "Para Compartir",
    emoji: "🥘",
    items: [
      { name: "Patatas con mechada y queso", desc: "Patatas crujientes con carne mechada deshilachada y queso fundido", price: "14,50€", tags: ["🔥"] },
      { name: "Nachos Supreme", desc: "Nachos con guacamole, pico de gallo, queso y jalapeños", price: "12,90€" },
      { name: "Tabla de croquetas", desc: "Surtido de croquetas caseras variadas", price: "10,50€", tags: ["⭐"] },
      { name: "Tequeños venezolanos", desc: "Palitos de queso crujientes con salsa de ajo", price: "9,90€" },
    ],
  },
  {
    name: "Pastas y Risottos",
    emoji: "🍝",
    items: [
      { name: "Pasta al tartufo", desc: "Tagliatelle con crema de trufa negra y parmesano", price: "16,50€", tags: ["⭐"] },
      { name: "Risotto de setas", desc: "Arroz cremoso con setas de temporada y parmesano", price: "15,90€", tags: ["🌱"] },
      { name: "Carbonara auténtica", desc: "Spaghetti con guanciale, pecorino y pimienta", price: "14,50€" },
    ],
  },
  {
    name: "Platos Especiales",
    emoji: "⭐",
    items: [
      { name: "Solomillo a la piedra", desc: "Solomillo de ternera con guarnición de temporada", price: "19,90€", tags: ["⭐"] },
      { name: "Atún en sésamo", desc: "Tataki de atún rojo con sésamo y salsa ponzu", price: "17,50€" },
      { name: "Secreto ibérico", desc: "Secreto a la brasa con patatas y pimientos", price: "16,90€", tags: ["🔥"] },
    ],
  },
  {
    name: "Postres",
    emoji: "🍰",
    items: [
      { name: "Tiramisú casero", desc: "Receta italiana tradicional", price: "6,50€", tags: ["⭐"] },
      { name: "Coulant de chocolate", desc: "Bizcocho fundente con helado de vainilla", price: "7,50€" },
      { name: "Tarta de queso", desc: "Estilo burnt basque cheesecake", price: "6,90€" },
    ],
  },
  {
    name: "Bebidas",
    emoji: "🍺",
    items: [
      { name: "Cerveza artesanal", desc: "Selección de cervezas craft locales", price: "desde 3,50€" },
      { name: "Vino de la casa", desc: "Tinto, blanco o rosado (copa/botella)", price: "desde 3,00€" },
      { name: "Refrescos", desc: "Coca-Cola, Fanta, Aquarius", price: "2,50€" },
      { name: "Cocktails clásicos", desc: "Mojito, Gin Tonic, Aperol Spritz", price: "desde 7,00€" },
    ],
  },
  {
    name: "Cafés y Copas",
    emoji: "☕",
    items: [
      { name: "Café espresso", desc: "Café italiano de tueste medio", price: "1,80€" },
      { name: "Copa de gin premium", desc: "Selección de ginebras premium con tónica", price: "desde 8,00€" },
      { name: "Chupitos variados", desc: "Selección de licores", price: "desde 2,50€" },
    ],
  },
];

const tagIcons: Record<string, string> = {
  "🔥": "Popular",
  "🌱": "Vegetariano",
  "⭐": "Recomendado",
};

const MenuSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="carta" className="py-20 bg-card/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra <span className="text-gradient">Carta</span></h2>
          <p className="text-muted-foreground">Descubre todos nuestros platos</p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {menu.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                active === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
          >
            {menu[active].items.map((item) => (
              <div
                key={item.name}
                className="glass-card rounded-xl p-5 hover-lift group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-base group-hover:text-primary transition-colors">{item.name}</h3>
                  <span className="text-primary font-bold text-lg whitespace-nowrap ml-3">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
                {item.tags && (
                  <div className="flex gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="text-xs bg-muted px-2 py-1 rounded-full">
                        {t} {tagIcons[t]}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
