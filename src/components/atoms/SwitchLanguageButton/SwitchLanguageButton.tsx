"use client";

import { useRouter, usePathname } from "next/navigation";
// utils
import { cn } from "@/lib/utils";
// types
import type { ReactNode } from "react";

export interface SwitchLanguageButtonProps {
    lang: string;
    children: ReactNode;
}

function SwitchLanguageButton(props: SwitchLanguageButtonProps): React.JSX.Element {
    const router = useRouter();
    const pathname = usePathname();
    function changeLanguageHandler() {
        const newLang = props.lang === "zh-TW" ? "en-US" : "zh-TW";
        const newPath = pathname.replace(new RegExp(`^/${props.lang}`), `/${newLang}`);
        router.push(newPath);
    }
    return (
        <button onClick={changeLanguageHandler} className={cn("cursor-pointer")}>
            {props.children}
        </button>
    );
}

export default SwitchLanguageButton;
