
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
  const categories = ["Todos", "Cortes", "Barbas", "Ambiente"];
  const [activeCategory, setActiveCategory] = useState("Todos");
  
  // Gallery items with real images
  const galleryItems = [
    // Cortes
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1622296089863-4288be4a1970?q=80&w=1374&auto=format&fit=crop",
      category: "Cortes",
      title: "Corte Moderno"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?q=80&w=1374&auto=format&fit=crop",
      category: "Cortes",
      title: "Corte Clássico"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1374&auto=format&fit=crop",
      category: "Cortes",
      title: "Corte Degradê"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?q=80&w=1170&auto=format&fit=crop",
      category: "Cortes",
      title: "Corte Executivo"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1170&auto=format&fit=crop",
      category: "Cortes",
      title: "Corte Texturizado"
    },
    // Barbas
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1160&auto=format&fit=crop",
      category: "Barbas",
      title: "Barba Completa"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1508770411775-987edc0e3706?q=80&w=1171&auto=format&fit=crop",
      category: "Barbas",
      title: "Barba Curta"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1160&auto=format&fit=crop",
      category: "Barbas",
      title: "Barba com Fade"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1160&auto=format&fit=crop",
      category: "Barbas",
      title: "Barba Afiada"
    },
    // Ambiente
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1170&auto=format&fit=crop",
      category: "Ambiente",
      title: "Salão Premium"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1521405617584-1d9867aecad3?q=80&w=1170&auto=format&fit=crop",
      category: "Ambiente",
      title: "Ambiente Exclusivo"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1608501078713-8e445a709b39?q=80&w=1170&auto=format&fit=crop",
      category: "Ambiente",
      title: "Estação de Trabalho"
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1604687119351-b5b76e413533?q=80&w=1170&auto=format&fit=crop",
      category: "Ambiente",
      title: "Ferramentas do Mestre"
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1622296089172-10b3ec3bd025?q=80&w=1170&auto=format&fit=crop",
      category: "Cortes",
      title: "Corte Personalizado"
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop",
      category: "Cortes",
      title: "Cliente Satisfeito"
    },
    {
      id: 16,
      image: "https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?q=80&w=1170&auto=format&fit=crop",
      category: "Ambiente",
      title: "Experiência Premium"
    }
  ];

  // Filtered items based on active category
  const filteredItems = activeCategory === "Todos" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);
  
  // Instagram feed images
  const instagramImages = [
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584223000634-25aa718ceb6d?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506634064465-7dab4de896ed?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584316712724-f5d4c3033cd4?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599351431005-c3dd80374aee?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=687&auto=format&fit=crop"
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-gray">
        <div className="absolute inset-0 z-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596357395217-80de13130e92?q=80&w=1471&auto=format&fit=crop')" }} 
        ></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h5 className="text-brand-gold font-medium mb-4 tracking-widest">GALERIA</h5>
            <h1 className="heading-xl text-white mb-6">
              Nossa Experiência em Imagens
            </h1>
            <p className="text-white/90 text-lg">
              Conheça nosso trabalho através de uma seleção de fotos que demonstram a qualidade e precisão do nosso visagismo.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Nossa Galeria" 
            subtitle="Explore os resultados do nosso trabalho em visagismo"
            center
          />
          
          {/* Filter Categories */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-brand-gold text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="overflow-hidden rounded-lg group relative cursor-pointer"
              >
                <div className="aspect-square">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <span className="text-brand-gold text-sm uppercase">{item.category}</span>
                    <h3 className="text-xl font-medium">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-brand-beige/30">
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
                  {/* Replace with actual video embed or thumbnail */}
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
      </section>

      {/* Instagram Feed */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Siga-nos no Instagram" 
            subtitle="Acompanhe nosso trabalho diário e novidades"
            center
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
            {instagramImages.map((image, i) => (
              <a 
                key={i}
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="aspect-square rounded-lg overflow-hidden group relative"
              >
                <img 
                  src={image} 
                  alt={`Post do Instagram ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-gold/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Ver mais no Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
