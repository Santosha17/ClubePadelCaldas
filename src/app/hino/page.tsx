import { Music, Heart, Star } from 'lucide-react';

export default function Hino() {
    return (
        <div className="bg-gray-50 pb-24">

            {/* 1. HERO SECTION */}
            <div className="relative bg-brand-navy py-24 pb-32 overflow-hidden">
                {/* Padrão de fundo decorativo */}
                <div className="absolute inset-0 opacity-10 pattern-grid-lg text-white" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-navy border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-4">
            CULTURA
          </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                        O Nosso Hino
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        A voz e a alma do Clube Padel Caldas.
                        Canta connosco!
                    </p>
                </div>
            </div>

            {/* 2. ÁREA DA LETRA */}
            <div className="max-w-3xl mx-auto px-4 -mt-20 relative z-10">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-gray-100 text-center relative overflow-hidden">

                    {/* Decoração de fundo */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-brand-terracotta to-blue-600"></div>
                    <Music className="w-16 h-16 text-brand-terracotta mx-auto mb-8 opacity-90" />

                    {/* --- A LETRA DO HINO (Substitui pelo texto real) --- */}
                    <div className="space-y-8 text-gray-600 text-lg md:text-xl leading-relaxed font-medium">

                        {/* Estrofe 1 */}
                        <div>
                            <p>Dá-me um amorti</p>
                            <p>Desses que pingam na tela</p>
                            <p>Saca uma por três</p>
                            <p>Saca uma por três</p>
                            <p>E rebenta-me com ela</p>
                        </div>

                        <div>
                            {/* Estrofe 2 */}
                            <p>E rebenta-me com ela</p>
                            <p>Queremos que venças por nós</p>
                            <p>Vou estar aqui para ti</p>
                            <p>Vou estar aqui para ti</p>
                            <p>Até que me falte a voz</p>
                        </div>

                        <div>
                            {/* Estrofe 3 */}
                            <p>Clube Padel das Caldas</p>
                            <p>Clube do meu coração</p>
                            <p>Dois Zero Dois Zero</p>
                            <p>Dois Zero Dois Zero</p>
                            <p>O ano da fundação</p>
                        </div>

                        <div>
                            {/* OUTRO */}
                            <p>Lo Lo Lo Lo</p>
                            <p>Lo Lo Lo Lo</p>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Heart className="text-brand-terracotta w-8 h-8 fill-current animate-pulse" />
                    </div>

                </div>
            </div>
        </div>
    );
}