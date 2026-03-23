import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function CTA() {
    const t = useTranslations('CTA');

    return (
        <section className="relative py-24 bg-brand-navy overflow-hidden">
            {/* Background Decorativo (Abstrato) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                {/* Aumentei ligeiramente a opacidade do Terracotta para dar mais cor ao fundo escuro */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-terracotta/30 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 animate-slow-zoom"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                {/* 1. TÍTULO: Adicionado font-heading, uppercase e tamanho ligeiramente maior */}
                <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight drop-shadow-xl">
                    {t('title')}
                </h2>

                {/* A descrição mantém a fonte base (Geist) para garantir a leitura perfeita */}
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    {t('description')}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
                    {/* 2. BOTÃO RESERVAR: font-heading, uppercase, e glow dinâmico */}
                    <a
                        href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading tracking-widest uppercase px-8 py-4 bg-brand-terracotta text-white font-bold rounded-full shadow-[0_0_15px_rgba(232,119,56,0.4)] hover:shadow-[0_0_25px_rgba(232,119,56,0.8)] hover:-translate-y-1 transition-all duration-300 text-lg"
                    >
                        {t('buttons.book')}
                    </a>

                    {/* 3. BOTÃO CONTACTOS: font-heading, uppercase, e glow branco no hover */}
                    <Link
                        href="/contactos"
                        className="font-heading tracking-widest uppercase px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-brand-navy shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 text-lg"
                    >
                        {t('buttons.contact')}
                    </Link>
                </div>
            </div>
        </section>
    );
}