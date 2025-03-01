import { Fragment } from "react";
// components
import LineLoginPage from "@/components/pages/LineLoginPage";

async function LineLogin(): Promise<React.JSX.Element> {
    return (
        <Fragment>
            <LineLoginPage />
        </Fragment>
    );
}

export default LineLogin;
