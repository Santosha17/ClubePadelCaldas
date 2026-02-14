'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/351922242632" // O teu número já configurado
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-green-500/50 transition-all duration-300 flex items-center gap-3 group animate-in slide-in-from-bottom-4 fade-in duration-700"
            aria-label="Contactar via WhatsApp"
        >
            {/* Ícone */}
            <MessageCircle size={32} fill="white" className="text-white" />

            {/* Texto que aparece ao passar o rato (Efeito Slide) */}
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm md:text-base">
        Marca já!
      </span>

            {/* Bolinha de notificação (opcional, para chamar atenção) */}
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
      </span>
        </a>
    );
}