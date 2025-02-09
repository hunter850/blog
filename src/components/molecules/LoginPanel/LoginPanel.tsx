// components
import CentralBox from "@/components/atoms/CentralBox";
import LineLoginButton from "@/components/atoms/LineLoginButton";
import MsLoginButton from "@/components/atoms/MsLoginButton";

function LoginPanel(): React.JSX.Element {
    return (
        <CentralBox>
            <LineLoginButton />
            <MsLoginButton />
        </CentralBox>
    );
}

export default LoginPanel;
