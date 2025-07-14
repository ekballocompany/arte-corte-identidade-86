import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Gallery categories
  const categories = ["Todos", "Cortes", "Barbas", "Ambiente", "Brutus Exclusive", "Brutus Visagismo", "Brutus Estética"];
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Toda vez que adicionar uma nova imagem registrar o último id utilizado para não dar merda, qualquer dúvida pergunta para o Breno
  // GALLERYID: 89
  const galleryItems = [
    // Cortes (IDs 1–23)
    { id: 1, image: "./gallery/cortes/IMG_0532.jpg", category: "Cortes" },
    { id: 2, image: "./gallery/cortes/IMG_0783.jpg", category: "Cortes" },
    { id: 3, image: "./gallery/cortes/IMG_999.JPG", category: "Cortes" },
    { id: 4, image: "./gallery/cortes/IMG_1163.JPG", category: "Cortes" },
    { id: 5, image: "./gallery/cortes/IMG_1205.jpg", category: "Cortes" },
    { id: 6, image: "./gallery/cortes/IMG_1322.jpg", category: "Cortes" },
    { id: 7, image: "./gallery/cortes/IMG_1877.jpg", category: "Cortes" },
    { id: 8, image: "./gallery/cortes/IMG_9996.JPG", category: "Cortes" },
    { id: 9, image: "./gallery/cortes/IMG_2086.jpg", category: "Cortes" },
    { id: 10, image: "./gallery/cortes/IMG_2461.jpg", category: "Cortes" },
    { id: 11, image: "./gallery/cortes/IMG_2778.jpg", category: "Cortes" },
    { id: 12, image: "./gallery/cortes/IMG_3630.jpg", category: "Cortes" },
    { id: 13, image: "./gallery/cortes/IMG_4853.jpg", category: "Cortes" },
    { id: 14, image: "./gallery/cortes/IMG_4854.jpg", category: "Cortes" },
    { id: 15, image: "./gallery/cortes/IMG_4862.jpg", category: "Cortes" },
    { id: 16, image: "./gallery/cortes/IMG_7974.jpg", category: "Cortes" },
    { id: 17, image: "./gallery/cortes/IMG_7971.PNG", category: "Cortes" },
    { id: 18, image: "./gallery/cortes/IMG_7972.jpg", category: "Cortes" },
    { id: 19, image: "./gallery/cortes/IMG_8904.JPG", category: "Cortes" },
    { id: 20, image: "./gallery/cortes/IMG_9994.jpeg", category: "Cortes" },
    { id: 21, image: "./gallery/cortes/IMG_9997.jpeg", category: "Cortes" },
    { id: 22, image: "./gallery/cortes/IMG_9995.jpeg", category: "Cortes" },
    { id: 23, image: "./gallery/cortes/IMG_9993.jpeg", category: "Cortes" },
    { id: 24, image: "./gallery/cortes/IMG_1882.jpg", category: "Cortes" },
    { id: 25, image: "./gallery/cortes/IMG_9998.jpeg", category: "Cortes" },

    // Barbas (IDs 26–34)
    { id: 26, image: "./gallery/barbas/IMG_0783.jpg", category: "Barbas" },
    { id: 27, image: "./gallery/barbas/IMG_1205.jpg", category: "Barbas" },
    { id: 28, image: "./gallery/barbas/IMG_1322.jpg", category: "Barbas" },
    { id: 29, image: "./gallery/barbas/IMG_2086.jpg", category: "Barbas" },
    { id: 30, image: "./gallery/barbas/IMG_4508.jpg", category: "Barbas" },
    { id: 31, image: "./gallery/barbas/IMG_4853.jpg", category: "Barbas" },
    { id: 32, image: "./gallery/barbas/IMG_7067.jpg", category: "Barbas" },
    { id: 33, image: "./gallery/barbas/IMG_7971.PNG", category: "Barbas" },
    { id: 34, image: "./gallery/barbas/IMG_8904.JPG", category: "Barbas" },

    // Ambiente (IDs 35–56)
    { id: 35, image: "./gallery/ambiente/IMG_4026.JPG", category: "Ambiente" },
    { id: 36, image: "./gallery/ambiente/IMG_4010.jpg", category: "Ambiente" },
    { id: 37, image: "./gallery/ambiente/IMG_4011.jpeg", category: "Ambiente" },
    { id: 38, image: "./gallery/ambiente/IMG_4049.JPG", category: "Ambiente" },
    { id: 39, image: "./gallery/ambiente/IMG_4063.jpg", category: "Ambiente" },
    { id: 40, image: "./gallery/ambiente/IMG_4404.jpg", category: "Ambiente" },
    { id: 41, image: "./gallery/ambiente/IMG_4763.jpg", category: "Ambiente" },
    { id: 42, image: "./gallery/ambiente/IMG_4784.AVIF", category: "Ambiente" },
    { id: 43, image: "./gallery/ambiente/IMG_4789.AVIF", category: "Ambiente" },
    { id: 44, image: "./gallery/ambiente/IMG_4790.AVIF", category: "Ambiente" },
    { id: 45, image: "./gallery/ambiente/IMG_4796.jpg", category: "Ambiente" },
    { id: 46, image: "./gallery/ambiente/IMG_4800.jpeg", category: "Ambiente" },
    { id: 47, image: "./gallery/ambiente/IMG_4801.jpeg", category: "Ambiente" },
    { id: 48, image: "./gallery/ambiente/IMG_4802.jpeg", category: "Ambiente" },
    { id: 49, image: "./gallery/ambiente/IMG_4803.jpeg", category: "Ambiente" },
    { id: 50, image: "./gallery/ambiente/IMG_4804.jpeg", category: "Ambiente" },
    { id: 51, image: "./gallery/ambiente/IMG_4805.jpeg", category: "Ambiente" },
    { id: 52, image: "./gallery/ambiente/IMG_4806.jpeg", category: "Ambiente" },
    { id: 53, image: "./gallery/ambiente/IMG_4807.jpeg", category: "Ambiente" },
    { id: 54, image: "./gallery/ambiente/IMG_4808.jpeg", category: "Ambiente" },
    { id: 55, image: "./gallery/ambiente/IMG_4809.jpeg", category: "Ambiente" },
    { id: 56, image: "./gallery/ambiente/IMG_4810.jpeg", category: "Ambiente" },
    { id: 57, image: "./gallery/ambiente/IMG_4811.jpg", category: "Ambiente" },

    // Brutus Estética (IDs 58–68)
    { id: 58, image: "./gallery/estetica/IMG_1009.JPG", category: "Brutus Estética" },
    { id: 59, image: "./gallery/estetica/IMG_1010.jpeg", category: "Brutus Estética" },
    { id: 60, image: "./gallery/estetica/IMG_1011.jpeg", category: "Brutus Estética" },
    { id: 61, image: "./gallery/estetica/IMG_1012.jpeg", category: "Brutus Estética" },
    { id: 62, image: "./gallery/estetica/IMG_1013.jpeg", category: "Brutus Estética" },
    { id: 63, image: "./gallery/estetica/IMG_1014.jpeg", category: "Brutus Estética" },
    { id: 64, image: "./gallery/estetica/IMG_1015.jpeg", category: "Brutus Estética" },
    { id: 65, image: "./gallery/estetica/IMG_1016.jpeg", category: "Brutus Estética" },
    { id: 66, image: "./gallery/estetica/IMG_1017.jpeg", category: "Brutus Estética" },
    { id: 67, image: "./gallery/estetica/IMG_1018.jpeg", category: "Brutus Estética" },
    { id: 68, image: "./gallery/estetica/IMG_1019.jpeg", category: "Brutus Estética" },

    // Brutus Exclusive (IDs 69–78)
    { id: 69, image: "./gallery/exclusive/IMG_3903.jpg", category: "Brutus Exclusive" },
    { id: 70, image: "./gallery/exclusive/IMG_4045.JPG", category: "Brutus Exclusive" },
    { id: 71, image: "./gallery/exclusive/IMG_4062.JPG", category: "Brutus Exclusive" },
    { id: 72, image: "./gallery/exclusive/IMG_4063.jpg", category: "Brutus Exclusive" },
    { id: 73, image: "./gallery/exclusive/IMG_4242.jpg", category: "Brutus Exclusive" },
    { id: 74, image: "./gallery/exclusive/IMG_4791.JPG", category: "Brutus Exclusive" },
    { id: 75, image: "./gallery/exclusive/IMG_4854.jpg", category: "Brutus Exclusive" },
    { id: 76, image: "./gallery/exclusive/IMG_4862.jpg", category: "Brutus Exclusive" },
    { id: 77, image: "./gallery/exclusive/IMG_4863.jpeg", category: "Brutus Exclusive" },
    { id: 78, image: "./gallery/exclusive/IMG_4864.jpeg", category: "Brutus Exclusive" },

    // Brutus Visagismo (IDs 79–89)
    { id: 79, image: "./gallery/visagismo/IMG_992.jpeg", category: "Brutus Visagismo" },
    { id: 80, image: "./gallery/visagismo/IMG_1110.jpeg", category: "Brutus Visagismo" },
    { id: 81, image: "./gallery/visagismo/IMG_1111.jpeg", category: "Brutus Visagismo" },
    { id: 82, image: "./gallery/visagismo/IMG_7817.JPG", category: "Brutus Visagismo" },
    { id: 83, image: "./gallery/visagismo/IMG_7974.jpg", category: "Brutus Visagismo" },
    { id: 84, image: "./gallery/visagismo/IMG_7971.PNG", category: "Brutus Visagismo" },
    { id: 85, image: "./gallery/visagismo/IMG_8169.jpg", category: "Brutus Visagismo" },
    { id: 86, image: "./gallery/visagismo/IMG_8178.JPG", category: "Brutus Visagismo" },
    { id: 87, image: "./gallery/visagismo/IMG_9941.JPG", category: "Brutus Visagismo" },
    { id: 88, image: "./gallery/visagismo/IMG_9942.JPG", category: "Brutus Visagismo" },
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
                <div className="aspect-[3/4]">
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
