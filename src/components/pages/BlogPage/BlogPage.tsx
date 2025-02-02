import { Fragment } from "react";
// components
import SwitchLanguageButton from "@/components/atoms/SwitchLanguageButton";
// utils
import loadTranslations from "@/utils/loadTranslations";
// types
import type { BlogProps } from "@/app/[lang]/blog/page";

async function BlogPage(props: BlogProps): Promise<React.JSX.Element> {
    const { lang } = props.params;
    const translations = await loadTranslations(lang);
    return (
        <Fragment>
            <h1>BlogPage</h1>
            <p>{translations.welcome}</p>
            <SwitchLanguageButton lang={lang}>{translations.language}</SwitchLanguageButton>
        </Fragment>
    );
}

export default BlogPage;
