'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-navy py-4 shadow-xl' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-3 z-50 hover:opacity-90 transition-opacity">
                    <div className="w-10 h-10 bg-brand-terracotta rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        CPC
                    </div>
                    <div className="text-white font-bold text-lg md:text-xl tracking-wider leading-tight">
                        CLUBE PADEL <span className="text-brand-terracotta">CALDAS</span>
                    </div>
                </Link>

                {/* MENU DESKTOP */}
                <div className="hidden md:flex items-center gap-8 text-white text-xs md:text-sm font-bold tracking-widest uppercase">
                    <Link href="/#clube" className="hover:text-brand-terracotta transition-colors">O Clube</Link>
                    {/* Corrigido para apontar para a secção certa */}
                    <Link href="/#campos" className="hover:text-brand-terracotta transition-colors">Campos</Link>
                    {/* Corrigido para apontar para a secção certa */}
                    <Link href="/#precos" className="hover:text-brand-terracotta transition-colors">Preços</Link>
                    <Link href="/#contactos" className="hover:text-brand-terracotta transition-colors">Contactos</Link>
                </div>

                {/* CTA BUTTON (Desktop) */}
                <div className="hidden md:block">
                    <a
                        href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-terracotta hover:bg-white hover:text-brand-navy text-white px-6 py-2.5 rounded-full font-bold text-xs md:text-sm tracking-wider transition-all duration-300 border-2 border-brand-terracotta shadow-lg transform hover:scale-105 inline-block"
                    >
                        RESERVAR
                    </a>
                </div>

                {/* MOBILE TOGGLE */}
                <button className="md:hidden text-white z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* MENU MOBILE */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-brand-navy z-40 flex flex-col items-center justify-center gap-8 text-white text-2xl font-bold animate-in fade-in zoom-in">
                    <Link href="/#clube" onClick={() => setMobileMenuOpen(false)}>O Clube</Link>
                    <Link href="/#campos" onClick={() => setMobileMenuOpen(false)}>Campos</Link>
                    <Link href="/#precos" onClick={() => setMobileMenuOpen(false)}>Preços</Link>
                    <Link href="/#contactos" onClick={() => setMobileMenuOpen(false)}>Contactos</Link>

                    {/* Botão Mobile */}
                    <a
                        href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-terracotta px-10 py-3 rounded-full mt-4 text-center shadow-lg"
                    >
                        RESERVAR
                    </a>
                </div>
            )}
        </nav>
    );
}