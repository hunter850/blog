"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
// contexts
import { useLocale } from "@/providers/TranslationsProvider";
// components
import LoginButton from "@/components/atoms/LoginButton";
// utils
import { cn } from "@/lib/utils";
// datas
import lineLogo from "@/assets/images/square-default.png";

function LineLoginButton(): React.JSX.Element {
    const pathname = usePathname();
    const locale = useLocale();
    function lineSigninHanlder() {
        const redirectUri = process.env.NEXT_PUBLIC_LINE_REDIRECT_URI!;
        const regex = /^(https?:\/\/[^\/]+)\/(line_login)/;
        const redirectUriWithLang = redirectUri.replace(regex, `$1/${locale}/$2`);
        const params = new URLSearchParams();
        params.append("response_type", "code");
        params.append("client_id", process.env.NEXT_PUBLIC_LINE_CLIENT_ID!);
        params.append("state", process.env.NEXT_PUBLIC_LINE_STATE!);
        params.append("scope", "profile openid");
        params.append("nonce", "hlkw_line_login");
        params.append("prompt", "consent");
        params.append("max_age", "120");
        params.append("bot_prompt", "normal");
        params.append("redirect_uri", redirectUriWithLang);
        const lineAuthorizeURL = `${process.env.NEXT_PUBLIC_LINE_AUTHORIZE_URL}?${params.toString()}`;
        const currentPath = encodeURIComponent(pathname);
        const redirectUrl = `${lineAuthorizeURL}&state=${currentPath}`;
        console.log("redirectUrl: ", redirectUrl);
        window.location.href = redirectUrl;
    }
    return (
        <Fragment>
            <LoginButton
                src={lineLogo}
                imgAlt="Line Logo"
                buttonClassName={cn("bg-[#06c755] hover:saturate-[0.7] text-white")}
                priority={true}
                onClick={lineSigninHanlder}
            >
                Sign in with LINE
            </LoginButton>
        </Fragment>
    );
}

export default LineLoginButton;
