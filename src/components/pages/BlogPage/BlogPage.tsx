import { headers } from "next/headers";
// components
import MsLogoutButton from "@/components/atoms/MsLogoutButton";
import SwitchThemeButton from "@/components/atoms/SwitchThemeButton";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
// utils
import loadTranslations from "@/utils/loadTranslations";

async function BlogPage(): Promise<React.JSX.Element> {
    const locale = (await headers()).get("x-locale");
    const translations = await loadTranslations(locale);
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Header />
                <main className="container mx-auto mt-16 flex-grow px-4 py-8">
                    <h1>BlogPage</h1>
                    <p>{translations.welcome}</p>
                    <MsLogoutButton />
                    <SwitchThemeButton />
                </main>
                <Footer />
            </div>
            <div></div>
        </>
    );
}

export default BlogPage;
