'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/navigation';
import { useTransition } from 'react';

interface Props {
    isTransparent: boolean;
}

export default function LanguageSwitcher({ isTransparent }: Props) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const onLanguageChange = (nextLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    const baseClasses = "text-xs font-black tracking-widest transition-all duration-300";
    const activeClasses = isTransparent ? "text-white border-b-2 border-white" : "text-brand-terracotta border-b-2 border-brand-terracotta";
    const inactiveClasses = isTransparent ? "text-white/50 hover:text-white" : "text-brand-navy/50 hover:text-brand-navy";

    return (
        <div className="flex items-center gap-3 mr-4">
            <button
                onClick={() => onLanguageChange('pt')}
                disabled={isPending || locale === 'pt'}
                className={`${baseClasses} ${locale === 'pt' ? activeClasses : inactiveClasses}`}
            >
                PT
            </button>
            <span className={`w-[1px] h-3 ${isTransparent ? 'bg-white/20' : 'bg-brand-navy/20'}`}></span>
            <button
                onClick={() => onLanguageChange('en')}
                disabled={isPending || locale === 'en'}
                className={`${baseClasses} ${locale === 'en' ? activeClasses : inactiveClasses}`}
            >
                EN
            </button>
        </div>
    );
}