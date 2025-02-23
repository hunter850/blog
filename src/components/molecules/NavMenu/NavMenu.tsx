import NavLink from "@/components/atoms/NavLink";
import { useTranslations } from "next-intl";
// configs
import { navLinks } from "@/config/nav_configs";

function NavMenu() {
    const t = useTranslations();
    return (
        <nav className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 sm:rounded-full sm:border sm:border-border sm:px-2 sm:py-1">
            {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                    {t(link.label)}
                </NavLink>
            ))}
        </nav>
    );
}

export default NavMenu;
