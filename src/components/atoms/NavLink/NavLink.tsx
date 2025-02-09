"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// hooks
import { useLocale } from "next-intl";
// utils
import { cn } from "@/lib/utils";
import type { ReactNode } from "react"; // Added import for React

interface NavLinkProps {
    href: string;
    children: ReactNode;
    onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
    const pathname = usePathname();
    const locale = useLocale();
    return (
        <Link
            href={`/${locale}${href === "/" ? "" : href}`}
            // className="hover:text-primary text-sm font-medium transition-colors"
            className={cn(
                "hover:text-primary relative px-2 py-1 text-sm font-medium transition-colors sm:px-0 sm:py-0",
                [
                    pathname === `/${locale}${href === "/" ? "" : href}`
                        ? "text-primary after:bg-primary font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full"
                        : "text-muted-foreground hover:after:bg-primary hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-0.5 hover:after:w-full hover:after:opacity-50",
                ]
            )}
            onClick={onClick}
        >
            {children}
        </Link>
    );
}

export default NavLink;
