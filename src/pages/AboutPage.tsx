
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to open WhatsApp
  const handleBooking = () => {
    window.open("https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20um%20horário", "_blank");
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

      {/* About Gustavo */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[500px] rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7697671/pexels-photo-7697671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Gustavo Ladeira"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <SectionTitle
                title="Gustavo Ladeira"
                subtitle="Visagista e especialista em cortes masculinos"
              />

              <p className="text-gray-600 mb-6">
                Com mais de 10 anos de experiência no universo da beleza masculina, Gustavo Ladeira construiu sua carreira focada na arte do visagismo. Sua jornada começou com uma formação tradicional em barbearia, mas logo se expandiu para uma abordagem mais sofisticada e personalizada.
              </p>

              <p className="text-gray-600 mb-6">
                Formado em visagismo pela renomada Academia Internacional de Estética, Gustavo também possui especializações em cortes europeus e técnicas avançadas de barba. Sua constante busca por aperfeiçoamento o levou a workshops e cursos internacionais, trazendo para seus clientes o que há de mais atual nas tendências mundiais.
              </p>

              <p className="text-gray-600 mb-8">
                "Cada rosto carrega uma história. O corte deve contá-la." Esta filosofia norteia todo o trabalho de Gustavo, que acredita que o visagismo vai muito além da estética – é uma forma de expressão da identidade e personalidade de cada homem.
              </p>

              <button onClick={handleBooking} className="btn-primary">
                Agendar horário
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-brand-beige/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-dense">
            <div className="lg:col-start-2">
              <div className="h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Filosofia de trabalho"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-start-1">
              <SectionTitle
                title="Nossa Filosofia"
                subtitle="A abordagem que torna nosso trabalho único"
              />

              <p className="text-gray-600 mb-6">
                O visagismo é uma ciência e uma arte que estuda a relação entre as características físicas e a personalidade de uma pessoa, harmonizando-as através de técnicas específicas. No nosso trabalho, valorizamos:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center mr-4 mt-1">
                    <span className="text-brand-gold font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Personalização</h4>
                    <p className="text-gray-600">Cada cliente recebe um atendimento exclusivo, com análise detalhada de suas características faciais e estilo pessoal.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center mr-4 mt-1">
                    <span className="text-brand-gold font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Precisão técnica</h4>
                    <p className="text-gray-600">Utilizamos técnicas avançadas e ferramentas de alta qualidade para garantir cortes impecáveis e duradouros.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center mr-4 mt-1">
                    <span className="text-brand-gold font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Equilíbrio e harmonia</h4>
                    <p className="text-gray-600">Buscamos o equilíbrio perfeito entre as características naturais do cliente e o estilo desejado, criando uma harmonia visual única.</p>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-brand-gold pl-4 italic text-gray-700">
                "O visagismo não é apenas sobre aparência, mas sobre revelar quem você realmente é através da sua imagem."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Nossa Expertise"
            subtitle="Áreas de especialização do nosso trabalho"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="heading-sm mb-4">Visagismo Avançado</h3>
              <p className="text-gray-600">
                Aplicamos técnicas avançadas de visagismo que consideram não apenas o formato do rosto, mas também a personalidade e estilo de vida do cliente.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="heading-sm mb-4">Técnicas Internacionais</h3>
              <p className="text-gray-600">
                Dominamos técnicas de corte e barba de diferentes partes do mundo, adaptando-as para atender às necessidades específicas dos clientes brasileiros.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-brand-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="heading-sm mb-4">Consultoria de Imagem</h3>
              <p className="text-gray-600">
                Oferecemos orientação completa sobre como manter e valorizar sua imagem pessoal, incluindo recomendações de produtos e cuidados diários.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src="/placeholder.svg"
                        alt={`Cliente ${item}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Cliente {item}</h4>
                      <p className="text-sm text-gray-400">Cliente desde 202{item}</p>
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
          </div>
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
            <button onClick={handleBooking} className="btn-primary">
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
