"use client";

import { usePathname, Link } from "@/i18n/routing";
// components
import { Check } from "lucide-react";
// contexts
import { useLocale } from "next-intl";
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
    return (
        <Link
            href={pathname}
            locale={props.locale}
            className={cn("flex h-full w-full cursor-pointer justify-between px-2 py-1.5")}
        >
            {props.children}
            {locale === props.locale && <Check className="ml-2 h-4 w-4" />}
        </Link>
    );
}

export default SwitchLanguageButton;
