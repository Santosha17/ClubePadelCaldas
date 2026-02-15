import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Matcher para ignorar ficheiros internos, imagens, api, etc.
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};