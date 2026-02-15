'use client';

import { Music, Heart } from 'lucide-react';
// 1. Importar o hook de tradução
import { useTranslations } from 'next-intl';

export default function Hino() {
    // 2. Inicializar as traduções
    const t = useTranslations('Anthem');

    return (
        <div className="bg-gray-50 pb-24">

            {/* 1. HERO SECTION */}
            <div className="relative bg-brand-navy py-24 pb-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-grid-lg text-white" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-navy border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-4">
                        {t('hero.label')}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                        {t('hero.title')}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('hero.subtitle')}
                    </p>
                </div>
            </div>

            {/* 2. ÁREA DA LETRA */}
            <div className="max-w-3xl mx-auto px-4 -mt-20 relative z-10">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-gray-100 text-center relative overflow-hidden">

                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-brand-terracotta to-blue-600"></div>
                    <Music className="w-16 h-16 text-brand-terracotta mx-auto mb-8 opacity-90" />

                    <div className="space-y-8 text-gray-600 text-lg md:text-xl leading-relaxed font-medium">

                        {/* Estrofe 1 */}
                        <div>
                            <p>{t('lyrics.strophe1.line1')}</p>
                            <p>{t('lyrics.strophe1.line2')}</p>
                            <p>{t('lyrics.strophe1.line3')}</p>
                            <p>{t('lyrics.strophe1.line4')}</p>
                            <p>{t('lyrics.strophe1.line5')}</p>
                        </div>

                        {/* Estrofe 2 */}
                        <div>
                            <p>{t('lyrics.strophe2.line1')}</p>
                            <p>{t('lyrics.strophe2.line2')}</p>
                            <p>{t('lyrics.strophe2.line3')}</p>
                            <p>{t('lyrics.strophe2.line4')}</p>
                            <p>{t('lyrics.strophe2.line5')}</p>
                        </div>

                        {/* Estrofe 3 */}
                        <div>
                            <p>{t('lyrics.strophe3.line1')}</p>
                            <p>{t('lyrics.strophe3.line2')}</p>
                            <p>{t('lyrics.strophe3.line3')}</p>
                            <p>{t('lyrics.strophe3.line4')}</p>
                            <p>{t('lyrics.strophe3.line5')}</p>
                        </div>

                        {/* OUTRO */}
                        <div>
                            <p>{t('lyrics.outro')}</p>
                            <p>{t('lyrics.outro')}</p>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Heart className="text-brand-terracotta w-8 h-8 fill-current animate-pulse" />
                    </div>

                </div>
            </div>
        </div>
    );
}