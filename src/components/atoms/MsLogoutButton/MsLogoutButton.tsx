"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
// utils
import classNames from "@/utils/classNames";
// types
import type { Translations } from "@/utils/loadTranslations";

export interface MsLogoutButtonProps {
    translations: Translations;
}

function MsLogoutButton(props: MsLogoutButtonProps): React.JSX.Element {
    const pathname = usePathname();
    function logoutHandler() {
        console.log("pathname: ", pathname);
        localStorage.removeItem("lang");
        window.location.href =
            `https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=` +
            `https://hlkw.me/zh-TW/login`;
    }
    return (
        <Fragment>
            <button onClick={logoutHandler} className={classNames("cursor-pointer")}>
                {props.translations.logout}
            </button>
        </Fragment>
    );
}

export default MsLogoutButton;
