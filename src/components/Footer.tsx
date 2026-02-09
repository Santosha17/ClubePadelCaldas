import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-navy text-white pt-20 pb-10 border-t-8 border-brand-terracotta" id="contactos">
            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 mb-16">

                {/* Coluna 1 */}
                <div>
                    <h3 className="text-2xl font-bold mb-6">CLUBE PADEL <span className="text-brand-terracotta">CALDAS</span></h3>
                    <p className="text-gray-400 leading-relaxed max-w-sm">
                        O clube de referência na zona Oeste. Vem fazer parte da nossa comunidade.
                    </p>
                </div>

                {/* Coluna 2 */}
                <div>
                    <h4 className="text-lg font-bold mb-6 tracking-widest uppercase">Contactos</h4>
                    <div className="space-y-4 text-gray-400">
                        <p className="flex items-center gap-3"><MapPin className="text-brand-terracotta" size={20}/> Zona Industrial das Caldas</p>
                        <p className="flex items-center gap-3"><Phone className="text-brand-terracotta" size={20}/> +351 912 345 678</p>
                        <p className="flex items-center gap-3"><Mail className="text-brand-terracotta" size={20}/> geral@clubepadelcaldas.pt</p>
                    </div>
                </div>

                {/* Coluna 3 */}
                <div>
                    <h4 className="text-lg font-bold mb-6 tracking-widest uppercase">Social</h4>
                    <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-terracotta transition-all">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-terracotta transition-all">
                            <Facebook size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Clube Padel Caldas. Todos os direitos reservados.
            </div>
        </footer>
    );
}