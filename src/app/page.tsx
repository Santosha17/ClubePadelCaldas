import Hero from '@/components/Hero';
import FeaturesGrid from '@/components/FeaturesGrid';
import SplitSection from '@/components/SplitSection';
import StatsBanner from '@/components/StatsBanner';
import InteractivePricing from '@/components/InteractivePricing';
import Testimonials from "@/components/Testimonials";
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';

export default function Home() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-navy font-sans">
            <Hero />
            <FeaturesGrid />

            <section id="precos" className="py-24 bg-gray-50 scroll-mt-24">
                <div className="text-center mb-16 px-6">
                    <span className="text-brand-terracotta font-bold tracking-widest uppercase text-sm">Preçário</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mt-3">Calcula o teu plano</h2>
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