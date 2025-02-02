"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
// components
import LoginButton from "@/components/atoms/LoginButton";
// utils
import classNames from "@/utils/classNames";
import querystring from "querystring";
// datas
import lineLogo from "@/assets/images/square-default.png";

export interface LineLoginButtonProps {
    lang: string;
}

function LineLoginButton(props: LineLoginButtonProps): React.JSX.Element {
    const pathname = usePathname();
    function lineSigninHanlder() {
        const redirectUri = process.env.NEXT_PUBLIC_LINE_REDIRECT_URI!;
        const regex = /^(https?:\/\/[^\/]+)\/(line_login)/;
        const redirectUriWithLang = redirectUri.replace(regex, `$1/${props.lang}/$2`);
        const query = querystring.stringify({
            response_type: "code",
            client_id: process.env.NEXT_PUBLIC_LINE_CLIENT_ID,
            state: process.env.NEXT_PUBLIC_LINE_STATE,
            scope: "profile openid",
            nonce: "hlkw_line_login",
            prompt: "consent",
            max_age: 120,
            bot_prompt: "normal",
            redirect_uri: redirectUriWithLang, //http://localhost:3000/line_login
        });
        const lineAuthorizeURL = `${process.env.NEXT_PUBLIC_LINE_AUTHORIZE_URL}?${query}`;
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
                buttonClassName={classNames("bg-[#06c755] text-white")}
                priority={true}
                onClick={lineSigninHanlder}
            >
                Sign in with LINE
            </LoginButton>
        </Fragment>
    );
}

export default LineLoginButton;
