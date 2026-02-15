import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function CTA() {
    const t = useTranslations('CTA');

    return (
        <section className="relative py-24 bg-brand-navy overflow-hidden">
            {/* Background Decorativo (Abstrato) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-terracotta/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    {t('title')}
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    {t('description')}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-brand-terracotta text-white font-bold rounded-full shadow-lg hover:shadow-brand-terracotta/50 hover:scale-105 transition-all duration-300 text-lg"
                    >
                        {t('buttons.book')}
                    </a>
                    <Link
                        href="/contactos"
                        className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-brand-navy transition-all duration-300 text-lg"
                    >
                        {t('buttons.contact')}
                    </Link>
                </div>
            </div>
        </section>
    );
}