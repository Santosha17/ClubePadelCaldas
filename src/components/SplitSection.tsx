'use client';

import { Link } from '@/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import splitImg from '../assets/split_image.jpg';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function SplitSection() {
    const t = useTranslations('About');

    return (
        <section className="grid md:grid-cols-2" id="clube">
            {/* Lado Esquerdo - Texto */}
            <div className="bg-[#111322] text-white p-12 md:p-24 flex flex-col justify-center relative overflow-hidden group">

                {/* Efeito decorativo de fundo (Glow que aumenta no hover) */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E87738]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none transition-all duration-700 group-hover:bg-[#E87738]/25"></div>

                {/* LABEL (com drop-shadow-sm) */}
                <span className="text-[#E87738] font-bold tracking-widest uppercase mb-4 text-sm relative z-10 drop-shadow-sm">
                    {t('label')}
                </span>

                {/* TÍTULO (com drop-shadow-xl) */}
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase relative z-10 drop-shadow-xl">
                    {t('title')}
                </h2>

                {/* DESCRIÇÃO */}
                <p className="text-gray-300 leading-relaxed mb-10 text-base relative z-10">
                    {t('description')}
                </p>

                {/* LISTA (com drop-shadow nos ícones) */}
                <ul className="mb-12 space-y-4 text-gray-200 relative z-10">
                    <li className="flex items-center gap-3 group/item">
                        <CheckCircle className="text-[#E87738] w-5 h-5 shrink-0 drop-shadow-[0_0_10px_rgba(232,119,56,0.6)] group-hover/item:scale-125 transition-transform duration-300" />
                        <span className="font-medium">{t('features.parking')}</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                        <CheckCircle className="text-[#E87738] w-5 h-5 shrink-0 drop-shadow-[0_0_10px_rgba(232,119,56,0.6)] group-hover/item:scale-125 transition-transform duration-300" />
                        <span className="font-medium">{t('features.courts')}</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                        <CheckCircle className="text-[#E87738] w-5 h-5 shrink-0 drop-shadow-[0_0_10px_rgba(232,119,56,0.6)] group-hover/item:scale-125 transition-transform duration-300" />
                        <span className="font-medium">{t('features.classes')}</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                        <CheckCircle className="text-[#E87738] w-5 h-5 shrink-0 drop-shadow-[0_0_10px_rgba(232,119,56,0.6)] group-hover/item:scale-125 transition-transform duration-300" />
                        <span className="font-medium">{t('features.tournaments')}</span>
                    </li>
                    <li className="flex items-center gap-3 group/item">
                        <CheckCircle className="text-[#E87738] w-5 h-5 shrink-0 drop-shadow-[0_0_10px_rgba(232,119,56,0.6)] group-hover/item:scale-125 transition-transform duration-300" />
                        <span className="font-medium">{t('features.community')}</span>
                    </li>
                </ul>

                {/* CTA / BOTÃO (Com shadow base estático e hover mais forte) */}
                <Link
                    href="/contactos"
                    className="w-fit flex items-center gap-2 bg-[#E87738] text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider relative z-10 shadow-[0_0_15px_rgba(232,119,56,0.4)] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#E87738] hover:to-[#ff9a66] hover:shadow-[0_0_25px_rgba(232,119,56,0.8)] hover:-translate-y-1"
                >
                    {t('cta')}
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>

            {/* Lado Direito - Imagem */}
            <div className="relative min-h-[400px] md:min-h-full">
                {/* Fade gradient suave para fundir o lado esquerdo com a imagem */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#111322] to-transparent z-10 hidden md:block pointer-events-none"></div>

                <Image
                    src={splitImg}
                    alt={t('imageAlt')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </section>
    );
}