"use client";

import { Fragment, useEffect } from "react";
import { useRouter } from "next/navigation";
// configs
import { line_login_api } from "@/config/api_configs";

export interface LineLoginPageProps {
    lang: string;
}

function LineLoginPage(props: LineLoginPageProps): React.JSX.Element {
    const router = useRouter();
    useEffect(() => {
        (async () => {
            const params = new URLSearchParams(window.location.search);
            const code = params.get("code");
            const state = params.get("state");
            if (code && state === process.env.NEXT_PUBLIC_LINE_STATE) {
                const response = await fetch(line_login_api, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ code, state, lang: props.lang }),
                });
                const result = await response.json();
                if (response.status <= 200 && response.status < 300 && result?.success === true) {
                    router.push("/blog");
                } else {
                    alert("Failed to login by line. Redirect to login page.");
                    router.push("/login");
                }
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Fragment>
            <h1>LineLogin</h1>
        </Fragment>
    );
}

export default LineLoginPage;
