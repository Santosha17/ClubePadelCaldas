"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, User, Mail, Phone, Calendar, Trophy, Users, Heart } from "lucide-react";

// --- DADOS DA EQUIPA ---
const coaches = [
    {
        id: 1,
        name: "Bernardo Bastos",
        role: "Head Coach",
        level: "Nível 1",
        image_url: "" // Coloca aqui o caminho da imagem se tiveres
    },
    {
        id: 2,
        name: "João Fiúza",
        role: "Coach",
        level: "Nível 2",
        image_url: ""
    },
    {
        id: 3,
        name: "Rodrigo Fortunato",
        role: "Coach",
        level: "Nível 3",
        image_url: ""
    },
    {
        id: 4,
        name: "Miguel Agapito",
        role: "Coach",
        level: "Nível 1",
        image_url: ""
    },
    {
        id: 5,
        name: "Miguel Germano",
        role: "Coach",
        level: "Nível 2",
        image_url: ""
    }
];

export default function Aulas() {
    // --- ESTADO DO FORMULÁRIO ---
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        birthDate: "",
        level: "",
        availability: [] as string[], // Array para múltiplas escolhas
        termsAccepted: false
    });

    // Função para lidar com mudanças nos inputs normais
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Função para lidar com as checkboxes de disponibilidade
    const handleAvailabilityChange = (slot: string) => {
        setFormData(prev => {
            const current = prev.availability;
            if (current.includes(slot)) {
                return { ...prev, availability: current.filter(s => s !== slot) }; // Remove se já existe
            } else {
                return { ...prev, availability: [...current, slot] }; // Adiciona se não existe
            }
        });
    };

    // Função de Envio (Gera um mailto)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.termsAccepted) {
            alert("Por favor, aceite os Termos e Condições para continuar.");
            return;
        }

        const subject = `Nova Inscrição CPC Academy - ${formData.firstName} ${formData.lastName}`;
        const body = `
Nome: ${formData.firstName} ${formData.lastName}
Telemóvel: ${formData.phone}
Email: ${formData.email}
Data de Nascimento: ${formData.birthDate}
Nível: ${formData.level}
Disponibilidade: ${formData.availability.join(", ")}

Aceitou Termos: Sim
        `;

        window.location.href = `mailto:geralcpcaldas@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 space-y-20">

                {/* 2. INTRODUÇÃO ÀS AULAS (Cards de Benefícios) */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-50 text-brand-navy rounded-2xl flex items-center justify-center mb-6">
                            <Trophy size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3">Metodologia Comprovada</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Planos de treino adaptados ao teu nível, focados na técnica, tática e posicionamento em campo para uma evolução rápida.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center transform md:-translate-y-4">
                        <div className="w-16 h-16 bg-brand-terracotta/10 text-brand-terracotta rounded-2xl flex items-center justify-center mb-6">
                            <Users size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3">Comunidade Vibrante</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Entrar na CPC Academy é fazer parte de uma família. Organização de jogos, torneios internos e eventos sociais regulares.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-50 text-brand-navy rounded-2xl flex items-center justify-center mb-6">
                            <Heart size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3">Para Todos</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Desde os primeiros passos nas aulas Kids até à alta competição. Temos a turma certa para ti, independentemente da idade.
                        </p>
                    </div>
                </div>

                {/* 3. FORMULÁRIO DE INSCRIÇÃO */}
                <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">

                    {/* Lado Esquerdo - Imagem/Decorativo */}
                    <div className="md:w-1/3 bg-brand-navy relative p-10 flex flex-col justify-between text-white overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-20">
                            {/* Padrão de fundo opcional */}
                            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4">Junta-te a nós!</h3>
                            <p className="text-blue-100 mb-8">Preenche o formulário para agendarmos a tua avaliação de nível ou primeira aula.</p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3"><Check className="text-brand-terracotta" /> Avaliação Gratuita</li>
                                <li className="flex items-center gap-3"><Check className="text-brand-terracotta" /> Horários Flexíveis</li>
                                <li className="flex items-center gap-3"><Check className="text-brand-terracotta" /> Material Incluído</li>
                            </ul>
                        </div>
                        <div className="relative z-10 mt-10">
                            <p className="text-xs text-blue-300">Dúvidas?</p>
                            <p className="font-bold text-lg">+351 922 242 632</p>
                        </div>
                    </div>

                    {/* Lado Direito - O Formulário */}
                    <div className="md:w-2/3 p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Nome e Apelido */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Primeiro Nome</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 text-gray-400" size={20} />
                                        <input
                                            required
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta focus:ring-2 focus:ring-brand-terracotta/20 outline-none transition-all"
                                            placeholder="Ex: João"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Último Nome</label>
                                    <input
                                        required
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta focus:ring-2 focus:ring-brand-terracotta/20 outline-none transition-all"
                                        placeholder="Ex: Silva"
                                    />
                                </div>
                            </div>

                            {/* Contactos */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Telemóvel</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta focus:ring-2 focus:ring-brand-terracotta/20 outline-none transition-all"
                                            placeholder="912 345 678"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta focus:ring-2 focus:ring-brand-terracotta/20 outline-none transition-all"
                                            placeholder="joao@exemplo.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Data Nasc e Nível */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Data de Nascimento</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                                        <input
                                            required
                                            type="date"
                                            name="birthDate"
                                            value={formData.birthDate}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta focus:ring-2 focus:ring-brand-terracotta/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">O teu Nível</label>
                                    <select
                                        required
                                        name="level"
                                        value={formData.level}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta focus:ring-2 focus:ring-brand-terracotta/20 outline-none transition-all bg-white"
                                    >
                                        <option value="" disabled>Seleciona uma opção</option>
                                        <option value="Nunca Joguei">Nunca joguei / Menos de 10 vezes</option>
                                        <option value="Nível 5">Nível 5 (Iniciado)</option>
                                        <option value="Nível 4">Nível 4 (Intermédio Baixo)</option>
                                        <option value="Nível 3">Nível 3 (Intermédio)</option>
                                        <option value="Nível 2">Nível 2 (Avançado)</option>
                                        <option value="Nível 1">Nível 1 (Competição)</option>
                                        <option value="Kids">Kids (Crianças)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Disponibilidade */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-3">Disponibilidade Habitual</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {["07h30 - 13h00", "13h00 - 18h00", "18h00 - 00h00"].map((slot) => (
                                        <label key={slot} className={`
                                            cursor-pointer border rounded-xl p-3 text-center text-sm font-medium transition-all
                                            ${formData.availability.includes(slot)
                                            ? 'bg-brand-navy text-white border-brand-navy'
                                            : 'bg-white text-gray-600 border-gray-200 hover:border-brand-navy/30'}
                                        `}>
                                            <input
                                                type="checkbox"
                                                className="hidden"
                                                checked={formData.availability.includes(slot)}
                                                onChange={() => handleAvailabilityChange(slot)}
                                            />
                                            {slot}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Termos e Condições */}
                            <div className="pt-4">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="mt-1 w-5 h-5 text-brand-terracotta rounded border-gray-300 focus:ring-brand-terracotta"
                                        checked={formData.termsAccepted}
                                        onChange={(e) => setFormData({...formData, termsAccepted: e.target.checked})}
                                    />
                                    <span className="text-sm text-gray-600">
                                        Declaro que li e aceito os <Link href="/termos" className="text-brand-terracotta font-bold hover:underline" target="_blank">Termos e Condições</Link> do regulamento do CPC Academy 25/26.
                                    </span>
                                </label>
                            </div>

                            {/* Botão de Envio */}
                            <button
                                type="submit"
                                className="w-full bg-brand-terracotta text-white font-bold py-4 rounded-xl shadow-lg hover:bg-brand-navy hover:shadow-xl transition-all transform hover:-translate-y-1"
                            >
                                Enviar Inscrição
                            </button>
                        </form>
                    </div>
                </div>

                {/* 4. A EQUIPA */}
                <div className="pt-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
                            A Nossa Equipa
                        </h2>
                        <div className="h-1.5 w-24 bg-brand-terracotta mx-auto mt-4 rounded-full"></div>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Conhece os treinadores disponíveis que te vão ajudar a chegar ao próximo nível.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {coaches.map((coach) => (
                            <div
                                key={coach.id}
                                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                            >
                                <div className="relative w-full aspect-[4/5] bg-gray-200 overflow-hidden">
                                    {coach.image_url ? (
                                        <Image
                                            src={coach.image_url}
                                            alt={coach.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                                            <User size={48} />
                                        </div>
                                    )}

                                    {/* Overlay gradiente */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                                    {/* Informação sobre a foto */}
                                    <div className="absolute bottom-0 left-0 p-4 text-white w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                        <h3 className="text-lg font-bold leading-tight mb-1">
                                            {coach.name}
                                        </h3>
                                        <p className="text-brand-terracotta text-xs font-bold uppercase tracking-wide">
                                            {coach.role}
                                        </p>
                                    </div>
                                </div>

                                <div className="p-3 bg-white border-t border-gray-100 flex justify-between items-center mt-auto">
                                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                                        Nível
                                    </span>
                                    <span className="px-2 py-1 bg-gray-100 text-brand-navy text-[10px] font-bold rounded-full border border-gray-200">
                                        {coach.level}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}