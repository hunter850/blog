import { Fragment } from "react";
// components
import LineLoginPage from "@/components/pages/LineLoginPage";
import { LOCALES } from "@/i18n/routing";

export function generateStaticParams() {
    return LOCALES.map((locale) => ({ locale }));
}

async function LineLogin(): Promise<React.JSX.Element> {
    return (
        <Fragment>
            <LineLoginPage />
        </Fragment>
    );
}

export default LineLogin;
