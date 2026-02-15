'use client';

// 1. IMPORTAR LINK DO NAVIGATION E HOOK DE TRADUÇÃO
import { Link } from '@/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import splitImg from '../assets/split_image.jpg';

export default function SplitSection() {
    // 2. INICIALIZAR TRADUÇÕES
    const t = useTranslations('About');

    return (
        <section className="grid md:grid-cols-2" id="clube">
            {/* Lado Esquerdo - Texto */}
            <div className="bg-brand-navy text-white p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
                {/* Elemento decorativo */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-terracotta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <span className="text-brand-terracotta font-bold tracking-widest uppercase mb-4 relative z-10">
                    {t('label')}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative z-10">
                    {/* Nota: Se quiseres forçar a quebra de linha <br/> na tradução,
                        precisas de usar t.rich(), mas para simplificar usamos o texto direto */}
                    {t('title')}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8 text-lg relative z-10">
                    {t('description')}
                </p>

                <ul className="mb-8 space-y-3 text-gray-300 relative z-10">
                    <li className="flex items-center gap-2">✓ {t('features.parking')}</li>
                    <li className="flex items-center gap-2">✓ {t('features.courts')}</li>
                    <li className="flex items-center gap-2">✓ {t('features.classes')}</li>
                    <li className="flex items-center gap-2">✓ {t('features.tournaments')}</li>
                    <li className="flex items-center gap-2">✓ {t('features.community')}</li>
                </ul>

                <Link
                    href="/contactos"
                    className="w-fit border-b-2 border-brand-terracotta text-white pb-1 font-bold hover:text-brand-terracotta transition-colors relative z-10"
                >
                    {t('cta')}
                </Link>
            </div>

            {/* Lado Direito - Imagem */}
            <div className="relative min-h-[400px]">
                <Image
                    src={splitImg}
                    alt={t('imageAlt')} // Tradução do texto alternativo
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </section>
    );
}