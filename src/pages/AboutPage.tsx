
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { Crown, Eye, Scissors, Sparkles } from "lucide-react";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to open boosky
  const handleBooking = () => {
    window.open("https://booksy.com/pt-br/instant-experiences/widget/111533?fbclid=PAZXh0bgNhZW0CMTEAAad1O8G3jmdS30N7BoTKVBTEIakoT5_EVjBI8W4pMEDfPtuMB70mU3zdIIzZMQ_aem_Gz1fHL3qAEaMplFV70IadQ", "_blank");
  };

    // Function to open WhatsApp
  const handleWhatsApp = () => {
    window.open("https://wa.me/5516992832380?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20servi%C3%A7o!%20", "_blank");
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
            <h5 className="text-brand-gold font-medium mb-4 tracking-widest">SOBRE</h5>
            <h1 className="heading-xl text-white">
              Conheça a
            </h1>
            <h1 className="heading-xl text-white mb-6">
              Brutus Barbearia
            </h1>
            <p className="text-white/90 text-sm md:text-md">
              A história e a filosofia por trás do nosso trabalho.
            </p>
          </div>
        </div>
      </section>

      {/* About Brutus */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[500px] rounded-lg overflow-hidden">
              <img
                src="about/brutus_about.jpg"
                alt="Gustavo Ladeira"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <SectionTitle
                title="Sonhar grande, com os pés no chão"
                subtitle="Conheça mais sobre a Brutus Barbearia"
              />

              <p className="text-gray-600 mb-6">
                A Brutus Barbearia nasceu com uma ideia simples e poderosa: valorizar o homem moderno com estilo, respeito e autenticidade. Fundada por Rener de Oliveira, tudo começou com apenas uma cadeira, uma tesoura e uma visão clara de futuro: transformar a experiência de barbearia em algo além do corte — em um momento de cuidado e confiança.
              </p>

              <p className="text-gray-600 mb-6">
                Investimos constantemente em formações, mentorias e especializações, buscando evolução técnica e humana. Aqui, não existem atalhos: há respeito, esforço e paixão pelo que fazemos. A cada cliente que passa pela Brutus, renovamos nosso compromisso com a qualidade, a ética e o estilo.
              </p>

              <p className="text-gray-600 mb-8">
                Durante a pandemia, quando muitos fecharam as portas, a Brutus reformou as ideias. Mesmo em tempos difíceis, acreditamos que os desafios moldam os fortes. Com coragem, repensamos cada detalhe — da fachada ao atendimento — para oferecer mais do que um serviço: uma experiência completa de bem-estar masculino.
              </p>

              <button onClick={handleBooking} className="btn-primary">
                Agendar horário
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Antes e depois */}
      <section className="py-8 bg-brand-beige/30">
        <div className="container-custom">

          <p className="text-center max-w-3xl mx-auto text-gray-800 mb-6">
            Mesmo com poucos recursos, demos o primeiro passo. Reformamos, replanejamos, nos reposicionamos. E ali nasceu uma nova fase da Brutus: mais estruturada, mais profissional, mais alinhada com o sonho que me deu origem: <em>“Eu decidi acreditar. Mesmo em meio ao caos”.</em>
          </p>

          {/* <p className="text-center text-lg sm:text-xl font-medium text-brand-brown mb-8 max-w-3xl mx-auto">
            Mesmo com poucos recursos, eu dei o primeiro passo. Reformei, replanejei, me reposicionei. Naquele momento, nasceu uma nova fase da Brutus: mais estruturada, mais profissional, mais alinhada com o sonho que me deu origem.<em>“Eu decidi acreditar. Mesmo em meio ao caos”.</em>
          </p> */}

          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Imagem Antes */}
            <div className="relative w-full sm:w-[40%] aspect-[4/3]">
              <img
                src="about/brutos_antes.jpeg"
                alt="Antes"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2 rounded-b-lg text-sm">
                Antes
              </div>
            </div>

            {/* Imagem Depois */}
            <div className="relative w-full sm:w-[40%] aspect-[4/3]">
              <img
                src="about/brutos_depois.jpeg"
                alt="Depois"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2 rounded-b-lg text-sm">
                Depois
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-dense">

            <div className="lg:col-start-2">
              <div className="h-[650px] rounded-lg overflow-hidden">
                <img
                  src="about/renner.jpeg"
                  alt="Renner no Barber Day University"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-start-1">
              <SectionTitle
                title="Inovar com os pés no chão"
                subtitle="Resiliência, liderança e propósito"
              />

              <p className="text-gray-600 mb-6">
                Desde o início, Rener de Oliveira entendeu que crescer exigia aprendizado constante. Ele foi atrás de cursos, mentorias e estratégias sólidas para conquistar mais clientes e reinvestir na Brutus Barbearia.
              </p>

              <p className="text-gray-600 mb-6">
                Após uma grande expansão — com estrutura nova e quatro cadeiras — enfrentou um dos maiores desafios de sua jornada: a saída repentina de toda a equipe. Foi nesse momento que ele descobriu sua força e resiliência. Recomeçou, contratou novamente e reconstruiu a cultura da empresa do zero.
              </p>

              <p className="text-gray-600 mb-6">
                “Deus tem colocado pessoas incríveis no meu caminho”, afirma Rener. “Gente de valor, que acredita na Brutus e tem sido essencial para o nosso crescimento”.
              </p>

              <p className="text-gray-600 mb-8">
                Um de seus maiores aprendizados foi entender a diferença entre ser amigo e ser líder. Hoje, ele reconhece que liderar também é proteger o sonho, sustentar a cultura e estabelecer limites para garantir o respeito e o crescimento coletivo.
              </p>

              <blockquote className="border-l-4 border-brand-gold pl-4 italic text-gray-700">
                "O segredo? Sonhar grande, mas com os pés no chão."
              </blockquote>
            </div>
          </div>
        </div>
      </section>


      <section className="section-padding bg-brand-beige/30">
        <div className="container-custom">
          <SectionTitle
            title="Nossa Expertise"
            subtitle="Áreas de especialização do nosso trabalho"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

            {/* Brutus Barbearia Convencional */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Scissors className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="heading-sm mb-4">Brutus Barbearia</h3>
              <p className="text-gray-600">
                Nossa unidade tradicional, referência em cortes masculinos, atendimento acolhedor e ambiente pensado para o bem-estar do homem moderno.
              </p>
            </div>
            {/* Brutus Exclusive */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Crown className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="heading-sm mb-4">Brutus Exclusive</h3>
              <p className="text-gray-600">
                Um espaço premium que oferece experiências exclusivas, com serviços personalizados e foco total no conforto e na sofisticação.
              </p>
            </div>

            {/* Brutus Visagismo */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="heading-sm mb-4">Brutus Visagismo</h3>
              <p className="text-gray-600">
                Técnica avançada que une arte e ciência para transformar aparência em identidade, considerando traços, personalidade e estilo de vida.
              </p>
            </div>

            {/* Brutus Estética */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="heading-sm mb-4">Brutus Estética</h3>
              <p className="text-gray-600">
                Cuidados com a pele, limpeza facial e outros tratamentos estéticos pensados para o homem que valoriza saúde, imagem e autocuidado.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="section-padding bg-brand-gray text-white">
        <div className="container-custom">
          <SectionTitle
            title="O que nossos clientes dizem"
            subtitle="Experiências compartilhadas por quem confia no nosso trabalho"
            center
            light
          />

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div>
                      <p className="text-sm text-gray-400">Wesley</p>
                    </div>
                  </div>
                  <div className="text-brand-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 2.075-2.075v-7.024a2.075 2.075 0 0 0-2.075-2.075h-6.852a2.075 2.075 0 0 0-2.075 2.075v7.024a2.075 2.075 0 0 0 2.075 2.075zM12.999 11.025 8.574 18.924h2.999l3.426-7.899h-2z" />
                    </svg>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">
                  "O trabalho do Gustavo vai muito além de um simples corte. Ele realmente entende como valorizar cada característica do rosto. Saio sempre com mais confiança e recebendo elogios."
                </p>

                <div className="flex text-brand-gold">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div> */}
          <TestimonialsCarousel />

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Pronto para conhecer a Brutus Barbearia?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Agende seu horário na Brutus Barbearia e descubra o poder de um atendimento que transforma sua aparência, valoriza seu estilo e realça sua personalidade.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={handleWhatsApp} className="btn-primary">
              Agendar pelo WhatsApp
            </button>
            <Link to="/servicos" className="btn-secondary">
              Conhecer serviços
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
