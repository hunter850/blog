"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// components
import { Button } from "@/components/ui/button";
import SwitchLanguageButton from "@/components/atoms/SwitchLanguageButton";
import { Globe } from "lucide-react";
// contexts
import { useTranslations, useLocale } from "next-intl";

const languages: { locale: string; content: string }[] = [
    { locale: "zh-TW", content: "zh-TW" },
    { locale: "en-US", content: "en-US" },
];

function LanguageDropdown() {
    const locale = useLocale();
    const t = useTranslations();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                    <Globe />
                    {t(locale)}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {languages.map((language) => {
                    return (
                        <DropdownMenuItem key={language.locale} className="p-0">
                            <SwitchLanguageButton locale={language.locale}>{t(language.content)}</SwitchLanguageButton>
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default LanguageDropdown;
