'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import logoImg from '@/assets/CPC_LogoVector_RGB_1024x724.png';
import LanguageSwitcher from './LanguageSwitcher';

export const runtime = 'edge';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const t = useTranslations('Navbar');
    const pathname = usePathname();

    const isHomepage = pathname === '/pt' || pathname === '/en' || pathname === '/';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isTransparent = isHomepage && !scrolled;
    const navClasses = isTransparent ? 'bg-transparent py-4 border-b border-white/10' : 'bg-white py-2 shadow-md';
    const textClasses = isTransparent ? 'text-white hover:text-brand-terracotta' : 'text-brand-navy hover:text-brand-terracotta';
    const logoClasses = isTransparent ? 'brightness-0 invert' : '';

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navClasses}`}>
            {/* USO DE GRID COM LÓGICA DE PRIORIDADE:
               - Colunas flexíveis para evitar colisões no centro.
            */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-[auto_1fr_auto] md:grid-cols-3 items-center h-20">

                {/* COLUNA 1: LOGO */}
                <div className="flex justify-start overflow-hidden">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                        <div className={`relative w-12 h-8 md:w-20 lg:w-24 md:h-16 flex-shrink-0 transition-all ${logoClasses}`}>
                            <Image src={logoImg} alt="Logo" fill className="object-contain" priority />
                        </div>
                        {/* Escondemos o texto 'CLUBE PADEL CALDAS' mais cedo (lg:block) para salvar a navbar */}
                        <div className={`hidden lg:block font-bold text-lg xl:text-xl tracking-wider leading-tight transition-colors ${textClasses}`}>
                            {t('brandPrefix')} <span className={isTransparent ? 'text-white' : 'text-brand-terracotta'}>{t('brandSuffix')}</span>
                        </div>
                    </Link>
                </div>

                {/* COLUNA 2: MENU CENTRAL (Desktop) */}
                <div className={`hidden md:flex justify-center items-center gap-4 lg:gap-8 text-[13px] lg:text-sm font-bold tracking-widest uppercase transition-colors`}>

                    {/* Link: Serviços */}
                    <Link href="/#servicos" className={`transition-colors duration-300 hover:text-brand-terracotta whitespace-nowrap ${textClasses}`}>
                        {t('links.services')}
                    </Link>

                    {/* Link: Preços */}
                    <Link href="/#precos" className={`transition-colors duration-300 hover:text-brand-terracotta whitespace-nowrap ${textClasses}`}>
                        {t('links.prices')}
                    </Link>

                    {/* Link: Clube */}
                    <Link href="/#clube" className={`transition-colors duration-300 hover:text-brand-terracotta whitespace-nowrap ${textClasses}`}>
                        {t('links.club')}
                    </Link>

                    {/* Link: Contactos */}
                    <Link href="/contactos" className={`transition-colors duration-300 hover:text-brand-terracotta whitespace-nowrap ${textClasses}`}>
                        {t('links.contacts')}
                    </Link>

                </div>

                {/* COLUNA 3: CONTROLES (Switcher + CTA + Toggle) */}
                <div className="flex justify-end items-center gap-2 sm:gap-4">
                    <div className="flex items-center">
                        <LanguageSwitcher isTransparent={isTransparent} />
                    </div>

                    <div className="hidden md:block">
                        <a
                            href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-4 py-2.5 rounded-full font-bold text-[12px] lg:text-sm tracking-wider transition-all border-2 shadow-lg transform hover:scale-105 whitespace-nowrap
                                ${isTransparent
                                ? 'bg-white text-brand-navy border-white hover:bg-brand-terracotta hover:border-brand-terracotta hover:text-white'
                                : 'bg-brand-terracotta text-white border-brand-terracotta hover:bg-brand-navy hover:border-brand-navy'}`}
                        >
                            {t('cta')}
                        </a>
                    </div>

                    <button
                        className={`md:hidden p-1 transition-colors ${mobileMenuOpen ? 'text-brand-navy' : textClasses}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* MENU MOBILE (Inalterado) */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-brand-navy text-2xl font-bold">
                    <Link href="/#servicos" onClick={() => setMobileMenuOpen(false)}>{t('links.services')}</Link>
                    <Link href="/#precos" onClick={() => setMobileMenuOpen(false)}>{t('links.prices')}</Link>
                    <Link href="/#clube" onClick={() => setMobileMenuOpen(false)}>{t('links.club')}</Link>
                    <Link href="/contactos" onClick={() => setMobileMenuOpen(false)}>{t('links.contacts')}</Link>
                    <a href="https://go.tieplayer.com/link/ClubePadeldasCaldas" target="_blank" onClick={() => setMobileMenuOpen(false)} className="bg-brand-terracotta text-white px-10 py-3 rounded-full">{t('cta')}</a>
                </div>
            )}
        </nav>
    );
}