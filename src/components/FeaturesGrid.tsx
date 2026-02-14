import Link from 'next/link';
import { Trophy, Dumbbell, Beer, ArrowRight } from 'lucide-react';

export default function FeaturesGrid() {
    return (
        <section className="py-24 px-6 bg-brand-bg" id="servicos">
            <div className="container mx-auto">
                {/* Cabeçalho da Secção */}
                <div className="text-center mb-20">
                    <span className="text-brand-terracotta font-bold tracking-widest uppercase text-sm">Serviços</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mt-3">Tudo para o teu jogo</h2>
                    <div className="w-24 h-1 bg-brand-terracotta mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">

                    {/* Card 1: Aluguer -> Link Externo (TiePlayer) */}
                    <a
                        href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col relative overflow-hidden"
                    >
                        <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-terracotta transition-colors">
                            <Trophy className="text-brand-navy group-hover:text-white w-8 h-8 transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                            Aluguer de Campos
                            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-terracotta" />
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Reserva facilmente através do Tieplayer. Temos 6 campos disponíveis com piso de alta qualidade e iluminação LED.
                        </p>
                        <span className="text-brand-terracotta font-bold text-sm uppercase tracking-wider mt-auto">Reservar Agora &rarr;</span>
                    </a>

                    {/* Card 2: Academia -> Link Interno (/aulas) */}
                    <Link
                        href="#precos"
                        className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group mt-0 md:-mt-8 flex flex-col relative overflow-hidden ring-4 ring-transparent hover:ring-brand-terracotta/10"
                    >
                        <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-terracotta transition-colors">
                            <Dumbbell className="text-brand-navy group-hover:text-white w-8 h-8 transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                            Academia CPC
                            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-terracotta" />
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Queres evoluir? Temos treinadores certificados para aulas individuais, de grupo ou clínicas de aperfeiçoamento.
                        </p>
                        <span className="text-brand-terracotta font-bold text-sm uppercase tracking-wider mt-auto">Ver Planos &rarr;</span>
                    </Link>

                    {/* Card 3: Bar & Loja -> Link Interno (/contactos) */}
                    <Link
                        href="/contactos"
                        className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col relative overflow-hidden"
                    >
                        <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-terracotta transition-colors">
                            <Beer className="text-brand-navy group-hover:text-white w-8 h-8 transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                            Bar & Loja
                            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-terracotta" />
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Material técnico das melhores marcas e um espaço lounge para relaxar e conviver após as partidas.
                        </p>
                        <span className="text-brand-terracotta font-bold text-sm uppercase tracking-wider mt-auto">Visitar &rarr;</span>
                    </Link>

                </div>
            </div>
        </section>
    );
}