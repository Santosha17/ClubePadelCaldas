import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Privacidade() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-navy font-sans flex flex-col">
            <Navbar />

            <section className="pt-40 pb-24 px-6 container mx-auto max-w-4xl flex-grow">
                <h1 className="text-4xl md:text-5xl font-black mb-10 text-brand-navy">
                    Política de <span className="text-brand-terracotta">Privacidade</span>
                </h1>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                        <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-PT')}
                    </p>

                    <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">1. Recolha de Dados</h2>
                    <p>
                        O Clube Padel Caldas respeita a sua privacidade. Recolhemos apenas os dados estritamente necessários para a prestação dos nossos serviços de reserva e faturação...
                    </p>
                    <p>
                        [Aqui deves colocar o texto legal sobre RGPD, como guardam contactos, se usam câmaras de videovigilância no clube, etc.]
                    </p>

                    <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">2. Partilha de Informação</h2>
                    <p>
                        Não partilhamos os seus dados pessoais com terceiros, exceto quando estritamente necessário para o processamento de reservas (ex: TiePlayer) ou obrigações legais.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}