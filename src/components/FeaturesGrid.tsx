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
                    audioRef.current.volume = 0.5;
                }
                audioRef.current.currentTime = 0;
                audioRef.current.play().catch(() => null);
            } catch (e) { /* ignore */ }
        }

        if (timerRef.current) clearTimeout(timerRef.current);
        setIsDrunk(true);

        timerRef.current = setTimeout(() => setIsDrunk(false), 10000);
    };

    // --- VARIANTES ORIGINAIS RESTAURADAS ---
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2 // Stagger original mais elegante
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 }, // Movimento original de 30px
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <LazyMotion features={domAnimation}>
            <section className="py-24 px-6 bg-brand-bg scroll-mt-20" id="servicos">
                <div className="container mx-auto">
                    {/* Cabeçalho */}
                    <m.div
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
                    </m.div>

                    <m.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-3 gap-12"
                    >
                        {/* Card 1: Aluguer */}
                        <m.a
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
                        </m.a>

                        {/* Card 2: Academia */}
                        <m.div variants={itemVariants} className="h-full">
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
                        </m.div>

                        {/* Card 3: Bar & Loja (Easter Egg) */}
                        <m.div
                            variants={itemVariants}
                            className={`bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col relative overflow-hidden h-full ${
                                isDrunk ? 'border-brand-terracotta/50 ring-4 ring-brand-terracotta/20 scale-105 z-20' : ''
                            }`}
                            animate={isDrunk ? {
                                rotate: [0, -2, 2, -1, 1, 0],
                                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                            } : {}}
                        >
                            {/* BOLHAS E FUNDO LÍQUIDO ORIGINAIS */}
                            <AnimatePresence>
                                {isDrunk && (
                                    <>
                                        <m.div
                                            initial={{ height: "0%" }}
                                            animate={{ height: "100%" }}
                                            exit={{ height: "0%" }}
                                            transition={{ duration: 2, ease: "easeInOut" }}
                                            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-yellow-400/20 to-transparent pointer-events-none z-0"
                                        />
                                        {[...Array(10)].map((_, i) => ( // Restaurado para 10 bolhas
                                            <m.div
                                                key={i}
                                                initial={{ bottom: -20, left: `${Math.random() * 100}%`, opacity: 0 }}
                                                animate={{
                                                    bottom: "120%",
                                                    opacity: [0, 1, 0],
                                                    x: Math.random() * 40 - 20
                                                }}
                                                transition={{
                                                    duration: 2 + Math.random() * 2,
                                                    repeat: Infinity,
                                                    delay: Math.random() * 2,
                                                    ease: "linear"
                                                }}
                                                className="absolute w-2 h-2 bg-yellow-500/40 rounded-full z-0 pointer-events-none"
                                            />
                                        ))}
                                    </>
                                )}
                            </AnimatePresence>

                            <button
                                onClick={triggerDrunkenStory}
                                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 z-10 cursor-pointer ${
                                    isDrunk
                                        ? 'bg-brand-terracotta text-white scale-125 rotate-12 shadow-xl'
                                        : 'bg-brand-navy/5 text-brand-navy group-hover:bg-brand-terracotta group-hover:text-white'
                                }`}
                            >
                                <Beer className={`w-8 h-8 transition-colors ${isDrunk ? 'animate-bounce' : ''}`} />
                            </button>

                            <div className="flex-grow z-10 flex flex-col relative">
                                <AnimatePresence mode="wait">
                                    {!isDrunk ? (
                                        <m.div key="normal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col h-full">
                                            <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                                                {t('cards.bar.title')}
                                                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-terracotta" />
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-4">
                                                {t('cards.bar.description')}
                                            </p>
                                            <Link href="/contactos" className="text-brand-terracotta font-bold text-sm uppercase tracking-wider mt-auto inline-block">
                                                {t('cards.bar.cta')} &rarr;
                                            </Link>
                                        </m.div>
                                    ) : (
                                        <m.div key="drunk" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col h-full">
                                            <h3 className="text-xl font-black uppercase tracking-wider text-brand-terracotta mb-2 flex items-center gap-2">
                                                Hic! Segredo... 🥴
                                            </h3>
                                            <p className="text-brand-navy font-medium leading-relaxed italic mb-6 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-brand-terracotta/20 text-sm shadow-inner">
                                                "O nosso Hino não foi escrito por poetas... nasceu aqui mesmo, depois de uma <span className="text-brand-terracotta font-black">BUBEDEIRA</span> histórica! Verdade!"
                                            </p>
                                            <Link href="/hino" className="text-white bg-brand-terracotta px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider mt-auto inline-block text-center hover:bg-brand-navy transition-all shadow-lg hover:shadow-brand-terracotta/40 transform hover:-translate-y-1">
                                                🎶 Ouvir a "Obra de Arte"
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