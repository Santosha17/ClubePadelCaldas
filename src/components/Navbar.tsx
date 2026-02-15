'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import logoImg from '@/assets/CPC_LogoVector_RGB_1024x724.png';

export const runtime = 'edge';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const t = useTranslations('Navbar');
    const pathname = usePathname();

    const isHomepage = pathname === '/pt' || pathname === '/en' || pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isTransparent = isHomepage && !scrolled;

    const navClasses = isTransparent
        ? 'bg-transparent py-4 shadow-none border-b border-white/10'
        : 'bg-white py-2 shadow-md';

    const textClasses = isTransparent
        ? 'text-white hover:text-brand-terracotta'
        : 'text-brand-navy hover:text-brand-terracotta';

    const logoClasses = isTransparent ? 'brightness-0 invert' : '';

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navClasses}`}>
            {/* Altura h-20 para acomodar o logo no tamanho original */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative h-20">

                {/* LOGO E NOME - Tamanho Original Restaurado */}
                <Link href="/" className="flex items-center gap-3 z-50 hover:opacity-90 transition-opacity group flex-shrink-0">
                    <div className={`relative w-16 h-10 md:w-24 md:h-16 transition-all duration-500 ${logoClasses}`}>
                        <Image
                            src={logoImg}
                            alt="Logo Clube Padel Caldas"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className={`font-bold text-lg md:text-xl tracking-wider leading-tight transition-colors duration-500 ${textClasses}`}>
                        {t('brandPrefix')} <span className={isTransparent ? 'text-white' : 'text-brand-terracotta'}>{t('brandSuffix')}</span>
                    </div>
                </Link>

                {/* MENU DESKTOP - CENTRALIZADO E COM TAMANHO ORIGINAL (text-sm) */}
                <div className={`hidden md:flex items-center gap-8 text-sm font-bold tracking-widest uppercase transition-colors duration-500 md:absolute md:left-1/2 md:-translate-x-1/2 ${textClasses}`}>
                    <Link href="/#servicos" className="hover:opacity-75 transition-all">{t('links.services')}</Link>
                    <Link href="/#precos" className="hover:opacity-75 transition-all">{t('links.prices')}</Link>
                    <Link href="/#clube" className="hover:opacity-75 transition-all">{t('links.club')}</Link>
                    <Link href="/contactos" className="hover:opacity-75 transition-all">{t('links.contacts')}</Link>
                </div>

                {/* CTA BUTTON - Lado Direito com Proporção Original */}
                <div className="hidden md:block flex-shrink-0 z-50">
                    <a
                        href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-2.5 rounded-full font-bold text-sm tracking-wider transition-all duration-300 border-2 shadow-lg transform hover:scale-105 inline-block
                            ${isTransparent
                            ? 'bg-white text-brand-navy border-white hover:bg-brand-terracotta hover:border-brand-terracotta hover:text-white'
                            : 'bg-brand-terracotta text-white border-brand-terracotta hover:bg-brand-navy hover:border-brand-navy'
                        }`}
                    >
                        {t('cta')}
                    </a>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    className={`md:hidden z-50 transition-colors duration-500 ${mobileMenuOpen ? 'text-brand-navy' : textClasses}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MENU MOBILE - Mantido para consistência */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-brand-navy text-2xl font-bold animate-in fade-in slide-in-from-top duration-300">
                    <Link href="/#servicos" onClick={() => setMobileMenuOpen(false)}>{t('links.services')}</Link>
                    <Link href="/#precos" onClick={() => setMobileMenuOpen(false)}>{t('links.prices')}</Link>
                    <Link href="/#clube" onClick={() => setMobileMenuOpen(false)}>{t('links.club')}</Link>
                    <Link href="/contactos" onClick={() => setMobileMenuOpen(false)}>{t('links.contacts')}</Link>
                    <a
                        href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="bg-brand-terracotta text-white px-10 py-3 rounded-full mt-4 text-center shadow-lg"
                    >
                        {t('cta')}
                    </a>
                </div>
            )}
        </nav>
    );
}