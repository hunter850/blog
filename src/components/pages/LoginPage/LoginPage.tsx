import { Fragment } from "react";
// components
import LoginPanel from "@/components/molecules/LoginPanel";
// types
import type { LoginProps } from "@/app/[lang]/login/page";

async function LoginPage(props: LoginProps): Promise<React.JSX.Element> {
    const { lang } = await props.params;
    return (
        <Fragment>
            <LoginPanel lang={lang} />
        </Fragment>
    );
}

export default LoginPage;
