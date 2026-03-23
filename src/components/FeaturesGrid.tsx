'use client';

import { useState, useRef, useEffect } from 'react';
import { Link } from '@/navigation';
import { Trophy, Dumbbell, Beer, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { m, LazyMotion, domAnimation, AnimatePresence, Variants } from 'framer-motion';

export default function FeaturesGrid() {
    const t = useTranslations('Services');

    // --- ESTADOS DO EASTER EGG (BAR) ---
    const [isDrunk, setIsDrunk] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    const clickCountRef = useRef(0);
    const resetTimerRef = useRef<NodeJS.Timeout | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        return () => {
            if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
            if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
        };
    }, []);

    const triggerDrunkenStory = () => {
        try {
            if (!audioRef.current) {
                audioRef.current = new Audio('/sounds/beer.mp3');
                audioRef.current.volume = 0.5;
            }
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => null);
        } catch (e) { }

        setIsDrunk(true);

        setTimeout(() => {
            setIsDrunk(false);
            clickCountRef.current = 0;
        }, 10000);
    };

    const handleBeerClick = () => {
        if (isDrunk) return;

        clickCountRef.current += 1;

        setIsClicking(true);
        setTimeout(() => setIsClicking(false), 200);

        if (resetTimerRef.current) clearTimeout(resetTimerRef.current);

        if (clickCountRef.current >= 5) {
            triggerDrunkenStory();
            clickCountRef.current = 0;
            return;
        }

        resetTimerRef.current = setTimeout(() => {
            clickCountRef.current = 0;
            setIsClicking(false);
        }, 2000);
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // --- ATUALIZAÇÃO DE DESIGN (LAYERING & GLOW) ---
    // Adicionado hover:-translate-y-2 e sombra colorida no hover para efeito Premium
    const cardBaseClasses = "bg-white p-10 rounded-3xl shadow-lg shadow-brand-navy/5 hover:shadow-[0_20px_40px_-15px_rgba(232,119,56,0.3)] hover:-translate-y-2 transition-all duration-500 border border-gray-100 group flex flex-col relative overflow-hidden h-full";
    // Adicionado brilho no ícone durante o hover
    const iconBaseClasses = "w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-terracotta group-hover:shadow-[0_0_20px_rgba(232,119,56,0.4)] transition-all duration-300";

    return (
        <LazyMotion features={domAnimation}>
            <section className="py-24 px-6 bg-brand-bg scroll-mt-20" id="servicos">
                <div className="container mx-auto">
                    <m.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        {/* Label e Título com font-heading */}
                        <span className="font-heading text-brand-terracotta font-bold tracking-widest uppercase text-sm">
                            {t('label')}
                        </span>
                        <h2 className="font-heading text-4xl md:text-6xl font-black text-brand-navy mt-3 uppercase tracking-tight">
                            {t('title')}
                        </h2>
                        <div className="w-24 h-1 bg-brand-terracotta mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(232,119,56,0.5)]"></div>
                    </m.div>

                    <m.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-3 gap-12"
                    >
                        {/* CARD 1: ALUGUER */}
                        <m.div variants={itemVariants} className="h-full">
                            <a
                                href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cardBaseClasses}
                            >
                                <div className={iconBaseClasses}>
                                    <Trophy className="text-brand-navy group-hover:text-white w-8 h-8 transition-colors" />
                                </div>
                                {/* Adicionado font-heading e uppercase */}
                                <h3 className="font-heading text-3xl font-bold uppercase tracking-wide text-brand-navy mb-4 flex items-center gap-2">
                                    {t('cards.rent.title')}
                                    <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-terracotta" />
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {t('cards.rent.description')}
                                </p>
                                <span className="font-heading text-brand-terracotta font-bold text-sm uppercase tracking-widest mt-auto group-hover:text-brand-navy transition-colors">
                                    {t('cards.rent.cta')} &rarr;
                                </span>
                            </a>
                        </m.div>

                        {/* CARD 2: ACADEMIA */}
                        <m.div variants={itemVariants} className="h-full">
                            <Link href="#precos" className={cardBaseClasses}>
                                <div className={iconBaseClasses}>
                                    <Dumbbell className="text-brand-navy group-hover:text-white w-8 h-8 transition-colors" />
                                </div>
                                <h3 className="font-heading text-3xl font-bold uppercase tracking-wide text-brand-navy mb-4 flex items-center gap-2">
                                    {t('cards.academy.title')}
                                    <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-terracotta" />
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {t('cards.academy.description')}
                                </p>
                                <span className="font-heading text-brand-terracotta font-bold text-sm uppercase tracking-widest mt-auto group-hover:text-brand-navy transition-colors">
                                    {t('cards.academy.cta')} &rarr;
                                </span>
                            </Link>
                        </m.div>

                        {/* CARD 3: BAR (EASTER EGG) */}
                        <m.div
                            variants={itemVariants}
                            className={`${cardBaseClasses} ${isDrunk ? 'border-brand-terracotta/50 ring-4 ring-brand-terracotta/20 scale-105 z-20 shadow-[0_0_40px_rgba(232,119,56,0.3)]' : ''}`}
                            animate={isDrunk ? {
                                rotate: [0, -2, 2, -1, 1, 0],
                                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                            } : {}}
                        >
                            {!isDrunk && (
                                <Link
                                    href="/contactos"
                                    className="absolute inset-0 z-0"
                                    aria-label={t('cards.bar.title')}
                                />
                            )}

                            <AnimatePresence>
                                {isDrunk && (
                                    <>
                                        <m.div
                                            initial={{ height: "0%" }}
                                            animate={{ height: "100%" }}
                                            exit={{ height: "0%" }}
                                            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-yellow-400/20 to-transparent pointer-events-none z-0"
                                        />
                                        {[...Array(6)].map((_, i) => (
                                            <m.div
                                                key={i}
                                                initial={{ bottom: -20, left: `${Math.random() * 100}%`, opacity: 0 }}
                                                animate={{ bottom: "120%", opacity: [0, 1, 0], x: Math.random() * 40 - 20 }}
                                                transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                                                className="absolute w-2 h-2 bg-yellow-500/40 rounded-full z-0 pointer-events-none"
                                            />
                                        ))}
                                    </>
                                )}
                            </AnimatePresence>

                            <div
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleBeerClick();
                                }}
                                className={`${iconBaseClasses} relative z-10 cursor-pointer select-none`}
                            >
                                <m.div
                                    animate={{
                                        rotate: isClicking
                                            ? (clickCountRef.current % 2 === 0 ? -30 : 30)
                                            : 0,
                                        scale: isClicking ? 1.1 : 1,
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                >
                                    <Beer className={`w-8 h-8 transition-colors text-brand-navy group-hover:text-white ${isDrunk ? 'animate-bounce' : ''}`} />
                                </m.div>
                            </div>

                            <div className="flex-grow z-0 pointer-events-none">
                                <AnimatePresence mode="wait">
                                    {!isDrunk ? (
                                        <m.div key="normal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            <h3 className="font-heading text-3xl font-bold uppercase tracking-wide text-brand-navy mb-4 flex items-center gap-2">
                                                {t('cards.bar.title')}
                                                <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-terracotta" />
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {t('cards.bar.description')}
                                            </p>
                                            <span className="font-heading text-brand-terracotta font-bold text-sm uppercase tracking-widest mt-auto inline-block group-hover:text-brand-navy transition-colors">
                                                {t('cards.bar.cta')} &rarr;
                                            </span>
                                        </m.div>
                                    ) : (
                                        <m.div key="drunk" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="pointer-events-auto flex flex-col h-full">
                                            <h3 className="font-heading text-2xl font-black uppercase tracking-wider text-brand-terracotta mb-2 flex items-center gap-2">
                                                Hic! Segredo... 🥴
                                            </h3>
                                            <p className="text-brand-navy font-medium leading-relaxed italic mb-6 bg-brand-bg/80 backdrop-blur-md p-4 rounded-xl border border-brand-terracotta/30 text-sm shadow-inner">
                                                "O nosso Hino não foi escrito por poetas... nasceu aqui mesmo, depois de uma <span className="text-brand-terracotta font-black">BUBEDEIRA</span> histórica! Verdade!"
                                            </p>
                                            <Link href="/hino" className="font-heading relative z-50 text-white bg-brand-terracotta px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-widest mt-auto inline-block text-center hover:bg-brand-navy transition-all duration-300 shadow-[0_0_15px_rgba(232,119,56,0.4)] hover:shadow-[0_0_25px_rgba(232,119,56,0.8)] transform hover:-translate-y-1">
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