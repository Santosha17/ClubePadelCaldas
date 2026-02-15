import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Corrigir o Matcher para incluir o 404
    matcher: [
        // Ativa o middleware apenas para rotas que começam com locale
        '/',
        '/(pt|en)/:path*',
        // Garante que o middleware não bloqueia ficheiros estáticos ou o 404
        '/((?!api|_next|_vercel|.*\\..*).*)'
    ]
};