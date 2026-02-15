import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
    // As tuas línguas
    locales: ['pt', 'en'],

    // A língua padrão
    defaultLocale: 'pt'
});