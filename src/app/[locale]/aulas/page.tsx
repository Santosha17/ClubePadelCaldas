"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { Check, User, Mail, Phone, Calendar, Trophy, Users, Heart } from "lucide-react";
import { useTranslations } from "next-intl";

export const runtime = 'edge';

// --- DADOS DA EQUIPA ---
const coaches = [
    { id: 1, name: "Bernardo Bastos", role: "Head Coach", level: "Nível 1", image_url: "" },
    { id: 2, name: "João Fiúza", role: "Coach", level: "Nível 2", image_url: "" },
    { id: 3, name: "Rodrigo Fortunato", role: "Coach", level: "Nível 3", image_url: "" },
    { id: 4, name: "Miguel Agapito", role: "Coach", level: "Nível 1", image_url: "" },
    { id: 5, name: "Miguel Germano", role: "Coach", level: "Nível 2", image_url: "" }
];

export default function Aulas() {
    const t = useTranslations('Academy');

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        birthDate: "",
        level: "",
        availability: [] as string[],
        termsAccepted: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAvailabilityChange = (slot: string) => {
        setFormData(prev => {
            const current = prev.availability;
            if (current.includes(slot)) {
                return { ...prev, availability: current.filter(s => s !== slot) };
            } else {
                return { ...prev, availability: [...current, slot] };
            }
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.termsAccepted) {
            alert(t('form.alertTerms'));
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 space-y-20">

                {/* 2. INTRODUÇÃO ÀS AULAS */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-50 text-brand-navy rounded-2xl flex items-center justify-center mb-6">
                            <Trophy size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3">{t('benefits.methodology.title')}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{t('benefits.methodology.description')}</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center transform md:-translate-y-4">
                        <div className="w-16 h-16 bg-brand-terracotta/10 text-brand-terracotta rounded-2xl flex items-center justify-center mb-6">
                            <Users size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3">{t('benefits.community.title')}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{t('benefits.community.description')}</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-50 text-brand-navy rounded-2xl flex items-center justify-center mb-6">
                            <Heart size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3">{t('benefits.everyone.title')}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{t('benefits.everyone.description')}</p>
                    </div>
                </div>

                {/* 3. FORMULÁRIO DE INSCRIÇÃO */}
                <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-brand-navy relative p-10 flex flex-col justify-between text-white overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4">{t('form.sidebar.title')}</h3>
                            <p className="text-blue-100 mb-8">{t('form.sidebar.subtitle')}</p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3"><Check className="text-brand-terracotta" /> {t('form.sidebar.item1')}</li>
                                <li className="flex items-center gap-3"><Check className="text-brand-terracotta" /> {t('form.sidebar.item2')}</li>
                                <li className="flex items-center gap-3"><Check className="text-brand-terracotta" /> {t('form.sidebar.item3')}</li>
                            </ul>
                        </div>
                        <div className="relative z-10 mt-10">
                            <p className="text-xs text-blue-300">{t('form.sidebar.help')}</p>
                            <p className="font-bold text-lg">+351 922 242 632</p>
                        </div>
                    </div>

                    <div className="md:w-2/3 p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{t('form.fields.firstName')}</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 text-gray-400" size={20} />
                                        <input
                                            required name="firstName" value={formData.firstName} onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta outline-none transition-all"
                                            placeholder={t('form.placeholders.firstName')}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{t('form.fields.lastName')}</label>
                                    <input
                                        required name="lastName" value={formData.lastName} onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta outline-none transition-all"
                                        placeholder={t('form.placeholders.lastName')}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{t('form.fields.phone')}</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                                        <input
                                            required name="phone" value={formData.phone} onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta outline-none transition-all"
                                            placeholder={t('form.placeholders.phone')}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{t('form.fields.email')}</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                                        <input
                                            required type="email" name="email" value={formData.email} onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta outline-none transition-all"
                                            placeholder={t('form.placeholders.email')}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{t('form.fields.birthDate')}</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                                        <input
                                            required type="date" name="birthDate" value={formData.birthDate} onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{t('form.fields.level')}</label>
                                    <select
                                        required name="level" value={formData.level} onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-terracotta outline-none transition-all bg-white"
                                    >
                                        <option value="" disabled>{t('form.placeholders.select')}</option>
                                        <option value="none">{t('form.levels.none')}</option>
                                        <option value="l5">{t('form.levels.l5')}</option>
                                        <option value="l4">{t('form.levels.l4')}</option>
                                        <option value="l3">{t('form.levels.l3')}</option>
                                        <option value="l2">{t('form.levels.l2')}</option>
                                        <option value="l1">{t('form.levels.l1')}</option>
                                        <option value="kids">{t('form.levels.kids')}</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-3">{t('form.fields.availability')}</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {["07h30 - 13h00", "13h00 - 18h00", "18h00 - 00h00"].map((slot) => (
                                        <label key={slot} className={`
                                            cursor-pointer border rounded-xl p-3 text-center text-sm font-medium transition-all
                                            ${formData.availability.includes(slot) ? 'bg-brand-navy text-white' : 'bg-white border-gray-200'}
                                        `}>
                                            <input type="checkbox" className="hidden" checked={formData.availability.includes(slot)} onChange={() => handleAvailabilityChange(slot)} />
                                            {slot}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox" checked={formData.termsAccepted}
                                        onChange={(e) => setFormData({...formData, termsAccepted: e.target.checked})}
                                        className="mt-1 w-5 h-5 text-brand-terracotta rounded border-gray-300"
                                    />
                                    <span className="text-sm text-gray-600">
                                        {/* Exemplo de como usar link dentro de tradução estruturada */}
                                        {t.rich('form.fields.terms', {
                                            link: (chunks) => <Link href="/termos" className="text-brand-terracotta font-bold hover:underline" target="_blank">{t('form.fields.termsLink')}</Link>
                                        })}
                                    </span>
                                </label>
                            </div>

                            <button type="submit" className="w-full bg-brand-terracotta text-white font-bold py-4 rounded-xl shadow-lg transition-all">
                                {t('form.submit')}
                            </button>
                        </form>
                    </div>
                </div>

                {/* 4. A EQUIPA */}
                <div className="pt-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">{t('team.title')}</h2>
                        <div className="h-1.5 w-24 bg-brand-terracotta mx-auto mt-4 rounded-full"></div>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{t('team.subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {coaches.map((coach) => (
                            <div key={coach.id} className="group bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
                                <div className="relative w-full aspect-[4/5] bg-gray-200 overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                                        <User size={48} />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-4 text-white">
                                        <h3 className="text-lg font-bold">{coach.name}</h3>
                                        <p className="text-brand-terracotta text-xs font-bold uppercase">{coach.role}</p>
                                    </div>
                                </div>
                                <div className="p-3 bg-white flex justify-between items-center mt-auto">
                                    <span className="text-[10px] text-gray-500 font-bold uppercase">{t('team.levelLabel')}</span>
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