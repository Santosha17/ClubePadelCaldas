'use client';

import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-brand-navy flex items-center justify-center px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md"
            >
                <Trophy className="text-brand-terracotta w-20 h-20 mx-auto mb-6" />
                <h1 className="text-7xl font-black text-white mb-4">404</h1>
                <p className="text-xl text-white font-bold mb-4 uppercase">Bola fora de campo!</p>
                <p className="text-gray-400 mb-10">A página que procuras não existe. Vamos voltar ao jogo?</p>
                <Link href="/" className="bg-brand-terracotta text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-brand-navy transition-all">
                    VOLTAR AO INÍCIO
                </Link>
            </motion.div>
        </div>
    );
}