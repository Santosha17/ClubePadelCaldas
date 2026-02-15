import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

// As línguas suportadas
const locales = ['pt', 'en'];

export default getRequestConfig(async ({requestLocale}) => {
    // Valida se a língua pedida está na lista
    let locale = await requestLocale;

    // Se não tiver locale ou for inválido, usa o default 'pt' (ou lança erro)
    if (!locale || !locales.includes(locale as any)) {
        locale = 'pt';
    }

    return {
        locale,
        // Importa o ficheiro JSON correspondente da pasta messages
        messages: (await import(`../messages/${locale}.json`)).default
    };
});