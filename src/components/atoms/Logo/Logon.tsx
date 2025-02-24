import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";

function Logo() {
    const locale = useLocale();
    return (
        <Link href={`/${locale}`}>
            <div className="flex cursor-pointer items-center gap-2">
                <Image src="/images/favicon-96x96.png" alt="HoloBoard Logo" width={36} height={36} />
                <h1 className="text-2xl font-bold">HLKW.me</h1>
            </div>
        </Link>
    );
}

export default Logo;
