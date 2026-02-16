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
    const navClasses = isTransparent ? 'bg-transparent py-4 border-b border-white/10' : 'bg-white py-2 shadow-md';
    const textClasses = isTransparent ? 'text-white hover:text-brand-terracotta' : 'text-brand-navy hover:text-brand-terracotta';
    const logoClasses = isTransparent ? 'brightness-0 invert' : '';

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClasses}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">

                    {/* LOGO */}
                    <div className="flex-shrink-0 z-50">
                        <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
                            <Image
                                src={logoImg}
                                alt="Clube Padel Caldas"
                                width={60}
                                height={42}
                                className={`w-10 h-auto md:w-20 transition-all duration-300 object-contain ${logoClasses}`}
                                priority
                                sizes="(max-width: 768px) 40px, 96px"
                            />
                            <div className={`hidden lg:block font-bold text-lg xl:text-xl tracking-wider leading-tight transition-colors ${textClasses}`}>
                                {t('brandPrefix')} <span className={isTransparent ? 'text-white' : 'text-brand-terracotta'}>{t('brandSuffix')}</span>
                            </div>
                        </Link>
                    </div>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/#servicos" className={`text-sm font-bold uppercase tracking-widest transition-colors ${textClasses}`}>
                            {t('links.services')}
                        </Link>
                        <Link href="/#precos" className={`text-sm font-bold uppercase tracking-widest transition-colors ${textClasses}`}>
                            {t('links.prices')}
                        </Link>
                        <Link href="/#clube" className={`text-sm font-bold uppercase tracking-widest transition-colors ${textClasses}`}>
                            {t('links.club')}
                        </Link>
                        <Link href="/contactos" className={`text-sm font-bold uppercase tracking-widest transition-colors ${textClasses}`}>
                            {t('links.contacts')}
                        </Link>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-4 z-50">
                        <LanguageSwitcher isTransparent={isTransparent} />
                        <button
                            className={`md:hidden p-2 transition-colors ${mobileMenuOpen ? 'text-brand-navy' : textClasses}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-10 text-brand-navy text-2xl font-bold">
                    <Link href="/#servicos" onClick={() => setMobileMenuOpen(false)}>{t('links.services')}</Link>
                    <Link href="/#precos" onClick={() => setMobileMenuOpen(false)}>{t('links.prices')}</Link>
                    <Link href="/contactos" onClick={() => setMobileMenuOpen(false)}>{t('links.contacts')}</Link>
                    <a
                        href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                        target="_blank"
                        className="bg-brand-terracotta text-white px-10 py-4 rounded-xl font-bold shadow-xl"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {t('cta')}
                    </a>
                </div>
            )}
        </nav>
    );
}