import { Fragment } from "react";
// components
import LoginPage from "@/components/pages/LoginPage";
import { LOCALES } from "@/i18n/routing";

export function generateStaticParams() {
    return LOCALES.map((locale) => ({ locale }));
}

function Login(): React.JSX.Element {
    return (
        <Fragment>
            <LoginPage />
        </Fragment>
    );
}

export default Login;
