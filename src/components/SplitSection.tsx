import Link from 'next/link';

export default function SplitSection() {
    return (
        <section className="grid md:grid-cols-2">
            {/* Lado Esquerdo - Texto com fundo Navy */}
            <div className="bg-brand-navy text-white p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
                {/* Elemento decorativo */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-terracotta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <span className="text-brand-terracotta font-bold tracking-widest uppercase mb-4 relative z-10">
          Academia CPC
        </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative z-10">
                    Evolui o teu jogo<br />com os melhores.
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8 text-lg relative z-10">
                    A nossa academia conta com treinadores certificados prontos para elevar o teu nível,
                    seja em aulas privadas, de grupo ou clínicas intensivas de fim de semana.
                </p>

                <Link
                    href="#academia"
                    className="w-fit border-b-2 border-brand-terracotta text-white pb-1 font-bold hover:text-brand-terracotta transition-colors relative z-10"
                >
                    CONHECER PLANOS
                </Link>
            </div>

            {/* Lado Direito - Imagem */}
            <div className="relative min-h-[400px]">
                <img
                    src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Treino Padel"
                />
            </div>
        </section>
    );
}