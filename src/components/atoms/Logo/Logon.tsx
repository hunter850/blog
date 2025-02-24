import Link from "next/link";
import { useLocale } from "next-intl";

function Logo() {
    const locale = useLocale();
    return (
        <Link href={`/${locale}`} className="text-2xl font-bold">
            HLKW.me
        </Link>
    );
}

export default Logo;
