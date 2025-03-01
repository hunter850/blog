"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
// utils
import { cn } from "@/lib/utils";

function MsLogoutButton(): React.JSX.Element {
    const pathname = usePathname();
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
                登出
            </button>
        </Fragment>
    );
}

export default MsLogoutButton;
