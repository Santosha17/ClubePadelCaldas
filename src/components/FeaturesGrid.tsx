'use client';

import { useState, useRef, useEffect } from 'react';
import { Link } from '@/navigation';
import { Trophy, Dumbbell, Beer, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { m, LazyMotion, domAnimation, AnimatePresence, Variants } from 'framer-motion';

export default function FeaturesGrid() {
    const t = useTranslations('Services');

    const [isDrunk, setIsDrunk] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // OTIMIZAÇÃO: Limpeza de memória no unmount
    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const triggerDrunkenStory = () => {
        if (!isDrunk) {
            try {
                if (!audioRef.current) {
                    audioRef.current = new Audio('/sounds/beer.mp3');
                    audioRef.current.volume = 0.4;
                }
                audioRef.current.currentTime = 0;
                audioRef.current.play().catch(() => null);
            } catch (e) { /* ignore */ }
        }

        if (timerRef.current) clearTimeout(timerRef.current);
        setIsDrunk(true);

        timerRef.current = setTimeout(() => setIsDrunk(false), 10000);
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 } // Mais rápido para libertar a thread
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 15 }, // Movimento menor = menos cálculo de layout
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    return (
        <LazyMotion features={domAnimation}>
            <section className="py-24 px-6 bg-brand-bg scroll-mt-20" id="servicos">
                <div className="container mx-auto">
                    {/* Cabeçalho Otimizado */}
                    <m.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-20"
                    >
                        <span className="text-brand-terracotta font-bold tracking-widest uppercase text-sm italic">
                            {t('label')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mt-3">
                            {t('title')}
                        </h2>
                        <div className="w-16 h-1 bg-brand-terracotta mx-auto mt-6 rounded-full"></div>
                    </m.div>

                    <m.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid md:grid-cols-3 gap-8 lg:gap-12"
                    >
                        {/* Card 1: Aluguer */}
                        <m.a
                            variants={itemVariants}
                            href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col relative overflow-hidden"
                        >
                            <div className="w-14 h-14 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-terracotta transition-colors">
                                <Trophy className="text-brand-navy group-hover:text-white w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                                {t('cards.rent.title')}
                                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-terracotta" />
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                                {t('cards.rent.description')}
                            </p>
                            <span className="text-brand-terracotta font-bold text-sm uppercase tracking-wider mt-auto">
                                {t('cards.rent.cta')} &rarr;
                            </span>
                        </m.a>

                        {/* Card 2: Academia */}
                        <m.div variants={itemVariants} className="h-full">
                            <Link
                                href="#precos"
                                className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col relative overflow-hidden h-full"
                            >
                                <div className="w-14 h-14 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-terracotta transition-colors">
                                    <Dumbbell className="text-brand-navy group-hover:text-white w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                                    {t('cards.academy.title')}
                                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-terracotta" />
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                                    {t('cards.academy.description')}
                                </p>
                                <span className="text-brand-terracotta font-bold text-sm uppercase tracking-wider mt-auto">
                                    {t('cards.academy.cta')} &rarr;
                                </span>
                            </Link>
                        </m.div>

                        {/* Card 3: Bar (Easter Egg) */}
                        <m.div
                            variants={itemVariants}
                            className={`bg-white p-8 lg:p-10 rounded-3xl shadow-sm transition-all duration-500 border border-gray-100 group flex flex-col relative overflow-hidden h-full ${
                                isDrunk ? 'border-brand-terracotta/40 ring-4 ring-brand-terracotta/10 scale-[1.02]' : ''
                            }`}
                        >
                            <AnimatePresence>
                                {isDrunk && (
                                    <>
                                        <m.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 bg-yellow-400/5 pointer-events-none z-0"
                                        />
                                        {[...Array(3)].map((_, i) => ( // Reduzi para apenas 3 bolhas (DOM muito mais leve)
                                            <m.div
                                                key={i}
                                                initial={{ y: 20, x: i * 30, opacity: 0 }}
                                                animate={{ y: -300, opacity: [0, 0.5, 0] }}
                                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                                                className="absolute bottom-0 w-1.5 h-1.5 bg-yellow-600/20 rounded-full z-0"
                                            />
                                        ))}
                                    </>
                                )}
                            </AnimatePresence>

                            <button
                                onClick={triggerDrunkenStory}
                                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all z-10 ${
                                    isDrunk ? 'bg-brand-terracotta text-white' : 'bg-brand-navy/5 text-brand-navy'
                                }`}
                            >
                                <Beer className={`w-7 h-7 ${isDrunk ? 'animate-pulse' : ''}`} />
                            </button>

                            <div className="flex-grow z-10">
                                <AnimatePresence mode="wait">
                                    {!isDrunk ? (
                                        <m.div key="normal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            <h3 className="text-2xl font-bold text-brand-navy mb-4">{t('cards.bar.title')}</h3>
                                            <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">{t('cards.bar.description')}</p>
                                            <Link href="/contactos" className="text-brand-terracotta font-bold text-sm uppercase tracking-wider">{t('cards.bar.cta')} &rarr;</Link>
                                        </m.div>
                                    ) : (
                                        <m.div key="drunk" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                                            <h3 className="text-lg font-black text-brand-terracotta mb-2 uppercase">Hic! 🥴</h3>
                                            <p className="text-brand-navy text-xs lg:text-sm italic mb-6 leading-relaxed bg-white/60 p-3 rounded-xl border border-brand-terracotta/10">
                                                "O nosso Hino nasceu aqui mesmo, depois de uma <span className="text-brand-terracotta font-bold">BUBEDEIRA</span> histórica!"
                                            </p>
                                            <Link href="/hino" className="block text-center bg-brand-terracotta text-white py-3 rounded-xl font-bold text-xs uppercase shadow-md transition-transform hover:scale-105">
                                                🎶 Ouvir a obra
                                            </Link>
                                        </m.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </m.div>
                    </m.div>
                </div>
            </section>
        </LazyMotion>
    );
}