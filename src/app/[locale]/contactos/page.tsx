"use client";

import { useState } from "react";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    Facebook,
    Instagram,
    MessageCircle,
    Navigation
} from "lucide-react";
import { useTranslations } from "next-intl";

export const runtime = 'edge';

export default function Contactos() {
    const t = useTranslations('Contacts');

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    // --- 1. FUNÇÃO PARA ATUALIZAR OS CAMPOS DO FORMULÁRIO ---
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // --- 2. LÓGICA DE MAPAS INTELIGENTE (PIN VERMELHO NO MOBILE) ---
    const openInGPS = () => {
        const lat = 39.4271011;
        const lng = -9.1574926;
        const label = encodeURIComponent("Clube Padel Caldas");
        const placeId = "ChIJ5X49LB6zGA0ROWvMMroSSEQ";

        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

        if (isIOS) {
            // iOS: Apple Maps com Pin
            window.open(`maps://maps.apple.com/?q=${label}&ll=${lat},${lng}`, '_blank');
        } else {
            // Android e Desktop: Google Maps Search API (O melhor para mostrar o pin vermelho)
            window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${placeId}`, '_blank');
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phoneNumber = "351922242632";
        const text = `${t('form.whatsappPrefix')}\n\n` +
            `*${t('form.fields.name')}:* ${formData.name}\n` +
            `*${t('form.fields.email')}:* ${formData.email}\n` +
            `*${t('form.fields.subject')}:* ${formData.subject}\n\n` +
            `*${t('form.fields.message')}:*\n${formData.message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-gray-50">
            {/* HERO SECTION */}
            <div className="relative bg-brand-navy py-24 pb-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-grid-lg text-white" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-navy border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-4">
                        {t('hero.label')}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                        {t('hero.title')}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('hero.subtitle')}
                    </p>
                </div>
            </div>

            {/* CONTEÚDO PRINCIPAL */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-24">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* COLUNA ESQUERDA: Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                            <h3 className="text-xl font-bold text-brand-navy mb-6">{t('info.title')}</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-terracotta shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase">{t('info.phone')}</p>
                                        <a href="tel:+351922242632" className="text-brand-navy font-bold text-lg hover:text-brand-terracotta transition-colors">+351 922 242 632</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-terracotta shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-sm text-gray-500 font-bold uppercase">{t('info.address')}</p>
                                        <p className="text-brand-navy font-medium leading-relaxed mb-3">
                                            Rua Pedro Nunes 23 e 24,<br />
                                            2500-303 Caldas da Rainha
                                        </p>
                                        <button onClick={openInGPS} className="flex items-center gap-2 text-xs font-bold text-brand-terracotta border border-brand-terracotta/20 px-3 py-2 rounded-lg hover:bg-brand-terracotta hover:text-white transition-all uppercase tracking-wider">
                                            <Navigation size={14} /> Abrir no GPS
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* HORÁRIO */}
                        <div className="bg-brand-navy rounded-3xl p-8 shadow-xl text-white">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="text-brand-terracotta" />
                                <h3 className="text-xl font-bold">{t('schedule.title')}</h3>
                            </div>
                            <ul className="space-y-4 text-sm">
                                <li className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span className="text-gray-300">{t('schedule.weekdays')}</span>
                                    <span className="font-bold">07:30 - 00:00</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="text-gray-300">{t('schedule.sundays')}</span>
                                    <span className="font-bold">07:30 - 20:00</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* FORMULÁRIO */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 h-full">
                            <h2 className="text-3xl font-bold text-brand-navy mb-2">{t('form.title')}</h2>
                            <p className="text-gray-600 mb-8">{t('form.subtitle')}</p>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">{t('form.fields.name')}</label>
                                        <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta outline-none transition-all bg-gray-50" placeholder={t('form.placeholders.name')} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">{t('form.fields.email')}</label>
                                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta outline-none transition-all bg-gray-50" placeholder={t('form.placeholders.email')} />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{t('form.fields.subject')}</label>
                                    <input required type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta outline-none transition-all bg-gray-50" placeholder={t('form.placeholders.subject')} />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{t('form.fields.message')}</label>
                                    <textarea required name="message" value={formData.message} onChange={handleChange} rows={6} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta outline-none transition-all bg-gray-50 resize-none" placeholder={t('form.placeholders.message')} />
                                </div>
                                <button type="submit" className="w-full md:w-auto px-8 py-4 bg-brand-terracotta text-white font-bold rounded-xl shadow-lg hover:bg-brand-navy transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                                    {t('form.submit')} <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- 3. MAPA COM PIN VERMELHO GARANTIDO (IFRAME CORRIGIDO) --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="relative w-full h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.565985172283!2d-9.159681223456394!3d39.42710107221805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18b31e2c3d7e65%3A0x484812ba32cc6bd1!2sClube%20Padel%20Caldas!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt"
                        className="w-full h-full border-0"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização Clube Padel Caldas"
                    />

                    <div className="absolute bottom-6 right-6">
                        <button
                            onClick={openInGPS}
                            className="bg-brand-navy text-white px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-3 hover:bg-brand-terracotta transition-all transform hover:scale-105"
                        >
                            <Navigation size={20} className="fill-current" />
                            ABRIR NO GPS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}