'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useTranslations } from 'next-intl';
// Importamos o Framer Motion para a animação suave
import { motion, AnimatePresence } from 'framer-motion';

export const runtime = 'edge';

export default function FAQ() {
    const t = useTranslations('FAQ');
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // Mapeamos os índices das 6 perguntas que tens no pt.json
    const questionIndices = [0, 1, 2, 3, 4, 5];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-gray-50 scroll-mt-20" id="faq">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Cabeçalho */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-terracotta font-bold tracking-widest uppercase text-sm">
                        {t('label')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">
                        {t('title')}
                    </h2>
                </motion.div>

                {/* Lista de FAQs */}
                <div className="space-y-4">
                    {questionIndices.map((index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-white rounded-2xl border transition-all duration-300 ${
                                    isOpen
                                        ? 'border-brand-terracotta shadow-lg ring-1 ring-brand-terracotta/20'
                                        : 'border-gray-200 hover:border-brand-terracotta/50'
                                }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-brand-terracotta' : 'text-brand-navy'}`}>
                                        {t(`questions.${index}.q`)}
                                    </span>
                                    <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-brand-terracotta text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <p className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                                {t(`questions.${index}.a`)}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}