import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export function middleware(request: NextRequest) {
    const handleI18nRouting = createMiddleware(routing);
    const response = handleI18nRouting(request);
    return response;
}

export const config = {
    // Match only internationalized pathnames
    matcher: ["/((?!_next|images|robots.txt|sitemap.xml|favicon.ico|api|ms_login).*)", "/", "/(zh-TW|en-US)/:path*"],
};
