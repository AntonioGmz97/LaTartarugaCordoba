import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Carta", href: "#carta" },
  { label: "Pedidos", href: "#pedidos" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <a href="#inicio">
          <img src={logo} alt="La Tartaruga" className="h-12 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+34857872545"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            <Phone size={16} /> Llamar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Menú"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full right-4 mt-2 w-56 bg-white/70 dark:bg-black/70 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/20 overflow-hidden"
          >
            <div className="py-2">
              {navLinks.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="border-t border-border/50 mt-1 pt-1 px-2 pb-2">
                <a
                  href="tel:+34857872545"
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-semibold text-sm"
                >
                  <Phone size={16} /> Llamar
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
