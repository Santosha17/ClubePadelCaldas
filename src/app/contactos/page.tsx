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
    MessageCircle
} from "lucide-react";

export default function Contactos() {
    // --- ESTADO DO FORMULÁRIO ---
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Número de destino (formato internacional sem + ou espaços)
        const phoneNumber = "351922242632";

        // 2. Construir a mensagem formatada
        // Os asteriscos (*) tornam o texto em negrito no WhatsApp
        // O \n cria uma nova linha
        const text = `*Novo Contacto via Site* 🎾\n\n` +
            `*Nome:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Assunto:* ${formData.subject}\n\n` +
            `*Mensagem:*\n${formData.message}`;

        // 3. Criar o link e abrir numa nova aba/janela
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-gray-50">

            {/* 1. HERO SECTION */}
            <div className="relative bg-brand-navy py-24 pb-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-grid-lg text-white" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-navy border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-4">
                        Fale Connosco
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                        Estamos à tua espera
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Tens dúvidas sobre aulas, aluguer de campos ou torneios?
                        Entra em contacto com a nossa equipa.
                    </p>
                </div>
            </div>

            {/* 2. CONTEÚDO PRINCIPAL (Grid) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-24">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* COLUNA DA ESQUERDA: Informações */}
                    <div className="lg:col-span-1 space-y-6">

                        {/* Cartão de Info */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                            <h3 className="text-xl font-bold text-brand-navy mb-6">Informações</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-terracotta shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase">Telefone</p>
                                        <a href="tel:+351922242632" className="text-brand-navy font-bold text-lg hover:text-brand-terracotta transition-colors">
                                            +351 922 242 632
                                        </a>
                                        <p className="text-xs text-gray-400 mt-1">Chamada para rede móvel nacional</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-terracotta shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase">Email</p>
                                        <a href="mailto:geralcpcaldas@gmail.com" className="text-brand-navy font-bold text-lg hover:text-brand-terracotta transition-colors break-all">
                                            geralcpcaldas@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-terracotta shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold uppercase">Morada</p>
                                        <p className="text-brand-navy font-medium leading-relaxed">
                                            Rua da Associação 26,<br />
                                            2500-752 Caldas da Rainha
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Redes Sociais */}
                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <p className="text-sm text-gray-500 font-bold uppercase mb-4">Segue-nos</p>
                                <div className="flex gap-4">
                                    <a href="https://www.facebook.com/clubepadeldascaldas" className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center hover:bg-brand-terracotta transition-colors">
                                        <Facebook size={20} />
                                    </a>
                                    <a href="https://www.instagram.com/clubepadeldascaldas" className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center hover:bg-brand-terracotta transition-colors">
                                        <Instagram size={20} />
                                    </a>
                                    <a href="https://wa.me/351922242632" className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center hover:bg-brand-terracotta transition-colors">
                                        <MessageCircle size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Cartão de Horário */}
                        <div className="bg-brand-navy rounded-3xl p-8 shadow-xl text-white">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="text-brand-terracotta" />
                                <h3 className="text-xl font-bold">Horário</h3>
                            </div>
                            <ul className="space-y-4 text-sm">
                                <li className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span className="text-gray-300">Segunda a Sexta</span>
                                    <span className="font-bold">07:30 - 00:00</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span className="text-gray-300">Sábados</span>
                                    <span className="font-bold">07:30 - 00:00</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="text-gray-300">Domingos e Feriados</span>
                                    <span className="font-bold">07:30 - 20:00</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* COLUNA DA DIREITA: Formulário */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 h-full">
                            <h2 className="text-3xl font-bold text-brand-navy mb-2">Envia uma mensagem</h2>
                            <p className="text-gray-600 mb-8">Prometemos ser breves na resposta.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Nome</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta focus:ring-2 focus:ring-brand-terracotta/20 outline-none transition-all bg-gray-50"
                                            placeholder="O teu nome"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta focus:ring-2 focus:ring-brand-terracotta/20 outline-none transition-all bg-gray-50"
                                            placeholder="email@exemplo.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Assunto</label>
                                    <input
                                        required
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta focus:ring-2 focus:ring-brand-terracotta/20 outline-none transition-all bg-gray-50"
                                        placeholder="Ex: Marcação de Aula, Dúvida..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta focus:ring-2 focus:ring-brand-terracotta/20 outline-none transition-all bg-gray-50 resize-none"
                                        placeholder="Como podemos ajudar?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-8 py-4 bg-brand-terracotta text-white font-bold rounded-xl shadow-lg hover:bg-brand-navy transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1"
                                >
                                    Enviar Mensagem <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* 3. MAPA (Full Width) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="w-full h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                    <iframe
                        // Este link usa o endereço e nome exatos para centrar o mapa
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.5130898307443!2d-9.160072887967734!3d39.42710107149748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18b31e2c3d7ee5%3A0x444812ba32cc6b39!2sClube%20Padel%20Caldas!5e1!3m2!1spt-PT!2spt!4v1771068270164!5m2!1spt-PT!2spt"
                        className="w-full h-full border-0"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização Clube Padel Caldas"
                    />
                </div>
            </div>
        </div>
    );
}