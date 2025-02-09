// components
import MsLogoutButton from "@/components/atoms/MsLogoutButton";
import SwitchThemeButton from "@/components/atoms/SwitchThemeButton";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
// hooks
import { useTranslations } from "next-intl";

function BlogPage(): React.JSX.Element {
    const t = useTranslations();
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Header />
                <main className="container mx-auto mt-16 flex-grow px-4 py-8">
                    <h1>BlogPage</h1>
                    <p>{t("welcome")}</p>
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
