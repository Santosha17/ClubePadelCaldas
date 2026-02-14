import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

// Dados fictícios (podes depois trocar por reviews reais do Google/Facebook)
const testimonials = [
    {
        name: "Marcelo Pasco",
        role: "Jogador Social",
        content: "Excelente infraestrutura para a prática de Padel campos em excelente condições de utilização. Ambiente familiar e agradável, pode-se conviver ver bons jogos de padel. Equipa técnica 5 estrelas ,pode-se beber uma bebida têm as melhores tostas mistas da\n" +
            "região e arredores.",
        rating: 5,
        // Podes usar uma foto real ou um placeholder
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ricardo"
    },
    {
        name: "Ana Martins",
        role: "Aluna",
        content: "Comecei a ter aulas há 3 meses e a evolução é notória. Os treinadores são super atenciosos e o ambiente é muito familiar.",
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana"
    },
    {
        name: "Pedro Costa",
        role: "Jogador Social",
        content: "Campos de topo e o bar tem uma vista fantástica para os jogos. O melhor spot para o pós-jogo com a malta.",
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Elementos decorativos de fundo */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-navy/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-terracotta/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Cabeçalho */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-brand-navy mb-4">A voz dos nossos atletas</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        A comunidade do Clube Padel Caldas não para de crescer. Vê o que dizem sobre nós.
                    </p>
                </div>

                {/* Grid de Reviews */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-3xl relative hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg border border-gray-100"
                        >
                            {/* Ícone de Aspas */}
                            <Quote className="absolute top-8 right-8 text-brand-terracotta/20 w-10 h-10 rotate-180" />

                            {/* Estrelas */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Texto */}
                            <p className="text-gray-600 mb-8 leading-relaxed italic">
                                "{item.content}"
                            </p>

                            {/* Autor */}
                            <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                    {/* Nota: Estou a usar uma API de avatars para exemplo.
                        Se usares fotos reais, usa o componente <Image /> do Next.js */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-navy">{item.name}</h4>
                                    <span className="text-xs text-brand-terracotta font-bold uppercase tracking-wider">{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botão Google Reviews (Opcional) */}
                <div className="text-center mt-12">
                    <a
                        href="https://www.google.com/search?num=10&sca_esv=9459100d7edd2511&sxsrf=ANbL-n7w_pKBCywsAxZ0Jkx1Nvvn57VuYA:1771072768891&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-KQKv-IpR8SjFSqSJ6DYAcBJrNGN76hEhcij5vtyJK5G819CvV7Fm_PL4iEo4-poGIIGvYM76ndqEO1j3kcjtbj0d3egQGssIXsuJijLrtJABTNEV9iN1EdzcLyNP69mnNlnZU-onRo9oTkdYelclryMH4KA&q=Clube+Padel+Caldas+Cr%C3%ADticas&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWmPCZsDiiV7A0ZvEmAcMw_EVaAMbwG4E1WTX_bh0tl3xsnSEWqEPuf7KpKjCkTUneV_lqbbiuWr6Sk1GeeK6pCOGlTmITqSrSQ8cKHM2B9vC_DjKQ%3D%3D&hl=pt-PT&sa=X&ved=2ahUKEwicjouagNmSAxUsRPEDHU-dE4MQ_4MLegQIWBAO&biw=1869&bih=896&dpr=1"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-terracotta transition-colors border-b-2 border-brand-navy/10 hover:border-brand-terracotta pb-1"
                    >
                        Ver todas as reviews no Google <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>

            </div>
        </section>
    );
}