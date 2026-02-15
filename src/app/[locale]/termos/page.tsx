'use client';

import { useTranslations } from 'next-intl';

export const runtime = 'edge';

export default function Termos() {
    // 2. Inicializar as traduções
    const t = useTranslations('Terms');

    return (
        <main className="min-h-screen bg-brand-bg text-brand-navy font-sans flex flex-col">

            <section className="pt-40 pb-24 px-6 container mx-auto max-w-4xl flex-grow">
                <h1 className="text-4xl md:text-5xl font-black mb-10 text-brand-navy">
                    {t('hero.title')}<span className="text-brand-terracotta">{t('hero.titleHighlight')}</span>
                </h1>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                        <strong>{t('hero.lastUpdate')}</strong> {new Date().toLocaleDateString('pt-PT')}
                    </p>

                    <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
                        {t('sections.intro.title')}
                    </h2>
                    <p>
                        {t('sections.intro.content')}
                    </p>
                    <p className="italic text-gray-400">
                        {t('sections.intro.placeholder')}
                    </p>

                    <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
                        {t('sections.bookings.title')}
                    </h2>
                    <p>
                        {t('sections.bookings.content')}
                    </p>
                </div>
            </section>
        </main>
    );
}