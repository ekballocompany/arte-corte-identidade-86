import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa"; // << Importa o ícone correto!

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20um%20horário",
      "_blank"
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      className={`fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={20} />
    </button>
  );
};

export default WhatsAppButton;
