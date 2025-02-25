// components
import AboutPage from "@/components/pages/AboutPage";
import { LOCALES } from "@/i18n/routing";

export function generateStaticParams() {
    return LOCALES.map((locale) => ({ locale }));
}

async function About(): Promise<React.JSX.Element> {
    return <AboutPage />;
}

export default About;
