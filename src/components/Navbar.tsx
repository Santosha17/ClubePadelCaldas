'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import logoImg from '@/assets/CPC_LogoVector_RGB_1024x724.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const pathname = usePathname();
    const isHomepage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isTransparent = isHomepage && !scrolled;

    // Padding reduzido para a barra ficar elegante
    const navClasses = isTransparent
        ? 'bg-transparent py-4 shadow-none border-b border-white/10'
        : 'bg-white py-2 shadow-md';

    const textClasses = isTransparent
        ? 'text-white hover:text-brand-terracotta'
        : 'text-brand-navy hover:text-brand-terracotta';

    const logoClasses = isTransparent
        ? 'brightness-0 invert'
        : '';

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navClasses}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

                {/* LOGO E NOME */}
                <Link href="/" className="flex items-center gap-3 z-50 hover:opacity-90 transition-opacity group">

                    {/* CORREÇÃO FUNDAMENTAL:
                       O teu logo é retangular (1024x724).
                       Em vez de w-20 h-20 (quadrado), usamos w-24 h-16 (retangular).
                       Isto elimina o espaço vazio vertical e deixa a barra fina com o logo grande.
                    */}
                    <div className={`relative w-16 h-10 md:w-24 md:h-16 transition-all duration-500 ${logoClasses}`}>
                        <Image
                            src={logoImg}
                            alt="Logo Clube Padel Caldas"
                            fill
                            className="object-contain" // Garante que o logo preenche o espaço sem distorcer
                            priority
                        />
                    </div>

                    <div className={`font-bold text-lg md:text-xl tracking-wider leading-tight transition-colors duration-500 ${textClasses}`}>
                        CLUBE PADEL <span className={isTransparent ? 'text-white transition-colors' : 'text-brand-terracotta transition-colors'}>CALDAS</span>
                    </div>
                </Link>

                {/* MENU DESKTOP */}
                <div className={`hidden md:flex items-center gap-8 text-xs md:text-sm font-bold tracking-widest uppercase transition-colors duration-500 ${textClasses}`}>

                    <Link href="/#servicos" className="hover:opacity-75 transition-opacity">Serviços</Link>
                    <Link href="/#precos" className="hover:opacity-75 transition-opacity">Preços</Link>
                    <Link href="/#clube" className="hover:opacity-75 transition-opacity">O Clube</Link>
                    <Link href="/contactos" className="hover:opacity-75 transition-opacity">Contactos</Link>
                </div>

                {/* CTA BUTTON */}
                <div className="hidden md:block">
                    <a
                        href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-5 py-2 rounded-full font-bold text-xs md:text-sm tracking-wider transition-all duration-300 border-2 shadow-lg transform hover:scale-105 inline-block
                            ${isTransparent
                            ? 'bg-white text-brand-navy border-white hover:bg-brand-terracotta hover:border-brand-terracotta hover:text-white'
                            : 'bg-brand-terracotta text-white border-brand-terracotta hover:bg-brand-navy hover:border-brand-navy'
                        }`}
                    >
                        RESERVAR
                    </a>
                </div>

                {/* MOBILE TOGGLE */}
                <button className={`md:hidden z-50 transition-colors duration-500 ${mobileMenuOpen ? 'text-brand-navy' : textClasses}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MENU MOBILE */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-brand-navy text-2xl font-bold animate-in fade-in zoom-in">
                    <Link href="/#servicos" onClick={() => setMobileMenuOpen(false)}>Serviços</Link>
                    <Link href="/#precos" onClick={() => setMobileMenuOpen(false)}>Preços</Link>
                    <Link href="/#clube" onClick={() => setMobileMenuOpen(false)}>O Clube</Link>
                    <Link href="/contactos" onClick={() => setMobileMenuOpen(false)}>Contactos</Link>

                    <a
                        href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="bg-brand-terracotta text-white px-10 py-3 rounded-full mt-4 text-center shadow-lg hover:bg-brand-navy transition-colors"
                    >
                        RESERVAR
                    </a>
                </div>
            )}
        </nav>
    );
}