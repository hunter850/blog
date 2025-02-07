// components
import CentralBox from "@/components/atoms/CentralBox";
import LineLoginButton from "@/components/atoms/LineLoginButton";
import MsLoginButton from "@/components/atoms/MsLoginButton";

export interface LoginPanel {
    lang: string;
}

function LoginPanel(props: LoginPanel): React.JSX.Element {
    return (
        <CentralBox>
            <LineLoginButton lang={props.lang} />
            <MsLoginButton lang={props.lang} />
        </CentralBox>
    );
}

export default LoginPanel;
