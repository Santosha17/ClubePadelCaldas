import { Trophy, Users, Coffee } from 'lucide-react';

export default function FeaturesGrid() {
    return (
        <section className="py-24 px-6 bg-brand-cream"> {/* Fundo Creme */}
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <span className="text-brand-terracotta font-bold tracking-widest uppercase text-sm">A Experiência</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mt-3">Porquê o nosso clube?</h2>
                    <div className="w-24 h-1 bg-brand-terracotta mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Card 1 */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                        <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-terracotta transition-colors">
                            <Trophy className="text-brand-navy group-hover:text-white w-8 h-8 transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Campos WPT</h3>
                        <p className="text-gray-600 leading-relaxed">
                            6 campos panorâmicos de última geração com relva oficial World Padel Tour para o máximo desempenho.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group mt-0 md:-mt-8">
                        <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-terracotta transition-colors">
                            <Users className="text-brand-navy group-hover:text-white w-8 h-8 transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Comunidade</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Mais do que um clube, uma família. Torneios mensais, rankings internos e eventos sociais regulares.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                        <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-terracotta transition-colors">
                            <Coffee className="text-brand-navy group-hover:text-white w-8 h-8 transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-4">Lounge Bar</h3>
                        <p className="text-gray-600 leading-relaxed">
                            O espaço perfeito para relaxar após o jogo. Snacks saudáveis, bebidas frescas e esplanada com vista.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}