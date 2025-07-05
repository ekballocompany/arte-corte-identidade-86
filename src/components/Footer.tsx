
import { Facebook, Instagram, MapPin, Phone, Mail, Scissors } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Function to open WhatsApp
  const openWhatsApp = () => {
    window.open("https://wa.me/5516992832380?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20servi%C3%A7o!%20", "_blank");
  };

  return (
    <footer className="bg-brand-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center">
              {/* Logo */}
              <div
                className="w-16 h-16 bg-contain bg-no-repeat bg-center text-brand-gold mr-2 quality-90"
                style={{ fontSize: '16px', backgroundImage: `url('${import.meta.env.BASE_URL}logo_brutus2.png')` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Mais que uma barbearia: somos uma experiência de bem-estar, estilo e confiança para o homem moderno — com ética, respeito e excelência em cada detalhe.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/brutusbarbeariarp/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-brand-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/BrutusBarbeariaRP/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-brand-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Mapa do site</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-brand-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">R. Cel. Luíz da Silva Batista, 316 - Jd Irajá, Ribeirão Preto - SP</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-brand-gold mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-400">(16) 99283-2380</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-brand-gold mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-400">brutusbarbeariarp@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Horário de Funcionamento</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400 flex justify-between">
                <span>Segunda - Sexta:</span>
                <span>09:00 - 20:00</span>
              </li>
              <li className="text-sm text-gray-400 flex justify-between">
                <span>Sábado:</span>
                <span>08:30 - 18:00</span>
              </li>
              <li className="text-sm text-gray-400 flex justify-between">
                <span>Domingo:</span>
                <span>Fechado</span>
              </li>
            </ul>
            <button
              onClick={openWhatsApp}
              className="btn-primary w-full mt-4 text-sm py-2"
            >
              Agendar pelo WhatsApp
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {currentYear} Brutus Barbearia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
