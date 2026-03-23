'use client';

import { Star, Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';

const testimonialsConfig = [
    {
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ricardo"
    },
    {
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana"
    },
    {
        rating: 5,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro"
    }
];

export default function Testimonials() {
    const t = useTranslations('Testimonials');

    return (
        <section className="py-24 bg-brand-bg relative overflow-hidden">
            {/* Elementos decorativos de fundo (Aumentada a intensidade e adicionada animação) */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-terracotta/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 animate-slow-zoom pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Cabeçalho */}
                <div className="text-center mb-20">
                    {/* ADICIONADO: font-heading e uppercase */}
                    <h2 className="font-heading text-4xl md:text-6xl font-black text-brand-navy mb-6 uppercase tracking-tight drop-shadow-sm">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Grid de Reviews */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonialsConfig.map((item, index) => (
                        <div
                            key={index}
                            // ADICIONADO: group para interatividade interna, fundo branco puro, sombras coloridas dinâmicas
                            className="bg-white p-10 rounded-3xl relative hover:-translate-y-2 transition-all duration-500 shadow-lg shadow-brand-navy/5 hover:shadow-[0_20px_40px_-15px_rgba(232,119,56,0.2)] border border-gray-100 group"
                        >
                            {/* Ícone de Aspas (Ganha cor no hover) */}
                            <Quote className="absolute top-8 right-8 text-brand-terracotta/10 group-hover:text-brand-terracotta/30 w-12 h-12 rotate-180 transition-colors duration-500" />

                            {/* Estrelas (Sombra amarela para brilho extra) */}
                            <div className="flex gap-1 mb-8">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" />
                                ))}
                            </div>

                            {/* Texto da Review */}
                            <p className="text-gray-600 mb-10 leading-relaxed italic text-lg relative z-10">
                                "{t(`reviews.${index}.content`)}"
                            </p>

                            {/* Autor */}
                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-auto">
                                <div className="w-14 h-14 rounded-full overflow-hidden bg-brand-navy/5 border-2 border-transparent group-hover:border-brand-terracotta/50 transition-colors duration-300">
                                    <img
                                        src={item.image}
                                        alt={t(`reviews.${index}.name`)}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    {/* ADICIONADO: font-heading no nome do autor */}
                                    <h4 className="font-heading text-2xl font-bold text-brand-navy uppercase tracking-wide">
                                        {t(`reviews.${index}.name`)}
                                    </h4>
                                    {/* ADICIONADO: font-heading na role do autor */}
                                    <span className="font-heading text-sm text-brand-terracotta font-bold uppercase tracking-widest">
                                        {t(`reviews.${index}.role`)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botão Google Reviews (Transformado num botão Premium em vez de link de texto) */}
                <div className="text-center mt-16">
                    <a
                        href="https://www.google.com/search?q=Clube+Padel+Caldas+Cr%C3%ADticas"
                        target="_blank"
                        rel="noreferrer"
                        className="font-heading uppercase tracking-widest inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full text-brand-navy font-bold hover:bg-brand-terracotta hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(232,119,56,0.4)] hover:-translate-y-1 border border-gray-100 hover:border-transparent group"
                    >
                        {t('googleLink')}
                        <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </a>
                </div>

            </div>
        </section>
    );
}