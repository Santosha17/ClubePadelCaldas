import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-navy text-white pt-20 pb-10 border-t-8 border-brand-terracotta" id="contactos">
            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 mb-16">

                {/* Coluna 1 */}
                <div>
                    <h3 className="text-2xl font-bold mb-6">CLUBE PADEL <span className="text-brand-terracotta">CALDAS</span></h3>
                    <p className="text-gray-400 leading-relaxed max-w-sm">
                        O clube de referência na região Oeste. Vem jogar, conviver e evoluir o teu padel num ambiente fantástico.
                    </p>
                </div>

                {/* Coluna 2 (Agora com links clicáveis) */}
                <div>
                    <h4 className="text-lg font-bold mb-6 tracking-widest uppercase">Contactos</h4>
                    <div className="space-y-4 text-gray-400">
                        <a
                            href="https://maps.google.com/?q=Rua+Pedro+Nunes+23+e+24,+2500-303+Caldas+da+Rainha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 hover:text-brand-terracotta transition-colors"
                        >
                            <MapPin className="text-brand-terracotta mt-1 shrink-0" size={20}/>
                            <span>Rua Pedro Nunes 23 e 24,<br/>2500-303 Caldas da Rainha</span>
                        </a>

                        <a
                            href="tel:+351922242632"
                            className="flex items-center gap-3 hover:text-brand-terracotta transition-colors"
                        >
                            <Phone className="text-brand-terracotta shrink-0" size={20}/>
                            <span>+351 922 242 632</span>
                        </a>

                        <a
                            href="mailto:geralcpcaldas@gmail.com"
                            className="flex items-center gap-3 hover:text-brand-terracotta transition-colors"
                        >
                            <Mail className="text-brand-terracotta shrink-0" size={20}/>
                            <span>geralcpcaldas@gmail.com</span>
                        </a>
                    </div>
                </div>

                {/* Coluna 3 */}
                <div>
                    <h4 className="text-lg font-bold mb-6 tracking-widest uppercase">Social</h4>
                    <div className="flex gap-4">
                        <a
                            href="https://www.instagram.com/clubepadeldascaldas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-terracotta transition-all"
                        >
                            <Instagram size={24} />
                        </a>
                        <a
                            href="https://www.facebook.com/clubepadeldascaldas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-terracotta transition-all"
                        >
                            <Facebook size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* BARRA INFERIOR - Direitos e Links Legais */}
            <div className="container mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                <div className="text-center md:text-left">
                    &copy; {new Date().getFullYear()} Clube Padel Caldas. Todos os direitos reservados.
                </div>

                <div className="flex flex-wrap justify-center gap-6 font-medium">
                    {/* Mais tarde podes criar estas páginas e apontar os links */}
                    <Link href="/faq" className="hover:text-brand-terracotta transition-colors">
                        FAQ
                    </Link>
                    <Link href="/termos" className="hover:text-brand-terracotta transition-colors">
                        Termos e Condições
                    </Link>
                    <Link href="/privacidade" className="hover:text-brand-terracotta transition-colors">
                        Política de Privacidade
                    </Link>
                </div>
            </div>
        </footer>
    );
}