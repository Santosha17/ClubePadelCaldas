'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Como faço para reservar um campo?",
        answer: "A forma mais rápida é através da nossa página no TiePlayer. Podes ver a disponibilidade em tempo real e reservar logo. Também podes ligar ou enviar WhatsApp se preferires."
    },
    {
        question: "É preciso ser sócio para jogar?",
        answer: "Não! O Clube Padel Caldas é aberto a todos. Podes alugar campos ou ter aulas sem ser sócio. No entanto, tornar-te sócio dá-te acesso a preços reduzidos e prioridade na marcação."
    },
    {
        question: "Emprestam raquetes e bolas?",
        answer: "Sim. Se estás a começar e não tens material, podes alugar raquetes na nossa receção por um valor simbólico. Também vendemos bolas e outros acessórios na nossa loja."
    },
    {
        question: "Têm aulas para iniciantes?",
        answer: "Claro! A nossa Academia tem turmas para todos os níveis, desde quem nunca pegou numa raquete (Nível 6) até à competição (Nível 1). Podes marcar uma aula experimental para avaliarmos o teu nível."
    },
    {
        question: "Têm estacionamento e balneários?",
        answer: "Sim, temos estacionamento privativo gratuito mesmo à porta do clube. Dispomos também de balneários masculinos e femininos completos com duches."
    },
    {
        question: "Qual é a política de cancelamento?",
        answer: "Podes cancelar a tua reserva sem custos até 24 horas antes da hora marcada. Cancelamentos com menos aviso prévio podem estar sujeitos ao pagamento do valor do campo."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // O primeiro já vem aberto

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-gray-50" id="faqs">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Cabeçalho */}
                <div className="text-center mb-16">
                    <span className="text-brand-terracotta font-bold tracking-widest uppercase text-sm">Dúvidas?</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3">Perguntas Frequentes</h2>
                </div>

                {/* Lista de FAQs */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl border transition-all duration-300 ${
                                openIndex === index
                                    ? 'border-brand-terracotta shadow-lg ring-1 ring-brand-terracotta/20'
                                    : 'border-gray-200 hover:border-brand-terracotta/50'
                            }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-terracotta' : 'text-brand-navy'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-brand-terracotta text-white' : 'bg-gray-100 text-gray-500'}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}