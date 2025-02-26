import { Fragment } from "react";
// components
import BlogPage from "@/components/pages/BlogPage";
import { LOCALES } from "@/i18n/routing";

export function generateStaticParams() {
    return LOCALES.map((locale) => ({ locale }));
}

export interface BlogPageProps {
    params: Promise<{ locale: string }>;
}

export default async function Blog(props: BlogPageProps): Promise<React.JSX.Element> {
    const params = await props.params;
    return (
        <Fragment>
            <BlogPage locale={params.locale} />
        </Fragment>
    );
}
