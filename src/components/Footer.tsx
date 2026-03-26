import { Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 py-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="La Tartaruga" className="h-16 w-auto mb-4" />
          <p className="text-muted-foreground text-sm">Pizza y Tapas en Córdoba. Sabores que invitan a quedarse.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Navegación</h4>
          <div className="space-y-2 text-sm">
            <a href="#inicio" className="block text-muted-foreground hover:text-primary transition-colors">Inicio</a>
            <a href="#nosotros" className="block text-muted-foreground hover:text-primary transition-colors">Nosotros</a>
            <a href="#carta" className="block text-muted-foreground hover:text-primary transition-colors">Carta</a>
            <a href="#pedidos" className="block text-muted-foreground hover:text-primary transition-colors">Pedidos</a>
            <a href="#contacto" className="block text-muted-foreground hover:text-primary transition-colors">Contacto</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contacto</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              C/ José María Martorell 8, 14005
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              857 87 25 45
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Síguenos</h4>
          <a
            href="https://instagram.com/latartarugacordoba"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <Instagram size={20} /> @latartarugacordoba
          </a>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} La Tartaruga — Pizza y Tapas. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
