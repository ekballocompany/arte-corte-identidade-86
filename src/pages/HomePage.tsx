
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { ArrowDown, ArrowRight, MapPin, Phone, Scissors } from "lucide-react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to open WhatsApp
  const handleBooking = () => {
    window.open("https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20um%20horário", "_blank");
  };

  const galleryItems = [
    // Cortes
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2074",
      category: "Cortes",
      title: "Corte Moderno Executivo",
      alt: "Homem recebendo corte de cabelo moderno em barbearia elegante com iluminação baixa"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2070",
      category: "Cortes",
      title: "Acabamento Preciso",
      alt: "Barbeiro realizando acabamento detalhado no corte masculino em ambiente escuro"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070",
      category: "Cortes",
      title: "Técnica Apurada",
      alt: "Barbeiro profissional usando técnicas precisas de corte em ambiente sofisticado"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074",
      category: "Cortes",
      title: "Estilo Clássico",
      alt: "Cliente recebendo corte clássico em cadeira de barbeiro vintage"
    },
    // Barbas
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070",
      category: "Barbas",
      title: "Barba Bem Cuidada",
      alt: "Detalhe de barba sendo aparada com precisão usando navalha tradicional"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070",
      category: "Barbas",
      title: "Modelagem de Barba",
      alt: "Processo de modelagem de barba com produtos especializados"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=2076",
      category: "Barbas",
      title: "Barba Clássica",
      alt: "Homem com barba bem aparada em ambiente de barbearia tradicional"
    },
    // Ambiente
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1521322714240-ee1d383eab62?q=80&w=2070",
      category: "Ambiente",
      title: "Ambiente Premium",
      alt: "Interior elegante de barbearia com decoração vintage e iluminação suave"
    }
  ];


  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-brand-gray flex items-center">
        <div className="absolute inset-0 z-0 bg-black/40"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}image-background-home.avif')` }}
        ></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}gradient-background-home.png')` }}
        ></div>

        <div className="container-custom relative z-10 pt-6 md:pt-20">
          <div className="max-w-xl">
            {/* <h5 className="text-brand-gold font-medium mb-4 tracking-widest animate-fade-in">GUSTAVO LADEIRA | VISAGISTA</h5> */}
            <h1 className="heading-xl text-white mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Corte é arte.<br />Visagismo é identidade.
            </h1>
            <p className="text-white/90 mb-8 animate-fade-in md:text-md text-sm" style={{ animationDelay: "0.4s" }}>
              Especialista em visagismo masculino, transformando aparências e realçando personalidades através de cortes precisos e personalizados.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <button onClick={handleBooking} className="btn-primary">
                Agende seu horário
              </button>
              <Link to="/servicos" className="btn-secondary">
                Nossos serviços
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-fade-in mt-2 md:mt-4" style={{ animationDelay: "1s" }}>
          <div className="flex items-center text-white">
            <span className="mr-2 text-sm">Explore</span>
            <ArrowDown size={16} className="animate-bounce" />
          </div>
        </div>



      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Visagismo masculino de alto padrão"
                subtitle="Descubra o poder transformador de um corte personalizado para sua identidade visual"
              />
              <p className="text-gray-600 mb-6">
                Cada rosto carrega uma história única, e o visagismo é a arte de contar essa história da melhor forma possível. Com técnicas refinadas e um olhar apurado para detalhes, Gustavo Ladeira oferece cortes que vão além da estética - são afirmações de personalidade.
              </p>
              <p className="text-gray-600 mb-8">
                Com formação especializada e anos de experiência, Gustavo traz para cada cliente uma abordagem personalizada, onde cada detalhe é pensado para realçar os pontos fortes e criar uma harmonia visual única.
              </p>
              <Link to="/sobre" className="btn-primary">
                Conheça mais <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1643898803340-c27d92822088?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Corte de cabelo estilizado"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden mt-8">
                <img
                  src="https://images.unsplash.com/photo-1593351918612-fdb3a20b36b6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Homem com barba bem cuidada"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-brand-beige/30">
        <div className="container-custom">
          <SectionTitle
            title="Nossos Serviços"
            subtitle="Experiências exclusivas para transformar sua aparência"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2">
              <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Scissors className="text-brand-gold" size={24} />
              </div>
              <h3 className="heading-sm mb-4">Corte Visagista</h3>
              <p className="text-gray-600 mb-6">
                Análise completa do formato de rosto e estilo pessoal para criar um corte único que valorize suas características.
              </p>
              <Link to="/servicos" className="text-brand-gold font-medium inline-flex items-center hover:underline">
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2">
              <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-brand-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="heading-sm mb-4">Barba Designer</h3>
              <p className="text-gray-600 mb-6">
                Modelagem precisa da barba, alinhada com suas feições faciais para uma harmonia visual completa.
              </p>
              <Link to="/servicos" className="text-brand-gold font-medium inline-flex items-center hover:underline">
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2">
              <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-brand-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="heading-sm mb-4">Consultoria de Imagem</h3>
              <p className="text-gray-600 mb-6">
                Recomendação de corte e estilo completo, incluindo dicas de produtos e manutenção para seu tipo específico.
              </p>
              <Link to="/servicos" className="text-brand-gold font-medium inline-flex items-center hover:underline">
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/servicos" className="btn-secondary">
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Nossa Galeria"
            subtitle="Conheça um pouco do nosso trabalho e resultados"
            center
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {galleryItems.map((item) => (
              <div key={item.id} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>


          <div className="text-center mt-12">
            <Link to="/galeria" className="btn-primary">
              Ver galeria completa
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-brand-gray text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Nossa Localização"
                subtitle="Venha nos visitar e transforme seu visual"
                light
              />

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin size={24} className="text-brand-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-medium mb-1">Endereço</h4>
                    <p className="text-gray-300">
                      Rua Exemplo, 123 - Bairro<br />
                      São Paulo - SP, 00000-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone size={24} className="text-brand-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-medium mb-1">Contato</h4>
                    <p className="text-gray-300">
                      (11) 99999-9999<br />
                      gustavo@email.com
                    </p>
                  </div>
                </div>
              </div>

              <button onClick={handleBooking} className="btn-primary">
                Agende pelo WhatsApp
              </button>
            </div>

            <div className="h-[400px] rounded-lg overflow-hidden">
              {/* Replace with actual Google Maps embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467688.89495579266!2d-46.92450779726561!3d-23.681531499999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1714109349647!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Gustavo Ladeira Visagista"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
