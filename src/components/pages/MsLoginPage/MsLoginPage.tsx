"use client";

import { Fragment, useEffect } from "react";
import { useRouter } from "next/navigation";
// configs
import { ms_login_api } from "@/config/api_configs";

function MsLoginPage(): React.JSX.Element {
    const router = useRouter();
    useEffect(() => {
        (async () => {
            const params = new URLSearchParams(window.location.search);
            const code = params.get("code");
            const lang = localStorage.getItem("lang") ?? "zh-TW";
            if (code) {
                const response = await fetch(ms_login_api, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ code }),
                });
                const result = await response.json();
                if (response.status <= 200 && response.status < 300 && result?.success === true) {
                    localStorage.removeItem("lang");
                    router.push(`${lang}/blog`);
                } else {
                    alert("Failed to login by microsoft. Redirect to login page.");
                    router.push(`${lang}/login`);
                }
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Fragment>
            <h1>MsLoginPage</h1>
        </Fragment>
    );
}

export default MsLoginPage;
