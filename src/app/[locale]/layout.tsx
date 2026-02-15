import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// 1. IMPORTS DO NEXT-INTL
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Clube Padel Caldas - Vamos a jogo?",
    description: "O Primeiro Clube de Padel das Caldas da Rainha!",
};

// 2. DEFINIÇÃO DA FUNÇÃO ASYNC E PARAMS
export default async function LocaleLayout({
                                               children,
                                               params
                                           }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>; // Next.js 15 obriga a que params seja Promise
}) {
    // 3. Obter o locale (pt ou en)
    const { locale } = await params;

    // 4. Carregar as traduções do servidor (os ficheiros json em /messages)
    const messages = await getMessages();

    return (
        // 5. O HTML Lang agora é dinâmico
        <html lang={locale}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
        {/* 6. Provider para as traduções funcionarem nos componentes (Client Components) */}
        <NextIntlClientProvider messages={messages}>

            <Navbar />

            <main className="flex-grow">
                {children}
            </main>

            <Footer />

            {/* <WhatsAppButton /> */}

        </NextIntlClientProvider>
        </body>
        </html>
    );
}