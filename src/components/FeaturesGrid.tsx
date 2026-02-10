import { Trophy, Dumbbell, Beer } from 'lucide-react';

export default function FeaturesGrid() {
    return (
        // AQUI: mudei de bg-brand-cream para bg-brand-bg
        <section className="py-24 px-6 bg-brand-bg" id="servicos">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <span className="text-brand-terracotta font-bold tracking-widest uppercase text-sm">Serviços</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mt-3">Tudo para o teu jogo</h2>
                    <div className="w-24 h-1 bg-brand-terracotta mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Card 1 */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                        <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-terracotta transition-colors">
                            <Trophy className="text-brand-navy group-hover:text-white w-8 h-8 transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Aluguer de Campos</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Reserva facilmente através do Tieplayer. Temos 6 campos disponíveis com piso de alta qualidade e iluminação LED.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group mt-0 md:-mt-8">
                        <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-terracotta transition-colors">
                            <Dumbbell className="text-brand-navy group-hover:text-white w-8 h-8 transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Academia CPC</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Queres evoluir? Temos treinadores certificados para aulas individuais, de grupo ou clínicas de aperfeiçoamento.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                        <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-terracotta transition-colors">
                            <Beer className="text-brand-navy group-hover:text-white w-8 h-8 transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Bar & Loja</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Material técnico das melhores marcas e um espaço lounge para relaxar e conviver após as partidas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}