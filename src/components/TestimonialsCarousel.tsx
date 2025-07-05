import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const testimonials = [
    {
        nome: "Wesley",
        mensagem: "O Rener simplesmente mudou meu visual e deixou 100% como eu queria, natural, visagista e muito técnico, corte impecável e personalizado. Conhecimento absurdo na área. Hoje só confio na equipe Brutus!"
    },
    {
        nome: "Matheus M.",
        mensagem: "Excelente atendimento realizado pelo profissional Gustavo Ladeira! Há tempos queria fazer algo de diferente no meu cabelo e optei por um corte Old Money, o resultado ficou incrível, superou todas as minhas expectativas! O ambiente da barbearia é agradável, com ótima estrutura e climatização."
    },
    {
        nome: "Mário Z",
        mensagem: "Fui a primeira vez no dia 01/03/25, local é incrível, ambiente agradável, profissionais ótimos, facilidade de uso do aplicativo para agendamento, já virei cliente fiel com certeza! Obrigado pessoal! Muito Sucesso!"
    },
    {
        nome: "Mara S",
        mensagem: "Nosso filho de 7 anos corta o cabelo no salão, desde que tem 3 anos- É o único local que ele gosta de cortar e aceita. Somos fãs do local pois o atendimento é muito gentil. "
    },
    {
        nome: "José Luís",
        mensagem: "Local muito top. Profissionalismo incrível. Recomendo."
    },
    {
        nome: "Carlos H",
        mensagem: "Sempre muito educado, prestativo e com serviço de qualidade."
    },
    {
        nome: "Rodrigo R",
        mensagem: "Primeira vez na barbearia e com Jocelio baita atendimento e cuidado no primeiro corte... Top demais"
    },
    {
        nome: "Eduardo",
        mensagem: "Ótimos profissionais, ambiente diferenciado e atendimento de ótima qualidade."
    },
    {
        nome: "Fabrício F",
        mensagem: "Facilidade para agendar horário. Ótimo atendimento. Ótima qualidade no serviço prestado."
    }
]

export function TestimonialsCarousel() {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 16,
        },
        breakpoints: {
            '(max-width: 1024px)': {
                slides: { perView: 2, spacing: 16 },
            },
            '(max-width: 640px)': {
                slides: { perView: 1, spacing: 12 },
            },
        },
        loop: true,
    })

    return (
        <section className="bg-brand-dark">
            <div className="container-custom">
                <div ref={sliderRef} className="keen-slider">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="keen-slider__slide bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 shadow-md flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <p className="text-sm text-gray-400">{item.nome}</p>
                                    <div className="text-brand-gold">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 2.075-2.075v-7.024a2.075 2.075 0 0 0-2.075-2.075h-6.852a2.075 2.075 0 0 0-2.075 2.075v7.024a2.075 2.075 0 0 0 2.075 2.075zM12.999 11.025 8.574 18.924h2.999l3.426-7.899h-2z" />
                                        </svg>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-6">"{item.mensagem}"</p>
                            </div>

                            <div className="flex text-brand-gold mt-auto">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <div className="animate-arrow-move text-brand-gold">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                </div>

            </div>
        </section>
    )
}
