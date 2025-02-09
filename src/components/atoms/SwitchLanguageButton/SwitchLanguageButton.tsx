"use client";

import { useRouter, usePathname } from "next/navigation";
// contexts
import { useLocale } from "@/providers/TranslationsProvider";
// utils
import { cn } from "@/lib/utils";
// types
import type { ReactNode } from "react";

export interface SwitchLanguageButtonProps {
    children: ReactNode;
}

function SwitchLanguageButton(props: SwitchLanguageButtonProps): React.JSX.Element {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    function changeLanguageHandler() {
        const newLocale = locale === "zh-TW" ? "en-US" : "zh-TW";
        const newPath = pathname.replace(new RegExp(`^/${locale}`), `/${newLocale}`);
        router.push(newPath);
    }
    return (
        <button onClick={changeLanguageHandler} className={cn("cursor-pointer")}>
            {props.children}
        </button>
    );
}

export default SwitchLanguageButton;
