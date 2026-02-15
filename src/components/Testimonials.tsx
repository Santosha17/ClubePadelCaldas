'use client';

import { Star, Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';

// Configuramos apenas os dados visuais (imagens e rating) aqui.
// O texto (Nome, Cargo, Conteúdo) vem do ficheiro pt.json / en.json para permitir tradução.
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
    // 1. Inicializar as traduções
    const t = useTranslations('Testimonials');

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Elementos decorativos de fundo */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-navy/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-terracotta/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Cabeçalho */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-brand-navy mb-4">{t('title')}</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Grid de Reviews */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonialsConfig.map((item, index) => (
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

                            {/* Texto (Traduzido dinamicamente pelo Index) */}
                            {/* O next-intl permite aceder a arrays usando 'reviews.0.content', etc. */}
                            <p className="text-gray-600 mb-8 leading-relaxed italic">
                                "{t(`reviews.${index}.content`)}"
                            </p>

                            {/* Autor */}
                            <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                    <img
                                        src={item.image}
                                        alt={t(`reviews.${index}.name`)}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-navy">{t(`reviews.${index}.name`)}</h4>
                                    <span className="text-xs text-brand-terracotta font-bold uppercase tracking-wider">
                                        {t(`reviews.${index}.role`)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botão Google Reviews */}
                <div className="text-center mt-12">
                    <a
                        href="https://www.google.com/search?q=Clube+Padel+Caldas+Cr%C3%ADticas" // Link simplificado
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-terracotta transition-colors border-b-2 border-brand-navy/10 hover:border-brand-terracotta pb-1"
                    >
                        {t('googleLink')} <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>

            </div>
        </section>
    );
}