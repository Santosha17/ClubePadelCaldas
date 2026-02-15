'use client';

// 1. Importar o hook de tradução
import { useTranslations } from 'next-intl';

export default function Privacidade() {
    // 2. Inicializar as traduções
    const t = useTranslations('Privacy');

    return (
        <main className="min-h-screen bg-brand-bg text-brand-navy font-sans flex flex-col">
            {/* Nota: A Navbar e o Footer já são renderizados pelo [locale]/layout.tsx.
               Esta página foca-se apenas no conteúdo central.
            */}

            <section className="pt-40 pb-24 px-6 container mx-auto max-w-4xl flex-grow">
                <h1 className="text-4xl md:text-5xl font-black mb-10 text-brand-navy">
                    {t('hero.title')}<span className="text-brand-terracotta">{t('hero.titleHighlight')}</span>
                </h1>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                        <strong>{t('hero.lastUpdate')}</strong> {new Date().toLocaleDateString('pt-PT')}
                    </p>

                    <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
                        {t('sections.collection.title')}
                    </h2>
                    <p>
                        {t('sections.collection.content')}
                    </p>
                    <p className="italic text-gray-400">
                        {t('sections.collection.placeholder')}
                    </p>

                    <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">
                        {t('sections.sharing.title')}
                    </h2>
                    <p>
                        {t('sections.sharing.content')}
                    </p>
                </div>
            </section>
        </main>
    );
}