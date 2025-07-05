import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { Clock } from "lucide-react";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBooking = () => {
    window.open(
      "https://booksy.com/pt-br/instant-experiences/widget/111533",
      "_blank"
    );
  };

  const categorizedServices = {
    "Brutus Visagismo": [
      { title: "Consultoria visagista com Gustavo Ladeira", price: "R$ 499,00", duration: "2h" },
      { title: "Consultoria visagista com o Jociélio Lopes", price: "R$ 499,00", duration: "2h" },
      { title: "Consultoria visagista com thalison Avezú", price: "R$ 499,90", duration: "2h 30min" }
    ],
    "Brutus Exclusive": [
      { title: "Corte", price: "R$ 85,00", duration: "1h" },
      { title: "Barba", price: "R$ 85,00", duration: "30min" },
      { title: "Barba + pezinho", price: "R$ 100,00", duration: "40min" },
      { title: "Cabelo + barba", price: "R$ 150,00", duration: "1h" },
      { title: "Cabelo + barba + sobrancelha", price: "R$ 185,00", duration: "1h" },
      { title: "Cabelo + barba + sobrancelha + depilação nariz", price: "R$ 220,00", duration: "1h 30min" },
      { title: "Coloração da barba", price: "R$ 60,00", duration: "30min" },
      { title: "Pezinho", price: "R$ 40,00", duration: "30min" },
      { title: "Hidratação com ozônio", price: "R$ 80,00", duration: "30min" },
      { title: "Sobrancelha", price: "R$ 40,00", duration: "30min" },
      { title: "Depilação nasal", price: "R$ 40,00", duration: "30min" },
      { title: "Corte + Selante", price: "R$ 280,00", duration: "2h" },
      { title: "Selante", price: "R$ 200,00", duration: "1h 30min" }
    ],
    "Brutus Convencional": [
      { title: "Corte", price: "R$ 65,00", duration: "30min" },
      { title: "Cabelo + sobrancelha", price: "R$ 95,00", duration: "30min" },
      { title: "Barba", price: "R$ 65,00", duration: "30min" },
      { title: "Cabelo + barba + sobrancelha", price: "R$ 140,00", duration: "1h" },
      { title: "Coloração de barba", price: "R$ 40,00", duration: "30min" },
      { title: "Barba + coloração", price: "R$ 95,00", duration: "1h" },
      { title: "Selante", price: "R$ 150,00+", duration: "30min" },
      { title: "Corte cabelo longo na tesoura", price: "R$ 70,00", duration: "1h" },
      { title: "Barba + cabelo", price: "R$ 120,00", duration: "1h" },
      { title: "Pezinho", price: "R$ 30,00", duration: "30min" },
      { title: "Selante + corte", price: "R$ 215,00", duration: "1h 30min" },
      { title: "Sobrancelha", price: "R$ 30,00", duration: "30min" },
      { title: "Cabelo + depilação nariz/orelha", price: "R$ 125,00", duration: "1h" },
      { title: "Depilação nariz com cera quente", price: "R$ 30,00", duration: "30min" },
      { title: "Luzes", price: "R$ 200,00", duration: "2h" },
      { title: "Cabelo + sobrancelha + depilação nariz e orelha", price: "R$ 140,00", duration: "1h" },
      { title: "Hidratação", price: "R$ 60,00", duration: "30min" },
      { title: "Cabelo + hidratação", price: "R$ 125,00", duration: "1h" },
      { title: "Cabelo + barba + selante", price: "R$ 260,00", duration: "2h 30min" },
      { title: "Platinado", price: "R$ 250,00", duration: "2h 30min" }
    ],
    "Brutus Estética": [
      { title: "Limpeza de pele", price: "R$ 180,00", duration: "1h 30min" },
      { title: "Mão / pé feminino", price: "R$ 90,00", duration: "1h 30min" },
      { title: "Mão feminina", price: "R$ 45,00", duration: "40min" },
      { title: "Pé feminino", price: "R$ 45,00", duration: "40min" },
      { title: "Unha de fibra", price: "R$ 230,00", duration: "2h" },
      { title: "Esmaltação tradicional", price: "R$ 30,00", duration: "15min" },
      { title: "Manutenção unha de fibra", price: "R$ 150,00", duration: "1h" },
      { title: "Mão / pé masculino", price: "R$ 110,00", duration: "1h" },
      { title: "Pé masculino", price: "R$ 55,00", duration: "30min" },
      { title: "Mão masculina", price: "R$ 55,00", duration: "30min" },
      { title: "Plásticas dos pés", price: "R$ 95,00", duration: "30min" },
      { title: "Massagem relaxante dos pés", price: "R$ 80,00", duration: "15min" },
      { title: "Banho de parafina dos pés", price: "R$ 40,00", duration: "15min" },
      { title: "Esmaltação em gel", price: "R$ 50,00", duration: "30min" },
      { title: "Drenagem linfática", price: "R$ 120,00", duration: "1h" },
      { title: "Massagem modeladora", price: "R$ 150,00", duration: "1h" },
      { title: "Massagem relaxante / com escalda pés", price: "R$ 180,00", duration: "1h 15min" },
      { title: "Sobrancelha na pinça ou cera", price: "R$ 60,00", duration: "30min" },
      { title: "Henna", price: "R$ 40,00", duration: "30min" },
      { title: "Depilação axilas", price: "R$ 60,00", duration: "15min" },
      { title: "Depilação peito / costas", price: "R$ 90,00", duration: "30min" }
    ]
  };

  const categories = Object.keys(categorizedServices);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-gray">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-brand-black"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h5 className="text-brand-gold font-medium mb-4 tracking-widest">SERVIÇOS</h5>
            <h1 className="heading-xl text-white mb-6">
              Experiências exclusivas <br /> Brutus Barbearia
            </h1>
            <p className="text-white/90 md:text-md text-sm">
              Descubra serviços personalizados que transformam sua aparência e revelam sua verdadeira identidade visual com autenticidade e alto padrão.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Nossos Serviços"
            subtitle="Conheça as experiências exclusivas Brutus Barbearia desenvolvidas para valorizar sua identidade"
            center
          />

          {/* Filter Categories */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${activeCategory === category
                  ? "bg-brand-gold text-white"
                  : "bg-black/5 text-gray-700 hover:bg-black/10"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categorizedServices[activeCategory].map((service, index) => (
              <div
                key={index}
                className="border rounded-xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-md font-semibold text-gray-800 pr-2 flex-1">
                    {service.title}
                  </h4>
                  <span className="text-sm text-gray-500 font-normal inline-flex items-center shrink-0 whitespace-nowrap">
                    {service.duration}
                    <Clock className="w-4 h-4 text-gray-500 ml-1" />
                  </span>
                </div>

                <p className="text-brand-gold font-bold mb-4">{service.price}</p>
                <button onClick={handleBooking} className="btn-primary mt-auto w-full">
                  Agendar este serviço
                </button>
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
            Agende seu horário na Brutus Barbearia e vivencie um atendimento exclusivo que valoriza sua essência, eleva sua imagem e reforça sua confiança.
          </p>
          <button onClick={handleBooking} className="btn-primary">
            Agendar seu horário
          </button>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
