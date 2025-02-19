"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
// contexts
import { useTranslations } from "next-intl";
// utils
import { cn } from "@/lib/utils";

function MsLogoutButton(): React.JSX.Element {
    const pathname = usePathname();
    const t = useTranslations();
    function logoutHandler() {
        console.log("pathname: ", pathname);
        localStorage.removeItem("locale");
        window.location.href =
            `https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=` +
            `https://hlkw.me/zh-TW/login`;
    }
    return (
        <Fragment>
            <button onClick={logoutHandler} className={cn("cursor-pointer")}>
                {t("logout")}
            </button>
        </Fragment>
    );
}

export default MsLogoutButton;
