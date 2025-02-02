import { Fragment } from "react";
// components
import LoginPage from "@/components/pages/LoginPage";

export interface LoginProps {
    params: Promise<{ lang: string }>;
}

function Login(props: LoginProps): React.JSX.Element {
    return (
        <Fragment>
            <LoginPage {...props} />
        </Fragment>
    );
}

export default Login;
