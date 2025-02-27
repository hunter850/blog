import NavLink from "@/components/atoms/NavLink";
import { useTranslations } from "next-intl";
// configs
import { navLinks } from "@/config/nav_configs";

interface NavMenuProps {
    inSheet?: boolean;
}

function NavMenu({ inSheet = false }: NavMenuProps) {
    const t = useTranslations();
    return (
        <nav className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0 md:rounded-full md:border md:border-border md:px-2 md:py-1">
            {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} inSheet={inSheet}>
                    {t(link.label)}
                </NavLink>
            ))}
        </nav>
    );
}

export default NavMenu;
