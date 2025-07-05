import { useEffect, useState, FormEvent } from "react";
import { toast } from "sonner";
import SectionTitle from "../components/SectionTitle";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Form submission handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mjkwkzdn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }),
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso! Em breve entraremos em contato.", {
          duration: 5000,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        toast.error("Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.", {
          duration: 5000,
        });
      }
    } catch (error) {
      toast.error("Erro de conexão. Verifique sua internet e tente novamente.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to open WhatsApp
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20mais%20informações", "_blank");
  };

  // Function to make a call
  const handleCall = () => {
    window.location.href = "tel:+5511999999999";
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-gray">
        {/* <div className="absolute inset-0 z-0 bg-black/40"></div> */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-brand-black"
        // style={{ backgroundImage: "Deixei a cor em preto / sem imagem mesmo" }}
        ></div>


        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h5 className="text-brand-gold font-medium mb-4 tracking-widest">CONTATO</h5>
            <h1 className="heading-xl text-white mb-6">Fale Conosco</h1>
            <p className="text-white/90 md:text-md text-sm">
              Estamos prontos para atendê-lo e responder todas as suas dúvidas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionTitle
                title="Informações de Contato"
                subtitle="Várias formas de entrar em contato conosco"
              />

              <div className="space-y-8 mb-8">
                <div className="flex items-start">
                  <div className="bg-brand-gold/10 p-4 rounded-full flex-shrink-0 mr-4">
                    <MapPin className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Endereço</h4>
                    <p className="text-gray-600">
                      Rua Exemplo, 123 - Bairro<br />
                      São Paulo - SP, 00000-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-gold/10 p-4 rounded-full flex-shrink-0 mr-4">
                    <Phone className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Telefone</h4>
                    <p className="text-gray-600">(11) 99999-9999</p>
                    <button
                      onClick={handleCall}
                      className="text-brand-gold font-medium hover:underline mt-1 inline-flex items-center"
                    >
                      Ligar agora
                    </button>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-gold/10 p-4 rounded-full flex-shrink-0 mr-4">
                    <Mail className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">E-mail</h4>
                    <p className="text-gray-600">gustavo@email.com</p>
                    <a
                      href="mailto:gustavo@email.com"
                      className="text-brand-gold font-medium hover:underline mt-1 inline-flex items-center"
                    >
                      Enviar e-mail
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-gold/10 p-4 rounded-full flex-shrink-0 mr-4">
                    <Clock className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Horário de Funcionamento</h4>
                    <div className="text-gray-600">
                      <div className="flex justify-between">
                        <span>Segunda - Sexta:</span>
                        <span className="ml-4">09:00 - 19:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábado:</span>
                        <span className="ml-4">09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingo:</span>
                        <span className="ml-4">Fechado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleWhatsApp}
                  className="btn-primary w-full md:w-auto"
                >
                  Conversar pelo WhatsApp
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <SectionTitle
                title="Envie uma Mensagem"
                subtitle="Preencha o formulário e entraremos em contato"
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="Digite seu e-mail"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="Digite seu telefone"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="Digite sua mensagem"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467688.89495579266!2d-46.92450779726561!3d-23.681531499999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1714109349647!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Brutus Barbearia"
        ></iframe>
      </section>
    </>
  );
};

export default ContactPage;
