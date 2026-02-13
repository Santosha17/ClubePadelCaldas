import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Termos() {
    return (
        <main className="min-h-screen bg-brand-bg text-brand-navy font-sans flex flex-col">
            <Navbar />

            {/* O flex-grow empurra o footer para o fundo se houver pouco texto */}
            <section className="pt-40 pb-24 px-6 container mx-auto max-w-4xl flex-grow">
                <h1 className="text-4xl md:text-5xl font-black mb-10 text-brand-navy">
                    Termos e <span className="text-brand-terracotta">Condições</span>
                </h1>

                {/* Usamos text-gray-600 e space-y para formatar texto longo facilmente */}
                <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                        <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-PT')}
                    </p>

                    <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">1. Introdução</h2>
                    <p>
                        Bem-vindo ao Clube Padel Caldas. Ao utilizar os nossos serviços, alugar campos ou participar nas nossas aulas, concorda com os presentes termos e condições...
                    </p>
                    <p>
                        [Aqui deves colocar o texto legal fornecido pelo clube sobre regras de utilização, calçado obrigatório, etc.]
                    </p>

                    <h2 className="text-2xl font-bold text-brand-navy mt-10 mb-4">2. Reservas e Cancelamentos</h2>
                    <p>
                        As reservas de campos são efetuadas através da plataforma TiePlayer. O cancelamento sem custos deve ser feito com uma antecedência mínima de X horas...
                    </p>

                    {/* Adiciona mais parágrafos conforme necessário */}
                </div>
            </section>
        </main>
    );
}