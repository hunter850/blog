// components
import HomePage from "@/components/pages/HomePage";
import { LOCALES } from "@/i18n/routing";

export function generateStaticParams() {
    return LOCALES.map((locale) => ({ locale }));
}

export default function Home() {
    return <HomePage />;
}
