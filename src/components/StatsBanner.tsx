'use client';

import { useTranslations } from 'next-intl';

export default function StatsBanner() {
    const t = useTranslations('Stats');

    return (
        <section className="bg-brand-navy py-16 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">

                    {/* Campos Reais */}
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-5xl font-black text-brand-terracotta mb-2">
                            {t('courts.value')}
                        </span>
                        <span className="text-white/60 text-sm font-bold tracking-widest uppercase">
                            {t('courts.label')}
                        </span>
                    </div>

                    {/* Comunidade / Balneários */}
                    <div className="flex flex-col items-center pl-8 md:pl-0">
                        <span className="text-4xl md:text-5xl font-black text-brand-terracotta mb-2">
                            {t('lockerRooms.value')}
                        </span>
                        <span className="text-white/60 text-sm font-bold tracking-widest uppercase">
                            {t('lockerRooms.label')}
                        </span>
                    </div>

                    {/* Aulas / Academia */}
                    <div className="flex flex-col items-center pl-8 md:pl-0">
                        <span className="text-4xl md:text-5xl font-black text-brand-terracotta mb-2">
                            {t('academy.value')}
                        </span>
                        <span className="text-white/60 text-sm font-bold tracking-widest uppercase">
                            {t('academy.label')}
                        </span>
                    </div>

                    {/* Bar / Social */}
                    <div className="flex flex-col items-center pl-8 md:pl-0">
                        <span className="text-4xl md:text-5xl font-black text-brand-terracotta mb-2">
                            {t('bar.value')}
                        </span>
                        <span className="text-white/60 text-sm font-bold tracking-widest uppercase">
                            {t('bar.label')}
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}