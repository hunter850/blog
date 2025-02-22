import NavLink from "@/components/atoms/NavLink";
import { useTranslations } from "next-intl"
const navLinks: { href: string; label: string }[] = [
    { href: "/", label: "home" },
    { href: "/blog", label: "blog" },
];

function NavMenu() {
    const t = useTranslations();
    return (
        <nav className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                    {t(link.label)}
                </NavLink>
            ))}
        </nav>
    );
}

export default NavMenu;
