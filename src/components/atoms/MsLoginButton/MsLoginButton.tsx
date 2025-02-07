"use client";

import { Fragment } from "react";
// components
import LoginButton from "@/components/atoms/LoginButton";
// utils
import classNames from "@/utils/classNames";
import querystring from "querystring";
import { ms_login_api } from "@/config/api_configs";
// datas
import msLogo from "@/assets/images/microsoft_64.png";

export interface LineLoginButtonProps {
    lang: string;
}

function MsLoginButton(props: LineLoginButtonProps): React.JSX.Element {
    function lineSigninHanlder() {
        localStorage.setItem("lang", props.lang);
        window.location.href = ms_login_api;
    }
    return (
        <Fragment>
            <LoginButton
                src={msLogo}
                imgAlt="Line Logo"
                buttonClassName={classNames("bg-trasparent hover:bg-gray-200/50 text-black")}
                priority={true}
                onClick={lineSigninHanlder}
                imageWrapProps={{ className: classNames("p-1") }}
            >
                Sign in with Microsoft
            </LoginButton>
        </Fragment>
    );
}

export default MsLoginButton;
