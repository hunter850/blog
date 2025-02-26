"use client";

import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
// hooks
import { useLocale } from "next-intl";
// utils
import { cn } from "@/lib/utils";
import type { ReactNode } from "react"; // Added import for React

interface NavLinkProps {
    href: string;
    children: ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
    const pathname = usePathname();
    const locale = useLocale();

    // 移除語系前墜，方便後續判斷高亮
    const currentPath = pathname.replace(`/${locale}`, "");

    // 判斷連結是否高亮
    const isActive = href === "/" ? currentPath === "" : currentPath.startsWith(href);

    return (
        <Link
            href={href}
            className={cn(
                "relative px-4 py-2 text-sm font-medium transition-all duration-300",
                "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                [isActive ? "text-primary after:w-full" : "text-muted-foreground hover:text-primary"]
            )}
        >
            {children}
        </Link>
    );
}

export default NavLink;
