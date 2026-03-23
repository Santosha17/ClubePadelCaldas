'use client';

import { useTranslations } from 'next-intl';

export default function StatsBanner() {
    const t = useTranslations('Stats');

    return (
        <section className="relative bg-brand-navy py-16 border-y border-white/10 overflow-hidden">
            {/* Mantém o gradiente de fundo decorativo que quebra a cor sólida, pois não é o foco da queixa */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-terracotta/5 to-brand-navy pointer-events-none z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">

                    {/* Campos Reais */}
                    <div className="flex flex-col items-center cursor-default">
                        {/* CORREÇÃO AQUI: Removido o drop-shadow base e a transição desnecessária */}
                        <span className="font-heading text-5xl md:text-6xl font-black text-brand-terracotta mb-2">
                            {t('courts.value')}
                        </span>
                        {/* Removido também a transição de cor do texto */}
                        <span className="font-heading text-white/60 text-sm md:text-base font-bold tracking-widest uppercase mt-1">
                            {t('courts.label')}
                        </span>
                    </div>

                    {/* Comunidade / Balneários */}
                    <div className="flex flex-col items-center pl-8 md:pl-0 cursor-default">
                        {/* CORREÇÃO AQUI: Idem para todos os outros blocos */}
                        <span className="font-heading text-5xl md:text-6xl font-black text-brand-terracotta mb-2">
                            {t('lockerRooms.value')}
                        </span>
                        <span className="font-heading text-white/60 text-sm md:text-base font-bold tracking-widest uppercase mt-1">
                            {t('lockerRooms.label')}
                        </span>
                    </div>

                    {/* Aulas / Academia */}
                    <div className="flex flex-col items-center pl-8 md:pl-0 cursor-default">
                        <span className="font-heading text-5xl md:text-6xl font-black text-brand-terracotta mb-2">
                            {t('academy.value')}
                        </span>
                        <span className="font-heading text-white/60 text-sm md:text-base font-bold tracking-widest uppercase mt-1">
                            {t('academy.label')}
                        </span>
                    </div>

                    {/* Bar / Social */}
                    <div className="flex flex-col items-center pl-8 md:pl-0 cursor-default">
                        <span className="font-heading text-5xl md:text-6xl font-black text-brand-terracotta mb-2">
                            {t('bar.value')}
                        </span>
                        <span className="font-heading text-white/60 text-sm md:text-base font-bold tracking-widest uppercase mt-1">
                            {t('bar.label')}
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}