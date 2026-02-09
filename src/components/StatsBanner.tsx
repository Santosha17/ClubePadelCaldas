export default function StatsBanner() {
    return (
        <section className="bg-brand-navy py-16 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">

                    {/* Stat 1 */}
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-5xl font-black text-brand-terracotta mb-2">6</span>
                        <span className="text-white/60 text-sm font-bold tracking-widest uppercase">Campos WPT</span>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-5xl font-black text-brand-terracotta mb-2">5</span>
                        <span className="text-white/60 text-sm font-bold tracking-widest uppercase">Treinadores</span>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-5xl font-black text-brand-terracotta mb-2">20+</span>
                        <span className="text-white/60 text-sm font-bold tracking-widest uppercase">Torneios/Ano</span>
                    </div>

                    {/* Stat 4 */}
                    <div className="flex flex-col items-center">
                        <span className="text-4xl md:text-5xl font-black text-brand-terracotta mb-2">365</span>
                        <span className="text-white/60 text-sm font-bold tracking-widest uppercase">Dias de Padel</span>
                    </div>

                </div>
            </div>
        </section>
    );
}