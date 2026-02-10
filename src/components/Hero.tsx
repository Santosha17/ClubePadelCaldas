import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import heroImg from "../assets/hero.webp";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Imagem de Fundo (Podes depois trocar por um vídeo como no GreatPadel) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImg}
                    alt="hero image"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay Azul Marinho */}
                <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply"></div>
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

            {/* Indicador de Scroll */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
                <ArrowRight className="rotate-90 w-8 h-8" />
            </div>
        </section>
    );
}