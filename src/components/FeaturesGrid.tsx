'use client';

import { Link } from '@/navigation';
import { Trophy, Dumbbell, Beer, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion, Variants } from 'framer-motion';

export default function FeaturesGrid() {
    const t = useTranslations('Services');

    // Definimos as variantes com o tipo 'Variants' para resolver os erros de TypeScript (TS2322)
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-24 px-6 bg-brand-bg scroll-mt-20" id="servicos">
            <div className="container mx-auto">
                {/* Cabeçalho */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-brand-terracotta font-bold tracking-widest uppercase text-sm">
                        {t('label')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mt-3">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-1 bg-brand-terracotta mx-auto mt-6 rounded-full"></div>
                </motion.div>

                {/* Grid de Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-12"
                >
                    {/* Card 1: Aluguer */}
                    <motion.a
                        variants={itemVariants}
                        href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col relative overflow-hidden"
                    >
                        <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-terracotta transition-colors">
                            <Trophy className="text-brand-navy group-hover:text-white w-8 h-8 transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                            {t('cards.rent.title')}
                            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-terracotta" />
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            {t('cards.rent.description')}
                        </p>
                        <span className="text-brand-terracotta font-bold text-sm uppercase tracking-wider mt-auto">
                            {t('cards.rent.cta')} &rarr;
                        </span>
                    </motion.a>

                    {/* Card 2: Academia */}
                    <motion.div variants={itemVariants}>
                        <Link
                            href="#precos"
                            className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group mt-0 md:-mt-8 flex flex-col relative overflow-hidden ring-4 ring-transparent hover:ring-brand-terracotta/10 h-full"
                        >
                            <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-terracotta transition-colors">
                                <Dumbbell className="text-brand-navy group-hover:text-white w-8 h-8 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                                {t('cards.academy.title')}
                                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-terracotta" />
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {t('cards.academy.description')}
                            </p>
                            <span className="text-brand-terracotta font-bold text-sm uppercase tracking-wider mt-auto">
                                {t('cards.academy.cta')} &rarr;
                            </span>
                        </Link>
                    </motion.div>

                    {/* Card 3: Bar & Loja */}
                    <motion.div variants={itemVariants}>
                        <Link
                            href="/contactos"
                            className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col relative overflow-hidden h-full"
                        >
                            <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-terracotta transition-colors">
                                <Beer className="text-brand-navy group-hover:text-white w-8 h-8 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                                {t('cards.bar.title')}
                                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-terracotta" />
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {t('cards.bar.description')}
                            </p>
                            <span className="text-brand-terracotta font-bold text-sm uppercase tracking-wider mt-auto">
                                {t('cards.bar.cta')} &rarr;
                            </span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}