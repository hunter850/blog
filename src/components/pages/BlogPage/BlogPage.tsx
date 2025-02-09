import { headers } from "next/headers";
// components
import SwitchLanguageButton from "@/components/atoms/SwitchLanguageButton";
import MsLogoutButton from "@/components/atoms/MsLogoutButton";
import SwitchThemeButton from "@/components/atoms/SwitchThemeButton";
// utils
import loadTranslations from "@/utils/loadTranslations";

async function BlogPage(): Promise<React.JSX.Element> {
    const locale = (await headers()).get("x-locale");
    const translations = await loadTranslations(locale);
    return (
        <div>
            <h1>BlogPage</h1>
            <p>{translations.welcome}</p>
            <SwitchLanguageButton>{translations.language}</SwitchLanguageButton>
            <MsLogoutButton />
            <SwitchThemeButton />
        </div>
    );
}

export default BlogPage;
