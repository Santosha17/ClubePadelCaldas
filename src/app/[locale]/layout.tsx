import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// 1. IMPORTS DO NEXT-INTL E METADATA
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from "next";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// 2. FUNÇÃO DINÂMICA DE METADATA (SEO)
export async function generateMetadata({
                                           params
                                       }: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params;
    const isPt = locale === 'pt';

    return {
        title: isPt
            ? "Clube Padel Caldas - Vamos a jogo?"
            : "Clube Padel Caldas - Ready to play?",
        description: isPt
            ? "O Primeiro Clube de Padel das Caldas da Rainha! 6 campos premium, academia e zona social."
            : "The first Padel Club in Caldas da Rainha! 6 premium courts, academy, and social area.",
        keywords: ["Padel", "Caldas da Rainha", "Clube Padel Caldas", "Aluguer Padel"],
        openGraph: {
            title: "Clube Padel Caldas",
            description: isPt ? "O Padel nas Caldas da Rainha!" : "Padel in Caldas da Rainha!",
            url: `https://clubepadeldascaldas.vercel.app/${locale}`,
            siteName: "Clube Padel Caldas",
            images: [
                {
                    url: "/og-image.jpg", // Certifica-te que esta imagem existe na pasta /public
                    width: 1200,
                    height: 630,
                    alt: "Clube Padel Caldas",
                },
            ],
            locale: isPt ? "pt_PT" : "en_US",
            type: "website",
        },
    };
}

// 3. LAYOUT PRINCIPAL
export default async function LocaleLayout({
                                               children,
                                               params
                                           }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale} className="scroll-smooth">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
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