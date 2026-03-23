'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import logoImg from '@/assets/CPC_LogoVector_RGB_1024x724.png';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const t = useTranslations('Navbar');
    const pathname = usePathname();

    const isHomepage = pathname === '/' || pathname === '/pt' || pathname === '/en';

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [mobileMenuOpen]);

    const isTransparent = isHomepage && !scrolled && !mobileMenuOpen;

    // ATUALIZADO: Substituído o branco sólido por Glassmorphism (bg-white/90 backdrop-blur-md) no scroll
    const navClasses = isTransparent
        ? 'bg-transparent py-4 border-b border-white/10'
        : 'bg-white/90 backdrop-blur-md py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]';

    const textClasses = isTransparent
        ? 'text-white hover:text-brand-terracotta'
        : 'text-brand-navy hover:text-brand-terracotta';

    const logoClasses = isTransparent ? 'brightness-0 invert' : '';

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navClasses}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">

                    {/* LOGO */}
                    <div className="flex-shrink-0 z-[60]">
                        <Link href="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
                            <Image
                                src={logoImg}
                                alt="Clube Padel Caldas"
                                width={60}
                                height={42}
                                className={`w-12 h-auto md:w-16 transition-all duration-300 object-contain group-hover:scale-105 ${logoClasses}`}
                                priority
                                sizes="(max-width: 768px) 48px, 64px"
                            />
                            {/* ATUALIZADO: font-heading e uppercase no nome da marca */}
                            <div className={`hidden lg:block font-heading font-black text-xl xl:text-2xl tracking-widest uppercase leading-tight transition-colors duration-300 drop-shadow-sm ${textClasses}`}>
                                {t('brandPrefix')} <span className={isTransparent ? 'text-white' : 'text-brand-terracotta'}>{t('brandSuffix')}</span>
                            </div>
                        </Link>
                    </div>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-10">
                        {/* ATUALIZADO: font-heading e hover interativo nos links */}
                        <Link href="/#servicos" className={`font-heading text-sm xl:text-base font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 ${textClasses}`}>
                            {t('links.services')}
                        </Link>
                        <Link href="/#precos" className={`font-heading text-sm xl:text-base font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 ${textClasses}`}>
                            {t('links.prices')}
                        </Link>
                        <Link href="/#clube" className={`font-heading text-sm xl:text-base font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 ${textClasses}`}>
                            {t('links.club')}
                        </Link>
                        <Link href="/contactos" className={`font-heading text-sm xl:text-base font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 ${textClasses}`}>
                            {t('links.contacts')}
                        </Link>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-4 z-[60]">
                        <LanguageSwitcher isTransparent={isTransparent} />
                        <button
                            className={`md:hidden p-2 transition-colors duration-300 ${mobileMenuOpen ? 'text-brand-navy hover:text-brand-terracotta text-brand-terracotta' : textClasses}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            {/* ATUALIZADO: Glassmorphism (bg-white/95 backdrop-blur-xl) e font-heading em tudo */}
            <div
                className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out ${
                    mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                }`}
            >
                <div className="flex flex-col items-center gap-8 w-full px-6">
                    <Link href="/#servicos" className="font-heading text-3xl font-black text-brand-navy hover:text-brand-terracotta uppercase tracking-widest transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {t('links.services')}
                    </Link>
                    <Link href="/#precos" className="font-heading text-3xl font-black text-brand-navy hover:text-brand-terracotta uppercase tracking-widest transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {t('links.prices')}
                    </Link>
                    <Link href="/contactos" className="font-heading text-3xl font-black text-brand-navy hover:text-brand-terracotta uppercase tracking-widest transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {t('links.contacts')}
                    </Link>

                    {/* Botão Premium no Mobile Menu */}
                    <a
                        href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading uppercase tracking-widest mt-8 bg-brand-terracotta text-white px-10 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(232,119,56,0.4)] active:scale-95 transition-all text-xl w-full max-w-xs text-center border-2 border-brand-terracotta"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {t('cta')}
                    </a>
                </div>

                {/* Elemento Decorativo no fundo do menu mobile */}
                <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-brand-terracotta/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>
            </div>
        </nav>
    );
}