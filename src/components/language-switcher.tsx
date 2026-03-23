'use client'

import * as React from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/navigation'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LanguagesIcon, CheckIcon } from 'lucide-react'

export function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const toggleLanguage = (newLocale: 'en' | 'fr') => {
        router.replace(pathname, { locale: newLocale })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-11 rounded-full hover:bg-primary/10">
                    <LanguagesIcon className="size-5 text-primary" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border-border/50 rounded-xl p-1 shadow-xl">
                <DropdownMenuItem
                    onClick={() => toggleLanguage('en')}
                    className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-primary/10 focus:bg-primary/10 transition-colors"
                >
                    <span className="font-semibold text-sm">English</span>
                    {locale === 'en' && <CheckIcon className="size-4 text-primary" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => toggleLanguage('fr')}
                    className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-primary/10 focus:bg-primary/10 transition-colors"
                >
                    <span className="font-semibold text-sm">Français</span>
                    {locale === 'fr' && <CheckIcon className="size-4 text-primary" />}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
