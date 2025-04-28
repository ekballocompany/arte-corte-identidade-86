
import { useEffect } from "react";
import SectionTitle from "../components/SectionTitle";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to open WhatsApp
  const handleBooking = () => {
    window.open("https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20um%20horário", "_blank");
  };

  // Services data
  const services = [
    {
      id: 1,
      title: "Corte Visagista",
      description: "O corte visagista é personalizado com base na análise do formato do seu rosto, tipo de cabelo e estilo pessoal. Cada detalhe é pensado para valorizar suas características e transmitir sua identidade.",
      details: [
        "Análise completa do formato do rosto",
        "Estudo de textura e tipo de cabelo",
        "Consideração do seu estilo pessoal",
        "Técnicas precisas de corte",
        "Acabamento impecável"
      ],
      image: "https://images.pexels.com/photos/3037244/pexels-photo-3037244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "45 minutos",
      price: "R$ 120,00"
    },
    {
      id: 2,
      title: "Barba Designer",
      description: "Modelagem precisa da barba, alinhada com suas feições faciais para uma harmonia visual completa. Utilizamos técnicas exclusivas para definir contornos que complementam o formato do seu rosto.",
      details: [
        "Análise do formato do rosto",
        "Modelagem personalizada",
        "Definição de contornos",
        "Hidratação com produtos premium",
        "Acabamento com navalha"
      ],
      image: "https://images.pexels.com/photos/5853394/pexels-photo-5853394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "30 minutos",
      price: "R$ 80,00"
    },
    {
      id: 3,
      title: "Consultoria de Imagem",
      description: "Um serviço completo que vai além do corte. Analisamos seu estilo de vida, profissão e personalidade para criar uma identidade visual que transmita quem você é, incluindo recomendações de produtos e manutenção.",
      details: [
        "Análise de estilo pessoal e profissional",
        "Corte personalizado",
        "Modelagem de barba (quando aplicável)",
        "Recomendação de produtos específicos",
        "Orientações de manutenção em casa"
      ],
      image: "https://images.pexels.com/photos/11403966/pexels-photo-11403966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "1 hora e 30 minutos",
      price: "R$ 250,00"
    },
    {
      id: 4,
      title: "Corte + Barba",
      description: "A combinação perfeita dos nossos serviços de corte visagista e modelagem de barba, criando uma harmonia visual completa entre cabelo e barba que valoriza suas características faciais.",
      details: [
        "Análise integrada de cabelo e barba",
        "Corte visagista personalizado",
        "Modelagem de barba alinhada ao corte",
        "Hidratação completa",
        "Finalização premium"
      ],
      image: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "1 hora e 15 minutos",
      price: "R$ 180,00"
    }
  ];

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
            <h5 className="text-brand-gold font-medium mb-4 tracking-widest">SERVIÇOS</h5>
            <h1 className="heading-xl text-white mb-6">
              Experiências exclusivas de visagismo
            </h1>
            <p className="text-white/90 md:text-md text-sm">
              Descubra serviços personalizados que transformam sua aparência e revelam sua verdadeira identidade visual.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Nossos Serviços"
            subtitle="Conheça as experiências exclusivas de visagismo desenvolvidas para valorizar sua identidade"
            center
          />

          <div className="space-y-24 mt-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "lg:grid-flow-dense" : ""
                  }`}
              >
                <div className={index % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <h3 className="heading-lg mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                    <div className="bg-brand-beige/30 px-4 py-2 rounded-md">
                      <span className="text-sm text-gray-600">Duração</span>
                      <p className="font-medium">{service.duration}</p>
                    </div>
                    <div className="bg-brand-beige/30 px-4 py-2 rounded-md">
                      <span className="text-sm text-gray-600">Investimento</span>
                      <p className="font-medium">{service.price}</p>
                    </div>
                  </div>

                  <button onClick={handleBooking} className="btn-primary">
                    Agendar este serviço
                  </button>
                </div>

                <div className={`h-[400px] rounded-lg overflow-hidden ${index % 2 !== 0 ? "lg:col-start-1" : ""
                  }`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-gray text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Pronto para transformar seu visual?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Agende seu horário e descubra como o visagismo pode realçar sua identidade e trazer mais confiança para seu dia a dia.
          </p>
          <button onClick={handleBooking} className="btn-primary">
            Agendar pelo WhatsApp
          </button>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
