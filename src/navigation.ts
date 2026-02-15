import {createNavigation} from 'next-intl/navigation';
import {routing} from './i18n/routing';

// Cria e exporta os componentes de navegação compatíveis com as tuas rotas
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);