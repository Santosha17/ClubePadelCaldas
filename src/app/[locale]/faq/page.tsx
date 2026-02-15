'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const runtime = 'edge';

export default function FAQ() {
    // 2. Inicializar as traduções
    const t = useTranslations('FAQ');
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // 3. Criar um array para iterar com base no número de perguntas no JSON
    // Assumindo as 6 perguntas padrão
    const questionIndices = [0, 1, 2, 3, 4, 5];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-gray-50" id="faqs">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Cabeçalho Traduzido */}
                <div className="text-center mb-16">
                    <span className="text-brand-terracotta font-bold tracking-widest uppercase text-sm">
                        {t('label')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
                        {t('title')}
                    </h2>
                </div>

                {/* Lista de FAQs Dinâmica */}
                <div className="space-y-4">
                    {questionIndices.map((index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl border transition-all duration-300 ${
                                openIndex === index
                                    ? 'border-brand-terracotta shadow-lg ring-1 ring-brand-terracotta/20'
                                    : 'border-gray-200 hover:border-brand-terracotta/50'
                            }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-terracotta' : 'text-brand-navy'}`}>
                                    {t(`questions.${index}.q`)}
                                </span>
                                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-brand-terracotta text-white' : 'bg-gray-100 text-gray-500'}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                                    {t(`questions.${index}.a`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}