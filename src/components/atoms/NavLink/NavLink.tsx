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
            className={cn(
                "relative px-4 py-2 text-sm font-medium transition-all duration-300",
                "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                [
                    pathname === `/${locale}${href === "/" ? "" : href}`
                        ? "text-primary after:w-full"
                        : "text-muted-foreground hover:text-primary",
                ]
            )}
            onClick={onClick}
        >
            {children}
        </Link>
    );
}

export default NavLink;
