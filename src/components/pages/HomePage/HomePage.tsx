import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations();

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="container mx-auto flex flex-grow flex-col items-center justify-center space-y-6 px-4 py-8 text-center">
                <h2 className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-5xl text-transparent [-webkit-background-clip:text] dark:from-blue-400 dark:to-cyan-400 md:text-7xl lg:text-8xl">
                    {t("name")}
                </h2>

                <h3 className="text-center text-2xl text-gray-700 dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent dark:[-webkit-background-clip:text] md:text-3xl lg:text-5xl">
                    {t("homeProfession")}
                </h3>
                <p className="text-center text-base leading-relaxed text-gray-600 dark:text-gray-400 md:text-xl">
                    {t("homeDescription")}
                </p>
            </main>
            <Footer />
        </div>
    );
}
