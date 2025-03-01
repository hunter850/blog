"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";
// utils
import { cn } from "@/lib/utils";
import type { ReactNode } from "react"; // Added import for React

interface NavLinkProps {
    href: string;
    children: ReactNode;
    inSheet?: boolean;
}

function NavLink({ href, children, inSheet }: NavLinkProps) {
    const pathname = usePathname();
    // 判斷連結是否高亮
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <>
            {inSheet ? (
                <SheetClose asChild>
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
                </SheetClose>
            ) : (
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
            )}
        </>
    );
}

export default NavLink;
