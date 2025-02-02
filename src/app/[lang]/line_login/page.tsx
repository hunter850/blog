import { Fragment } from "react";
// components
import LineLoginPage from "@/components/pages/LineLoginPage";

export interface LineLoginProps {
    params: Promise<{ lang: string }>;
}

async function LineLogin(props: LineLoginProps): Promise<React.JSX.Element> {
    const { lang } = await props.params;
    return (
        <Fragment>
            <LineLoginPage lang={lang} />
        </Fragment>
    );
}

export default LineLogin;
