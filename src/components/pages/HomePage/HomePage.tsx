// components
import CentralItemTemplate from "@/components/templates/CentralItemTemplate";

export default function Home() {
    return (
        <CentralItemTemplate>
            <h2 className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-5xl text-transparent [-webkit-background-clip:text] dark:from-blue-400 dark:to-cyan-400 md:text-7xl lg:text-8xl">
                Kevin
            </h2>

            <h3 className="text-center text-2xl text-gray-700 dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent dark:[-webkit-background-clip:text] md:text-3xl lg:text-5xl">
                專業前端工程師
            </h3>
            <p className="text-center text-base leading-relaxed text-gray-600 dark:text-gray-400 md:text-xl">
                致力於打造現代化且實用的網頁應用程式。
            </p>
        </CentralItemTemplate>
    );
}
