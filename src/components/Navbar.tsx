
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Serviços", path: "/servicos" },
    { name: "Galeria", path: "/galeria" },
    { name: "Sobre", path: "/sobre" },
    { name: "Contato", path: "/contato" }
  ];

  // WhatsApp booking function
  const handleBooking = () => {
    window.open("https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20um%20horário", "_blank");
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-brand-black py-3 shadow-lg" : "bg-transparent py-5"
        }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          {/* Logo */}
          <div
            className="w-10 h-10 bg-contain bg-no-repeat bg-center text-brand-gold mr-2 quality-90"
            style={{ fontSize:'16px', backgroundImage: `url('${import.meta.env.BASE_URL}logo_brutus2.png')` }}
          ></div>

          {/* Texto */}
          {/* <div className="flex flex-col">
            <span className="font-serif text-xl font-semibold text-white">Brutus</span>
            <span className="text-xs text-brand-gold tracking-wider">Barbearia</span>
          </div> */}
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium tracking-wide transition-colors ${location.pathname === item.path
                ? "text-brand-gold"
                : "text-white hover:text-brand-gold"
                }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={handleBooking}
            className="btn-primary text-sm"
            aria-label="Agendar pelo WhatsApp"
          >
            Agendar
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-brand-black transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="container-custom py-5 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium py-2 ${location.pathname === item.path
                ? "text-brand-gold"
                : "text-white"
                }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={handleBooking}
            className="btn-primary text-sm mt-4 w-full"
            aria-label="Agendar pelo WhatsApp"
          >
            Agendar pelo WhatsApp
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
