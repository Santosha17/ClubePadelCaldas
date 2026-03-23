'use client';

import { Link } from '@/navigation';
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import hero from "../assets/hero.webp";
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('Hero');

    const scrollToServices = (e: React.MouseEvent) => {
        e.preventDefault();

        const target = document.getElementById('servicos');
        if (!target) return;

        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Imagem de Fundo Otimizada */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={hero}
                    alt="Hero image"
                    className="object-cover"
                    sizes="100vw"
                    priority={true}
                    // @ts-ignore
                    fetchPriority="high"
                    loading="eager"
                    quality={50}
                    placeholder="blur"
                    fill
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-brand-navy/60 to-brand-navy/90 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 text-center text-white px-4 max-w-5xl">
                {/* 1. SUBTÍTULO: Adicionado font-heading */}
                <h2 className="font-heading text-brand-terracotta font-bold tracking-[0.3em] text-sm md:text-base mb-6 uppercase animate-fade-in-up">
                    {t('subtitle')}
                </h2>

                {/* 2. TÍTULO PRINCIPAL: Adicionado font-heading e sombra mais forte (drop-shadow-2xl) */}
                <h1 className="font-heading text-5xl md:text-8xl font-black mb-8 leading-tight uppercase drop-shadow-2xl">
                    {t('title')} <br />
                    <span className="text-brand-terracotta drop-shadow-[0_0_15px_rgba(232,119,56,0.5)]">
                        {t('titleHighlight')}
                    </span>
                </h1>

                <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
                    {/* 3. BOTÃO CLUBE: Adicionado font-heading, efeito vidro (bg-white/90 backdrop-blur-sm) e glow no hover */}
                    <Link
                        href="#clube"
                        className="font-heading bg-white/90 backdrop-blur-sm text-brand-navy px-10 py-4 rounded-full font-bold tracking-widest hover:bg-brand-terracotta hover:text-white transition-all duration-300 shadow-xl hover:shadow-[0_0_20px_rgba(232,119,56,0.4)] hover:-translate-y-1"
                    >
                        {t('buttons.club')}
                    </Link>

                    {/* 4. BOTÃO RESERVAR: Adicionado font-heading, e glow colorido fixo que aumenta no hover */}
                    <a
                        href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading bg-brand-terracotta text-white px-10 py-4 rounded-full font-bold tracking-widest hover:bg-brand-navy border-2 border-brand-terracotta hover:border-brand-navy transition-all duration-300 shadow-[0_0_15px_rgba(232,119,56,0.4)] hover:shadow-[0_0_25px_rgba(232,119,56,0.8)] hover:-translate-y-1"
                    >
                        {t('buttons.book')}
                    </a>
                </div>
            </div>

            {/* SETA DE SCROLL */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
                <button
                    onClick={scrollToServices}
                    className="cursor-pointer text-white hover:text-brand-terracotta hover:drop-shadow-[0_0_10px_rgba(232,119,56,0.8)] transition-all duration-300 block focus:outline-none bg-transparent border-none p-0"
                    aria-label={t('scrollAria')}
                >
                    <ArrowRight className="rotate-90 w-8 h-8" />
                </button>
            </div>
        </section>
    );
}