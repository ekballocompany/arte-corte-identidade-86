
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { ArrowDown, ArrowRight, MapPin, Phone, Scissors, Crown, Eye, Sparkles } from "lucide-react";


const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to open WhatsApp
  const handleBooking = () => {
    window.open("https://wa.me/5516992832380?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20servi%C3%A7o!%20", "_blank");
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
        {/* <div
          className="absolute inset-0 z-0 object-cover object-center"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}homepage.jpeg')` }}
        ></div> */}

        {/* Mobile - visível só até md (menor que 768px) */}
        <div
          className="absolute w-full min-h-[100svh] md:hidden"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}homepage-mobile.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Desktop - visível só a partir de md (768px pra cima) */}
        <div
          className="absolute w-full min-h-[100svh] hidden md:block md:h-screen"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}homepage.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* O gradiente continua igual, se quiser também pode fazer responsivo */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}gradient-background-home.png')` }}
        ></div>


        <div className="container-custom relative z-10 pt-6 md:pt-20">
          <div className="max-w-xl">
            {/* <h5 className="text-brand-gold font-medium mb-4 tracking-widest animate-fade-in">GUSTAVO LADEIRA | VISAGISTA</h5> */}
            <h1 className="heading-xl text-white mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Bem vindos<br />a  Brutus Barbearia.
            </h1>
            <p className="text-white/90 mb-8 animate-fade-in md:text-md text-sm" style={{ animationDelay: "0.4s" }}>
              Mais que uma barbearia: somos uma experiência de bem-estar, estilo e confiança para o homem moderno — com ética, respeito e excelência em cada detalhe.
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
                title="Brutus Barbearia — Excelência em visagismo e em estética"
                subtitle="Mais do que uma barbearia, a Brutusé um espaço de transformação. Aqui, cada corte, cada linha e cada detalhe são pensados para revelar o melhor da sua imagem pessoal."
              />
              <p className="text-gray-600 mb-6">
                Entendemos que o visual ideal vai além da aparência: ele comunica quem você é. Por isso, unimos técnicas avançadas de visagismo, atendimento exclusivo e um ambiente de alto padrão para proporcionar uma experiência única — feita sob medida para cada cliente.
              </p>
              <p className="text-gray-600 mb-8">
                Com uma equipe altamente qualificada e estrutura de primeira linha, oferecemos muito mais que serviços. Oferecemos identidade, estilo e presença. Seja para um momento especial ou para o seu dia a dia, a Brutus Barbearia é o lugar onde sua imagem fala por você.
              </p>
              <Link to="/sobre" className="btn-primary">
                Conheça mais <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <img
                  src="HomePageImg1.jpeg"
                  alt="Corte de cabelo estilizado"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden mt-8">
                <img
                  src="HomePageImg2.jpeg"
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Scissors className="text-brand-gold" size={24} />
                </div>
                <h3 className="heading-sm mb-4">Brutus Barbearia Convencional</h3>
                <p className="text-gray-600 mb-6">
                  Serviços clássicos de barbearia com excelência e atendimento personalizado.
                </p>
              </div>
              <Link to="/servicos" className="text-brand-gold font-medium inline-flex items-center hover:underline mt-auto">
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Crown className="text-brand-gold" size={24} />
                </div>
                <h3 className="heading-sm mb-4">Brutus Exclusive</h3>
                <p className="text-gray-600 mb-6">
                  Atendimento premium e serviços exclusivos para clientes que buscam o máximo em cuidado e estilo.
                </p>
              </div>
              <Link to="/servicos" className="text-brand-gold font-medium inline-flex items-center hover:underline mt-auto">
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Eye className="text-brand-gold" size={24} />
                </div>
                <h3 className="heading-sm mb-4">Brutus Visagismos</h3>
                <p className="text-gray-600 mb-6">
                  Análise personalizada do seu estilo e formato para cortes e visuais que realçam sua identidade.
                </p>
              </div>
              <Link to="/servicos" className="text-brand-gold font-medium inline-flex items-center hover:underline mt-auto">
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Sparkles className="text-brand-gold" size={24} />
                </div>
                <h3 className="heading-sm mb-4">Brutus Estética</h3>
                <p className="text-gray-600 mb-6">
                  Serviços de estética para complementar seu visual com cuidados modernos e especializados.
                </p>
              </div>
              <Link to="/servicos" className="text-brand-gold font-medium inline-flex items-center hover:underline mt-auto">
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
                      R. Cel. Luíz da Silva Batista, 316 - Jd Irajá,<br />Ribeirão Preto - SP
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone size={24} className="text-brand-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-medium mb-1">Contato</h4>
                    <p className="text-gray-300">
                      (16) 99283-2380<br />
                      brutusbarbeariarp@gmail.com
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
                src="https://www.google.com/maps?q=R.+Cel.+Lu%C3%ADz+da+Silva+Batista,+316,+Jardim+Iraj%C3%A1,+Ribeir%C3%A3o+Preto+SP&output=embed"
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
