'use client';

import { Link } from '@/navigation';
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import hero from "../assets/hero.webp";
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('Hero');

    // --- NOVA FUNÇÃO DE SCROLL (Mais leve e nativa) ---
    const scrollToServices = (e: React.MouseEvent) => {
        e.preventDefault();

        const target = document.getElementById('servicos');
        if (!target) return;

        // Calculamos a posição manualmente apenas para garantir o offset do Header (-100px)
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        // Usamos a API nativa do browser. É muito mais suave (GPU accelerated).
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
                    fetchPriority="high" // Garante prioridade máxima
                    loading="eager"
                    quality={50}
                    placeholder="blur"
                    fill
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-brand-navy/60 to-brand-navy/90 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 text-center text-white px-4 max-w-5xl">
                <h2 className="text-brand-terracotta font-bold tracking-[0.3em] text-sm md:text-base mb-6 uppercase animate-fade-in-up">
                    {t('subtitle')}
                </h2>
                <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight uppercase drop-shadow-lg">
                    {t('title')} <br />
                    <span className="text-brand-terracotta">{t('titleHighlight')}</span>
                </h1>

                <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
                    <Link
                        href="#clube"
                        className="bg-white text-brand-navy px-10 py-4 rounded-full font-bold tracking-widest hover:bg-brand-terracotta hover:text-white transition-all shadow-xl"
                    >
                        {t('buttons.club')}
                    </Link>
                    <a
                        href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-terracotta text-white px-10 py-4 rounded-full font-bold tracking-widest hover:bg-brand-navy border-2 border-brand-terracotta hover:border-brand-navy transition-all shadow-xl"
                    >
                        {t('buttons.book')}
                    </a>
                </div>
            </div>

            {/* SETA DE SCROLL */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
                <button
                    onClick={scrollToServices}
                    className="cursor-pointer text-white hover:text-brand-terracotta transition-colors duration-500 block focus:outline-none bg-transparent border-none p-0"
                    aria-label={t('scrollAria')}
                >
                    <ArrowRight className="rotate-90 w-8 h-8" />
                </button>
            </div>
        </section>
    );
}