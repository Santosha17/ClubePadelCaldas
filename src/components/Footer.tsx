'use client';

// 1. MUDAR O IMPORT DO LINK
import { Link } from '@/navigation';
import {MapPin, Phone, Mail, Instagram, Facebook, Youtube} from 'lucide-react';
// 2. IMPORTAR O HOOK
import { useTranslations } from 'next-intl';

export default function Footer() {
    // 3. INICIALIZAR AS TRADUÇÕES (Secção 'Footer')
    const t = useTranslations('Footer');

    return (
        <footer className="bg-brand-navy text-white relative overflow-hidden border-t-4 border-brand-terracotta shadow-[0_-15px_40px_rgba(232,119,56,0.1)]" id="contactos">

            {/* Efeito decorativo de fundo */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-terracotta/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none z-0"></div>

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid md:grid-cols-3 gap-16 mb-16">

                    {/* Coluna 1 - Marca */}
                    <div>
                        <h3 className="font-heading text-3xl font-black mb-6 tracking-wide drop-shadow-md">
                            CLUBE PADEL <span className="text-brand-terracotta drop-shadow-[0_0_10px_rgba(232,119,56,0.4)]">CALDAS</span>
                        </h3>
                        <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
                            {t('description')}
                        </p>
                    </div>

                    {/* Coluna 2 - Contactos */}
                    <div>
                        <h4 className="font-heading text-xl font-bold mb-8 tracking-widest uppercase text-white/90">
                            {t('sections.contacts')}
                        </h4>
                        <div className="space-y-6 text-gray-400 font-medium">
                            <a
                                href="https://maps.google.com/?q=Rua+Pedro+Nunes+23+e+24,+2500-303+Caldas+da+Rainha"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-4 hover:text-white transition-colors duration-300 group"
                            >
                                <div className="bg-brand-terracotta/10 p-3 rounded-xl group-hover:bg-brand-terracotta transition-colors duration-300 shrink-0">
                                    <MapPin className="text-brand-terracotta group-hover:text-white transition-colors" size={20}/>
                                </div>
                                <span className="mt-1 leading-relaxed">Rua Pedro Nunes 23 e 24,<br/>2500-303 Caldas da Rainha</span>
                            </a>

                            <a
                                href="tel:+351922242632"
                                className="flex items-center gap-4 hover:text-white transition-colors duration-300 group"
                            >
                                <div className="bg-brand-terracotta/10 p-3 rounded-xl group-hover:bg-brand-terracotta transition-colors duration-300 shrink-0">
                                    <Phone className="text-brand-terracotta group-hover:text-white transition-colors" size={20}/>
                                </div>
                                <span className="tracking-wider">+351 922 242 632</span>
                            </a>

                            <a
                                href="mailto:geralcpcaldas@gmail.com"
                                className="flex items-center gap-4 hover:text-white transition-colors duration-300 group"
                            >
                                <div className="bg-brand-terracotta/10 p-3 rounded-xl group-hover:bg-brand-terracotta transition-colors duration-300 shrink-0">
                                    <Mail className="text-brand-terracotta group-hover:text-white transition-colors" size={20}/>
                                </div>
                                <span>geralcpcaldas@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Coluna 3 - Redes Sociais */}
                    <div>
                        <h4 className="font-heading text-xl font-bold mb-8 tracking-widest uppercase text-white/90">
                            {t('sections.social')}
                        </h4>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/clubepadeldascaldas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-terracotta hover:border-brand-terracotta hover:shadow-[0_0_20px_rgba(232,119,56,0.6)] hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <Instagram className="text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" size={24} />
                            </a>
                            <a
                                href="https://www.facebook.com/clubepadeldascaldas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-terracotta hover:border-brand-terracotta hover:shadow-[0_0_20px_rgba(232,119,56,0.6)] hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <Facebook className="text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" size={24} />
                            </a>
                            <a
                                href="https://www.youtube.com/@ClubePadeldasCaldas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-terracotta hover:border-brand-terracotta hover:shadow-[0_0_20px_rgba(232,119,56,0.6)] hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <Youtube className="text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* BARRA INFERIOR - Direitos e Links Legais */}
            <div className="border-t border-white/10 bg-black/20 relative z-10">
                <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <div className="text-center md:text-left font-medium">
                        © {new Date().getFullYear()} {t('copyright')}
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 font-bold tracking-wide">
                        <Link href="/faq" className="font-heading uppercase hover:text-brand-terracotta transition-colors duration-300">
                            {t('legal.faq')}
                        </Link>
                        <Link href="/termos" className="font-heading uppercase hover:text-brand-terracotta transition-colors duration-300">
                            {t('legal.terms')}
                        </Link>
                        <Link href="/privacidade" className="font-heading uppercase hover:text-brand-terracotta transition-colors duration-300">
                            {t('legal.privacy')}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}