import { Geist, Geist_Mono, Oswald } from "next/font/google"; // NOVO: Importamos a Oswald
import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import WhatsAppButton from "@/components/WhatsAppButton"; // Se usares, carrega dinâmico

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from "next";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// NOVO: Configuramos a fonte para os títulos
const oswald = Oswald({
    variable: "--font-heading",
    subsets: ["latin"],
    weight: ["500", "700"],
});

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
                    url: "/og-image.jpg",
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
        <body className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased flex flex-col min-h-screen`}>


        {/* Provedor de traduções colocado apenas UMA vez */}
        <NextIntlClientProvider messages={messages}>
            <Navbar />

            <main className="flex-grow">
                {children}
            </main>

            <Footer />

            <CookieBanner />

            {/* <WhatsAppButton /> */}

        </NextIntlClientProvider>
        </body>
        </html>
    );
}