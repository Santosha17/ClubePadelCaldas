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
        // A. Guardar no Local Storage
        localStorage.setItem('cookieConsent', decision);

        // B. Guardar num Cookie REAL
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
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 150, opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 pointer-events-none"
                >
                    <div className="pointer-events-auto max-w-6xl mx-auto bg-brand-navy/90 backdrop-blur-2xl text-white rounded-3xl shadow-[0_-10px_50px_rgba(0,0,0,0.3)] border border-white/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                        <div className="flex gap-5 mb-2 md:mb-0">
                            {/* Ícone com Glow */}
                            <div className="shrink-0 w-14 h-14 bg-brand-terracotta/20 rounded-full flex items-center justify-center text-brand-terracotta shadow-[0_0_15px_rgba(232,119,56,0.2)]">
                                <Cookie size={28} />
                            </div>
                            <div className="flex flex-col justify-center">
                                {/* Título com font-heading */}
                                <h3 className="font-heading font-bold text-xl mb-1 uppercase tracking-wide drop-shadow-sm">
                                    {t('title')}
                                </h3>
                                {/* Descrição com fonte base para leitura */}
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
                                    {t('description')}{' '}
                                    <Link href="/privacidade" className="text-brand-terracotta hover:text-white underline underline-offset-4 decoration-brand-terracotta/50 hover:decoration-white transition-colors">
                                        {t('link')}
                                    </Link>.
                                </p>
                            </div>
                        </div>

                        {/* Botões */}
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0 mt-4 md:mt-0">
                            <button
                                onClick={() => setConsent('declined')}
                                className="font-heading uppercase tracking-widest px-6 py-3 md:py-4 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 text-sm font-bold transition-all duration-300"
                            >
                                {t('decline')}
                            </button>
                            <button
                                onClick={() => setConsent('accepted')}
                                className="font-heading uppercase tracking-widest px-8 py-3 md:py-4 rounded-full bg-brand-terracotta hover:bg-white hover:text-brand-navy text-white text-sm font-bold shadow-[0_0_15px_rgba(232,119,56,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:-translate-y-1 transition-all duration-300"
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