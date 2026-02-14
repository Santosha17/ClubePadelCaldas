'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import heroImg from "../assets/hero.webp";

export default function Hero() {

    // Função para realizar o scroll suave com duração personalizada
    const smoothScrollTo = (targetId: string, duration: number) => {
        const target = document.getElementById(targetId);
        if (!target) return;

        const startPosition = window.scrollY;
        // Subtraímos 100px para compensar a altura da Navbar fixa
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - 100;
        const distance = targetPosition - startPosition;
        let startTime: number | null = null;

        function animation(currentTime: number) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;

            // Função matemática (Easing) para o movimento não ser robótico
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);

            window.scrollTo(0, run);

            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Função de aceleração/desaceleração suave
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
                    src={heroImg}
                    alt="hero image"
                    fill
                    className="object-cover"
                    priority
                />

                {/* --- AQUI ESTÁ A MUDANÇA --- */}
                {/* Overlay com Gradiente: Mais escuro em baixo para o texto laranja sobressair */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-brand-navy/60 to-brand-navy/90 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 text-center text-white px-4 max-w-5xl">
                <h2 className="text-brand-terracotta font-bold tracking-[0.3em] text-sm md:text-base mb-6 uppercase animate-fade-in-up">
                    Desde 2022
                </h2>
                <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight uppercase drop-shadow-lg">
                    O Padel nas <br /> <span className="text-brand-terracotta">Caldas da Rainha</span>
                </h1>

                <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
                    <Link
                        href="#clube"
                        className="bg-white text-brand-navy px-10 py-4 rounded-full font-bold tracking-widest hover:bg-brand-terracotta hover:text-white transition-all shadow-xl"
                    >
                        O CLUBE
                    </Link>
                    <a
                        href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-terracotta text-white px-10 py-4 rounded-full font-bold tracking-widest hover:bg-brand-navy border-2 border-brand-terracotta hover:border-brand-navy transition-all shadow-xl"
                    >
                        RESERVAR AGORA
                    </a>
                </div>
            </div>

            {/* Seta com Scroll Lento Personalizado */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        smoothScrollTo('servicos', 1000);
                    }}
                    className="cursor-pointer text-white hover:text-brand-terracotta transition-colors duration-500 block focus:outline-none bg-transparent border-none p-0"
                    aria-label="Ver serviços"
                >
                    <ArrowRight className="rotate-90 w-8 h-8" />
                </button>
            </div>
        </section>
    );
}