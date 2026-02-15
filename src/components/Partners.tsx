'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

// Importa as imagens (mantive os caminhos originais)
import akiDelMar from '../assets/partners/aki_del_mar_mariscos.png';
import autoJulio from '../assets/partners/auto_julio_grupo.png';
import digitalPerspective from '../assets/partners/digital_perspective.png';
import fastio from '../assets/partners/fastio.png';
import futureProcedure from '../assets/partners/future_procedure_wback.png';
import heineken from '../assets/partners/heineken.png';
import transwhite from '../assets/partners/transwhite.png';

const partners = [
    { name: "Aki Del Mar Mariscos", logo: akiDelMar },
    { name: "Auto Julio", logo: autoJulio },
    { name: "Digital Perspective", logo: digitalPerspective },
    { name: "Fastio", logo: fastio },
    { name: "Future Procedure", logo: futureProcedure },
    { name: "Heineken", logo: heineken },
    { name: "Transwhite", logo: transwhite },
];

export default function Partners() {
    // Inicializa o hook na secção 'Partners'
    const t = useTranslations('Partners');

    return (
        <section className="py-12 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
                    {/* Texto Traduzido: "Parceiros Oficiais" */}
                    {t('title')}
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="relative w-28 md:w-32 h-14 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer"
                        >
                            <Image
                                src={partner.logo}
                                // Texto Traduzido no Alt: "Parceiro [Nome]"
                                alt={`${t('altPrefix')} ${partner.name}`}
                                className="object-contain"
                                fill
                                sizes="(max-width: 768px) 50vw, 15vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}