"use client";

import { useState } from "react";
import { Link } from "@/navigation";
import { Check, Star, Zap, TrendingUp, CalendarDays, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

// --- DADOS DOS PREÇOS (Mantêm-se iguais pois são valores numéricos/fixos) ---
const adultPrices = [
    { pax: "1", oneWeek: "125€", twoWeek: "230€", single: "40€", pack5: "170€" },
    { pax: "2", oneWeek: "70€", twoWeek: "120€", single: "23€", pack5: "100€" },
    { pax: "3", oneWeek: "55€", twoWeek: "90€", single: "18€", pack5: "80€" },
    { pax: "4", oneWeek: "45€", twoWeek: "75€", single: "15€", pack5: "65€" },
];

const kidsPrices = [
    { pax: "1", oneWeek: "110€", twoWeek: "205€" },
    { pax: "2", oneWeek: "55€", twoWeek: "95€" },
    { pax: "3", oneWeek: "40€", twoWeek: "65€" },
    { pax: "4", oneWeek: "30€", twoWeek: "50€" },
];

const advancedPrices = [
    { turmas: "2", oneWeek: "120€", twoWeek: "225€", threeWeek: "325€", single: "40€" },
    { turmas: "3", oneWeek: "90€", twoWeek: "170€", threeWeek: "245€", single: "30€" },
    { turmas: "4", oneWeek: "75€", twoWeek: "140€", threeWeek: "200€", single: "25€" },
];

const rentalPrices = [
    { duration: "60", offPax: "5€", offCourt: "20€", peakPax: "6€", peakCourt: "24€" },
    { duration: "90", offPax: "7€", offCourt: "28€", peakPax: "8,5€", peakCourt: "34€" },
    { duration: "120", offPax: "9,5", offCourt: "38€", peakPax: "11,5€", peakCourt: "46€" },
];

export default function InteractivePricing() {
    // 3. Inicializar as traduções
    const t = useTranslations("Pricing");

    const [activeTab, setActiveTab] = useState("adults");

    // Estados dos filtros
    const [adultPax, setAdultPax] = useState("1");
    const [adultFreq, setAdultFreq] = useState("oneWeek");
    const [kidsPax, setKidsPax] = useState("1");
    const [kidsFreq, setKidsFreq] = useState("oneWeek");
    const [advTurma, setAdvTurma] = useState("2");
    const [advFreq, setAdvFreq] = useState("oneWeek");
    const [rentDuration, setRentDuration] = useState("60");
    const [rentTime, setRentTime] = useState("off");
    const [rentType, setRentType] = useState("Court");

    // Lógica de cálculo
    const getAdultPrice = () => {
        const row = adultPrices.find((r) => r.pax === adultPax);
        // @ts-ignore
        return row ? row[adultFreq] : "--";
    };

    const getKidsPrice = () => {
        const row = kidsPrices.find((r) => r.pax === kidsPax);
        // @ts-ignore
        return row ? row[kidsFreq] : "--";
    };

    const getAdvPrice = () => {
        const row = advancedPrices.find((r) => r.turmas === advTurma);
        // @ts-ignore
        return row ? row[advFreq] : "--";
    };

    const getRentPrice = () => {
        const row = rentalPrices.find((r) => r.duration === rentDuration);
        if (!row) return "--";
        const key = `${rentTime}${rentType}`;
        // @ts-ignore
        return row[key] || "--";
    };

    // Array de tabs movido para dentro para usar as traduções
    const tabs = [
        { id: "adults", label: t('tabs.adults'), icon: Star, color: "bg-blue-600" },
        { id: "kids", label: t('tabs.kids'), icon: Zap, color: "bg-orange-500" },
        { id: "advanced", label: t('tabs.advanced'), icon: TrendingUp, color: "bg-gray-800" },
        { id: "rental", label: t('tabs.rental'), icon: CalendarDays, color: "bg-red-600" },
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 -mt-10 relative z-10 scroll-mt-32" id="precos">
            {/* BOTÕES DE NAVEGAÇÃO (TABS) */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 ${
                            activeTab === tab.id ? `${tab.color} text-white ring-4 ring-white` : "bg-white text-gray-600 hover:bg-gray-50"
                        }`}
                    >
                        <tab.icon size={18} />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* ÁREA DE CONTEÚDO */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 min-h-[400px] flex flex-col md:flex-row">

                {/* LADO ESQUERDO: OPÇÕES */}
                <div className="p-8 md:w-1/2 flex flex-col justify-center space-y-6 bg-gray-50/50">

                    {/* --- OPÇÕES ADULTOS --- */}
                    {activeTab === "adults" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
                            <h3 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                                <Star className="text-yellow-500 fill-current" /> {t('adults.title')}
                            </h3>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('adults.paxLabel')}</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {["1", "2", "3", "4"].map((num) => (
                                        <button key={num} onClick={() => setAdultPax(num)} className={`py-2 rounded-lg font-bold border ${adultPax === num ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-200"}`}>{num}</button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('adults.freqLabel')}</label>
                                <select value={adultFreq} onChange={(e) => setAdultFreq(e.target.value)} className="w-full p-3 rounded-xl border border-gray-300 bg-white">
                                    <option value="oneWeek">{t('adults.freqOptions.oneWeek')}</option>
                                    <option value="twoWeek">{t('adults.freqOptions.twoWeek')}</option>
                                    <option value="single">{t('adults.freqOptions.single')}</option>
                                    <option value="pack5">{t('adults.freqOptions.pack5')}</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {/* --- OPÇÕES KIDS --- */}
                    {activeTab === "kids" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
                            <h3 className="text-2xl font-bold text-orange-600 flex items-center gap-2">
                                <Zap className="fill-current" /> {t('kids.title')}
                            </h3>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('kids.paxLabel')}</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {["1", "2", "3", "4"].map((num) => (
                                        <button key={num} onClick={() => setKidsPax(num)} className={`py-2 rounded-lg font-bold border ${kidsPax === num ? "bg-orange-500 text-white border-orange-500" : "bg-white text-gray-600 border-gray-200"}`}>{num}</button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('kids.freqLabel')}</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button onClick={() => setKidsFreq("oneWeek")} className={`p-3 rounded-xl border font-medium ${kidsFreq === 'oneWeek' ? 'bg-orange-100 border-orange-500 text-orange-800' : 'bg-white border-gray-200'}`}>
                                        {t('kids.freqOptions.oneWeek')}
                                    </button>
                                    <button onClick={() => setKidsFreq("twoWeek")} className={`p-3 rounded-xl border font-medium ${kidsFreq === 'twoWeek' ? 'bg-orange-100 border-orange-500 text-orange-800' : 'bg-white border-gray-200'}`}>
                                        {t('kids.freqOptions.twoWeek')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* --- OPÇÕES AVANÇADO --- */}
                    {activeTab === "advanced" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
                            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <TrendingUp /> {t('advanced.title')}
                            </h3>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('advanced.classSizeLabel')}</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {["2", "3", "4"].map((num) => (
                                        <button key={num} onClick={() => setAdvTurma(num)} className={`py-2 rounded-lg font-bold border ${advTurma === num ? "bg-gray-800 text-white border-gray-800" : "bg-white text-gray-600 border-gray-200"}`}>
                                            {num} {t('advanced.people')}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('advanced.freqLabel')}</label>
                                <select value={advFreq} onChange={(e) => setAdvFreq(e.target.value)} className="w-full p-3 rounded-xl border border-gray-300 bg-white">
                                    <option value="oneWeek">{t('advanced.freqOptions.oneWeek')}</option>
                                    <option value="twoWeek">{t('advanced.freqOptions.twoWeek')}</option>
                                    <option value="threeWeek">{t('advanced.freqOptions.threeWeek')}</option>
                                    <option value="single">{t('advanced.freqOptions.single')}</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {/* --- OPÇÕES ALUGUER --- */}
                    {activeTab === "rental" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
                            <h3 className="text-2xl font-bold text-red-600 flex items-center gap-2">
                                <CalendarDays /> {t('rental.title')}
                            </h3>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('rental.durationLabel')}</label>
                                <div className="flex gap-2">
                                    {["60", "90", "120"].map((min) => (
                                        <button key={min} onClick={() => setRentDuration(min)} className={`flex-1 py-2 rounded-lg font-bold border ${rentDuration === min ? "bg-red-600 text-white border-red-600" : "bg-white text-gray-600 border-gray-200"}`}>
                                            {min} {t('rental.min')}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t('rental.timeLabel')}</label>
                                    <select value={rentTime} onChange={(e) => setRentTime(e.target.value)} className="w-full p-2 rounded-lg border bg-white">
                                        <option value="off">{t('rental.timeOptions.off')}</option>
                                        <option value="peak">{t('rental.timeOptions.peak')}</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t('rental.typeLabel')}</label>
                                    <select value={rentType} onChange={(e) => setRentType(e.target.value)} className="w-full p-2 rounded-lg border bg-white">
                                        <option value="Court">{t('rental.typeOptions.court')}</option>
                                        <option value="Pax">{t('rental.typeOptions.pax')}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* LADO DIREITO: RESULTADO E BOTÃO DINÂMICO */}
                <div className={`md:w-1/2 p-8 flex flex-col justify-center items-center text-white relative overflow-hidden transition-colors duration-500
             ${activeTab === 'adults' ? 'bg-blue-600' :
                    activeTab === 'kids' ? 'bg-orange-500' :
                        activeTab === 'advanced' ? 'bg-gray-900' : 'bg-red-600'}`}>

                    <div className="relative z-10 text-center space-y-2">
                        <p className="uppercase tracking-widest text-sm font-medium opacity-80">{t('result.estimated')}</p>
                        <div className="text-7xl font-extrabold tracking-tight">
                            {activeTab === 'adults' && getAdultPrice()}
                            {activeTab === 'kids' && getKidsPrice()}
                            {activeTab === 'advanced' && getAdvPrice()}
                            {activeTab === 'rental' && getRentPrice()}
                        </div>
                        <p className="text-lg opacity-90 font-medium">
                            {activeTab === 'rental' ? t('result.perReservation') :
                                (activeTab === 'adults' && (adultFreq === 'single' || adultFreq === 'pack5')) ? t('result.total') :
                                    (activeTab === 'advanced' && advFreq === 'single') ? t('result.perClass') :
                                        t('result.perMonthPerson')}
                        </p>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/20 w-full">
                        <ul className="space-y-3 text-sm opacity-90">
                            <li className="flex items-center gap-2"><Check size={16} /> {t('result.features.coaches')}</li>
                            <li className="flex items-center gap-2"><Check size={16} /> {t('result.features.equipment')}</li>
                            {activeTab === 'rental' && <li className="flex items-center gap-2"><Clock size={16} /> {t('result.features.led')}</li>}
                        </ul>
                    </div>

                    {/* BOTÃO DINÂMICO AQUI */}
                    {activeTab === "rental" ? (
                        <a
                            href="https://go.tieplayer.com/link/ClubePadeldasCaldas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 bg-white text-gray-900 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full md:w-auto text-center inline-block"
                        >
                            {t('cta.book')}
                        </a>
                    ) : (
                        <Link
                            href="/aulas"
                            className="mt-8 bg-white text-gray-900 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full md:w-auto text-center inline-block"
                        >
                            {t('cta.subscribe')}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}