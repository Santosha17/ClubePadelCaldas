'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

// 1. COMPONENTES CRÍTICOS (LCP)
// Estes mantêm-se normais porque o utilizador vê-os assim que entra.
import Hero from '@/components/Hero';
import FeaturesGrid from '@/components/FeaturesGrid';
// Nota: O FeaturesGrid tem Framer Motion, é pesado, mas como está no topo,
// tem de carregar. Vamos otimizá-lo no Passo 2.

// 2. COMPONENTES DIFERIDOS (NO-SSR)
// Adicionamos { ssr: false } para remover o peso de hidratação inicial.
// O browser agora ignora o JS destes componentes nos primeiros segundos críticos.

const InteractivePricing = dynamic(() => import('@/components/InteractivePricing'), {
    ssr: false,
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" /> // Placeholder visual
});

const SplitSection = dynamic(() => import('@/components/SplitSection'), { ssr: false });
const StatsBanner = dynamic(() => import('@/components/StatsBanner'), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const Partners = dynamic(() => import('@/components/Partners'), { ssr: false });
const CTA = dynamic(() => import('@/components/CTA'), { ssr: false });

export default function Home() {
    const t = useTranslations('Homepage');

    return (
        <main className="min-h-screen bg-brand-bg text-brand-navy font-sans">
            <Hero />
            <FeaturesGrid />

            <section id="precos" className="py-24 bg-gray-50 scroll-mt-24">
                <div className="text-center mb-16 px-6">
                    <span className="text-brand-terracotta font-bold tracking-widest uppercase text-sm">
                        {t('pricingSection.label')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mt-3">
                        {t('pricingSection.title')}
                    </h2>
                    <div className="w-24 h-1 bg-brand-terracotta mx-auto mt-6 rounded-full"></div>
                </div>
                <InteractivePricing />
            </section>

            <SplitSection />
            <StatsBanner />
            <Testimonials />
            <Partners />
            <CTA />
        </main>
    );
}