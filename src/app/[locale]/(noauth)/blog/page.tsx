import { Fragment } from "react";
// components
import BlogPage from "@/components/pages/BlogPage";
import { LOCALES } from "@/i18n/routing";

export function generateStaticParams() {
    return LOCALES.map((locale) => ({ locale }));
}

export default async function Blog(): Promise<React.JSX.Element> {
    return (
        <Fragment>
            <BlogPage />
        </Fragment>
    );
}
