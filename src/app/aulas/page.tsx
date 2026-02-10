import Image from "next/image";
import InteractivePricing from "@/components/InteractivePricing";

// --- DADOS DA EQUIPA (Sem Base de Dados) ---
const coaches = [
    {
        id: 1,
        name: "Bernardo Bastos",
        role: "Head Coach",
        level: "Nível 1",
        // Podes usar imagens da internet ou colocar na pasta public/
        image_url: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "João Silva",
        role: "Padel Coach",
        level: "Nível 2",
        image_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Marta Santos",
        role: "Kids Coach",
        level: "Nível 1",
        image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Pedro Costa",
        role: "Assistant Coach",
        level: "Estagiário",
        image_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function Aulas() {
    // Não há traduções, usamos texto direto
    return (
        <div className="bg-gray-50 pb-24">
            {/* 1. HERO SECTION */}
            <div className="relative bg-brand-navy py-24 pb-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-grid-lg text-white" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-navy border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-4">
            CPC Academy
          </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                        Escola de Padel
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Evolui o teu jogo com os melhores profissionais da região Oeste.
                        Aulas para todas as idades e níveis.
                    </p>
                </div>
            </div>

            {/* 2. TABELA DE PREÇOS INTERATIVA (Componente) */}
            <InteractivePricing />

            {/* 3. A EQUIPA (Dados Estáticos) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
                        A Nossa Equipa
                    </h2>
                    <div className="h-1.5 w-24 bg-brand-terracotta mx-auto mt-4 rounded-full"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Conhece os treinadores que te vão ajudar a chegar ao próximo nível.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coaches.map((coach) => (
                        <div
                            key={coach.id}
                            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
                        >
                            <div className="relative w-full aspect-[4/5] bg-gray-200 overflow-hidden">
                                <Image
                                    src={coach.image_url}
                                    alt={coach.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Overlay gradiente */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                                {/* Informação sobre a foto */}
                                <div className="absolute bottom-0 left-0 p-5 text-white w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <h3 className="text-xl font-bold leading-tight mb-1">
                                        {coach.name}
                                    </h3>
                                    <p className="text-brand-terracotta text-sm font-bold uppercase tracking-wide">
                                        {coach.role}
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 bg-white border-t border-gray-100 flex justify-between items-center mt-auto">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                  Certificação
                </span>
                                <span className="px-3 py-1 bg-gray-100 text-brand-navy text-xs font-bold rounded-full border border-gray-200">
                  {coach.level}
                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}