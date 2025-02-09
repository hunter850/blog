import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    if (pathname === "/ms_login") {
        return NextResponse.next();
    }
    const handleI18nRouting = createMiddleware(routing);
    const response = handleI18nRouting(request);
    return response;
}

export const config = {
    // Match only internationalized pathnames
    matcher: ["/((?!_next|images).*)", "/", "/(zh-TW|en-US)/:path*"],
};
