import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { AspectRatio } from "../components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../components/ui/carousel";

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Gallery categories
  const categories = ["Todos", "Cortes", "Barbas", "Ambiente", "Brutus Exclusive", "Brutus Visagismo",  "Brutus Estética"];
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Updated gallery items with carefully selected dark theme images
  const galleryItems = [
    // Cortes
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1662123844664-7235ecbb4e53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Cortes"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2070",
      category: "Cortes"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070",
      category: "Cortes"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074",
      category: "Cortes"
    },
    // Barbas
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070",
      category: "Barbas"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070",
      category: "Barbas"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=2076",
      category: "Barbas"
    },
    // Ambiente
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1521322714240-ee1d383eab62?q=80&w=2070",
      category: "Ambiente"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Ambiente"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2074",
      category: "Ambiente"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1705976063063-af7d6b9a4083?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Ambiente"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=2070",
      category: "Ambiente"
    },
    // Brutus Estética
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=2070",
      category: "Brutus Estética"
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=2070",
      category: "Brutus Estética"
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=2070",
      category: "Brutus Estética"
    },
    // Brutus Exclusive
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=2070",
      category: "Brutus Exclusive"
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=2070",
      category: "Brutus Exclusive"
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=2070",
      category: "Brutus Exclusive"
    },
    // Brutus Visagismo
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=2070",
      category: "Brutus Visagismo"
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=2070",
      category: "Brutus Visagismo"
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=2070",
      category: "Brutus Visagismo"
    },
  ];

  // Filtered items based on active category
  const filteredItems = activeCategory === "Todos"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      {/* Hero Section com nova imagem dark */}
      <section className="relative pt-32 pb-20 bg-brand-gray">
        {/* <div className="absolute inset-0 z-0 bg-black/40"></div> */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-brand-black"
        // style={{ backgroundImage: "Deixei a cor em preto / sem imagem mesmo" }}
        ></div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h5 className="text-brand-gold font-medium mb-4 tracking-widest">GALERIA</h5>
            <h1 className="heading-xl text-white mb-6">
              Nossa Experiência em Imagens
            </h1>
            <p className="text-white/90 text-sm md:text-md">
              Conheça nosso trabalho através de uma seleção de fotos que demonstram a qualidade e precisão dos nossos serviços.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section - Ajustado para visual mais dark */}
      <section className="section-padding bg-brand-gray/5">
        <div className="container-custom">
          <SectionTitle
            title="Nossa Galeria"
            subtitle="Explore os resultados do nosso trabalho"
            center
          />

          {/* Filter Categories - Estilo ajustado */}
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

          {/* Gallery Grid - Visual aprimorado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-lg group relative shadow-lg"
              >
                <div className="aspect-square">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <span className="text-brand-gold text-sm uppercase">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      {/* <section className="section-padding bg-brand-beige/30">
        <div className="container-custom">
          <SectionTitle 
            title="Nossos Vídeos" 
            subtitle="Assista a momentos que mostram nossa técnica em ação"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[1, 2].map((item) => (
              <div key={item} className="rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video bg-gray-200 relative">
                  <img 
                    src={item === 1 
                      ? "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1171&auto=format&fit=crop" 
                      : "https://images.unsplash.com/photo-1582893561942-d61adcb2e534?q=80&w=1160&auto=format&fit=crop"
                    }
                    alt={`Vídeo demonstrativo ${item}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-gold/90 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white ml-1">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="heading-sm mb-2">Técnica de Visagismo {item}</h3>
                  <p className="text-gray-600">
                    Veja como aplicamos nossa técnica especializada em visagismo para criar um visual que destaca as características naturais do cliente.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

    </>
  );
};

export default GalleryPage;
