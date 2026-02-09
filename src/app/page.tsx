import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesGrid from '@/components/FeaturesGrid';
import SplitSection from '@/components/SplitSection';
import StatsBanner from '@/components/StatsBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
      <main className="min-h-screen bg-brand-cream text-brand-navy font-sans">
        <Navbar />
        <Hero />
        <FeaturesGrid />
        <SplitSection />
        <StatsBanner />
        <Footer />
      </main>
  );
}