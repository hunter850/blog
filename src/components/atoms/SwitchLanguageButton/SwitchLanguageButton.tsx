"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// components
import { Check } from "lucide-react";
// contexts
import { useLocale } from "@/providers/TranslationsProvider";
// utils
import { cn } from "@/lib/utils";
// types
import type { ReactNode } from "react";

export interface SwitchLanguageButtonProps {
    children?: ReactNode;
    locale: string;
}

function SwitchLanguageButton(props: SwitchLanguageButtonProps): React.JSX.Element {
    const locale = useLocale();
    const pathname = usePathname();
    const newPath = useMemo(() => {
        return pathname.replace(/^\/([^/]+)(\/|$)/, `/${props.locale}$2`);
    }, [pathname, props.locale]);
    return (
        <Link href={newPath} className={cn("flex h-full w-full cursor-pointer justify-between px-2 py-1.5")}>
            {props.children}
            {locale === props.locale && <Check className="ml-2 h-4 w-4" />}
        </Link>
    );
}

export default SwitchLanguageButton;
