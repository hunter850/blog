"use client";

import NavLink from "@/components/atoms/NavLink";
import { useTranslations } from "next-intl"
const navLinks: { href: string; label: string }[] = [
    { href: "/", label: "home" },
    { href: "/blog", label: "blog" },
];

interface NavMenuProps {
    onLinkClick?: () => void;
}

function NavMenu({ onLinkClick }: NavMenuProps) {
    const t = useTranslations();
    return (
        <nav className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} onClick={onLinkClick}>
                    {t(link.label)}
                </NavLink>
            ))}
        </nav>
    );
}

export default NavMenu;
