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
        // 1. Verificar se já existe decisão guardada no navegador
        const savedConsent = localStorage.getItem('cookieConsent');

        // 2. Se NÃO houver decisão, mostramos o banner após 1 segundo
        if (!savedConsent) {
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const setConsent = (decision: 'accepted' | 'declined') => {
        // A. Guardar no Local Storage (para a UI saber que já decidimos)
        localStorage.setItem('cookieConsent', decision);

        // B. Guardar num Cookie REAL (para o servidor/analytics saberem)
        // Validade: 1 ano (31536000 segundos)
        document.cookie = `cookieConsent=${decision}; path=/; max-age=31536000; SameSite=Lax`;

        // C. Esconder o banner
        setIsVisible(false);

        // Opcional: Se aceitou, pode ativar o Google Analytics aqui
        if (decision === 'accepted') {
            console.log("Cookies aceites! Ativando analytics...");
            // window.gtag('consent', 'update', ...);
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
                >
                    <div className="max-w-7xl mx-auto bg-brand-navy text-white rounded-2xl shadow-2xl border border-white/10 p-6 md:flex md:items-center md:justify-between gap-6 backdrop-blur-xl bg-opacity-95">

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

                        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                            <button
                                onClick={() => setConsent('declined')}
                                className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 text-sm font-bold transition-colors"
                            >
                                {t('decline')}
                            </button>
                            <button
                                onClick={() => setConsent('accepted')}
                                className="px-6 py-3 rounded-xl bg-brand-terracotta hover:bg-white hover:text-brand-navy text-white text-sm font-bold shadow-lg transition-all"
                            >
                                {t('accept')}
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}