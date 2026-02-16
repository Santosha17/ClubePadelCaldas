import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import WhatsAppButton from "@/components/WhatsAppButton"; // Se usares, carrega dinâmico

// 1. IMPORTS DO NEXT-INTL E METADATA
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from "next";
import CookieBanner from "@/components/CookieBanner";
// 2. IMPORTAR COMPONENTE SCRIPT (Para Analytics sem bloquear)
import Script from 'next/script';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
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
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
        <NextIntlClientProvider messages={messages}>
            <Navbar />

            <main className="flex-grow">
                {children}
            </main>

            <Footer />

            {/* O CookieBanner já é Client Component, o que é bom.
                        Certifica-te que ele só ativa scripts pesados DEPOIS de aceitar. */}
            <CookieBanner />

            {/* <WhatsAppButton /> */}

            {/* --- ZONA DE SCRIPTS DE PERFORMANCE --- */}
            {/* Se fores adicionar Google Analytics, usa SEMPRE esta estratégia: */}
            {/* <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-SEU-ID-AQUI"
                        strategy="lazyOnload" // <--- O SEGREDO DO TBT BAIXO
                    />
                    <Script id="google-analytics" strategy="lazyOnload">
                        {`
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', 'G-SEU-ID-AQUI');
                        `}
                    </Script>
                    */}

        </NextIntlClientProvider>
        </body>
        </html>
    );
}