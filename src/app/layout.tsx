import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Importar os componentes
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        {/* 2. Adicionar 'flex flex-col min-h-screen' para o footer funcionar bem */}
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
        {/* Navbar no topo */}
        <Navbar />

        {/* Conteúdo da página com flex-grow para empurrar o footer */}
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}