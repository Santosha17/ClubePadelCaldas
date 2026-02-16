'use client';

import { Link } from '@/navigation';
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import hero from "../assets/hero.webp";
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('Hero');

    const smoothScrollTo = (targetId: string, duration: number) => {
        const target = document.getElementById(targetId);
        if (!target) return;

        const startPosition = window.scrollY;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - 100;
        const distance = targetPosition - startPosition;
        let startTime: number | null = null;

        function animation(currentTime: number) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInOutQuad(t: number, b: number, c: number, d: number) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    };

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Imagem de Fundo */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={hero}
                    alt="Hero image"
                    className="object-cover"
                    // 1. Dizemos que em telemóvel ocupa o ecra todo
                    sizes="100vw"
                    // 2. Prioridade máxima (Obrigatório para LCP)
                    priority={true}
                    loading="eager"
                    // 3. AGRESSIVO: Reduzir qualidade para 50.
                    // O overlay escuro esconde as imperfeições e o ficheiro fica metade do tamanho.
                    quality={50}
                    placeholder="blur"
                    fill
                />
                {/* O teu overlay já ajuda a disfarçar qualquer perda de qualidade */}
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

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        smoothScrollTo('servicos', 1000);
                    }}
                    className="cursor-pointer text-white hover:text-brand-terracotta transition-colors duration-500 block focus:outline-none bg-transparent border-none p-0"
                    aria-label={t('scrollAria')}
                >
                    <ArrowRight className="rotate-90 w-8 h-8" />
                </button>
            </div>
        </section>
    );
}