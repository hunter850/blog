import { Fragment } from "react";
// components
import LoginPanel from "@/components/molecules/LoginPanel";

async function LoginPage(): Promise<React.JSX.Element> {
    return (
        <Fragment>
            <LoginPanel />
        </Fragment>
    );
}

export default LoginPage;
