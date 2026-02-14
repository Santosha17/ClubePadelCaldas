export default function StatsBanner() {
    return (
        <section className="bg-brand-navy py-16 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">

                    {/* Campos Reais */}
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-5xl font-black text-brand-terracotta mb-2">6</span>
                        <span className="text-white/60 text-sm font-bold tracking-widest uppercase">Campos (5+1)</span>
                    </div>

                    {/* Comunidade */}
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-5xl font-black text-brand-terracotta mb-2">M/F</span>
                        <span className="text-white/60 text-sm font-bold tracking-widest uppercase">Balneários</span>
                    </div>

                    {/* Aulas */}
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-5xl font-black text-brand-terracotta mb-2">CPC</span>
                        <span className="text-white/60 text-sm font-bold tracking-widest uppercase">Academia</span>
                    </div>

                    {/* Bar */}
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-5xl font-black text-brand-terracotta mb-2">Bar</span>
                        <span className="text-white/60 text-sm font-bold tracking-widest uppercase">Zona Social</span>
                    </div>

                </div>
            </div>
        </section>
    );
}