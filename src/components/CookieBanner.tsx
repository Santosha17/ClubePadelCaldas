'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function CookieBanner() {
    const t = useTranslations('Cookies');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Verifica se o utilizador já tomou uma decisão
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Pequeno delay para não aparecer logo que o site carrega (melhor UX)
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
        // Aqui podes adicionar lógica para ativar Google Analytics, Pixel, etc.
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
                >
                    <div className="max-w-7xl mx-auto bg-brand-navy text-white rounded-2xl shadow-2xl border border-white/10 p-6 md:flex md:items-center md:justify-between gap-6 backdrop-blur-xl bg-opacity-95">

                        {/* Texto e Ícone */}
                        <div className="flex gap-4 mb-6 md:mb-0">
                            <div className="shrink-0 w-12 h-12 bg-brand-terracotta/20 rounded-full flex items-center justify-center text-brand-terracotta">
                                <Cookie size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">{t('title')}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
                                    {t('description')}{' '}
                                    <Link href="/privacidade" className="text-brand-terracotta hover:underline font-medium">
                                        {t('link')}
                                    </Link>.
                                </p>
                            </div>
                        </div>

                        {/* Botões */}
                        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                            <button
                                onClick={handleDecline}
                                className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 text-sm font-bold transition-colors"
                            >
                                {t('decline')}
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-6 py-3 rounded-xl bg-brand-terracotta hover:bg-white hover:text-brand-navy text-white text-sm font-bold shadow-lg transition-all transform hover:-translate-y-1"
                            >
                                {t('accept')}
                            </button>
                        </div>

                        {/* Botão Fechar (Canto) */}
                        <button
                            onClick={handleDecline}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white md:hidden"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}