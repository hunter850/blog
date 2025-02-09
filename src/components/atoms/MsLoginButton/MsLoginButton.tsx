"use client";

import { Fragment } from "react";
// components
import LoginButton from "@/components/atoms/LoginButton";
// contexts
import { useLocale } from "@/providers/TranslationsProvider";
// utils
import { cn } from "@/lib/utils";
import { ms_login_api } from "@/config/api_configs";
// datas
import msLogo from "@/assets/images/microsoft_64.png";

function MsLoginButton(): React.JSX.Element {
    const locale = useLocale();
    function lineSigninHanlder() {
        localStorage.setItem("locale", locale);
        window.location.href = ms_login_api;
    }
    return (
        <Fragment>
            <LoginButton
                src={msLogo}
                imgAlt="Line Logo"
                buttonClassName={cn("bg-trasparent hover:bg-gray-200/50 text-black")}
                priority={true}
                onClick={lineSigninHanlder}
                imageWrapProps={{ className: cn("p-1") }}
            >
                Sign in with Microsoft
            </LoginButton>
        </Fragment>
    );
}

export default MsLoginButton;
