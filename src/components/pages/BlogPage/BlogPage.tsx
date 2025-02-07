import { Fragment } from "react";
// components
import SwitchLanguageButton from "@/components/atoms/SwitchLanguageButton";
import MsLogoutButton from "@/components/atoms/MsLogoutButton";
// utils
import loadTranslations from "@/utils/loadTranslations";
// types
import type { BlogProps } from "@/app/[lang]/blog/page";

async function BlogPage(props: BlogProps): Promise<React.JSX.Element> {
    const { lang } = await props.params;
    const translations = await loadTranslations(lang);
    return (
        <Fragment>
            <h1>BlogPage</h1>
            <p>{translations.welcome}</p>
            <SwitchLanguageButton lang={lang}>{translations.language}</SwitchLanguageButton>
            <MsLogoutButton translations={translations} />
        </Fragment>
    );
}

export default BlogPage;
