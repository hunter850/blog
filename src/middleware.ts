import { NextRequest, NextResponse } from "next/server";

export const LOCALES = ["en-US", "zh-TW"] as const;
const DEFAULT_LOCALES = "zh-TW";

// Get the preferred locale, similar to the above or using a library

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const regex = new RegExp(`^https?://[^/]+/([^/]+)(/|$)`);
    const match = request.url.match(regex);
    const xLocale = match ? match[1] : "";
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-url", request.url);
    requestHeaders.set("x-locale", xLocale);
    if (pathname === "/ms_login" || pathname.includes("/api")) {
        return NextResponse.next({
            request: {
                // New request headers
                headers: requestHeaders,
            },
        });
    }
    const isPathnameHasLocale = LOCALES.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (isPathnameHasLocale) {
        return NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });
    }

    // Redirect if there is no locale
    request.nextUrl.pathname = `/${DEFAULT_LOCALES}${pathname}`;
    // e.g. incoming request is /products
    // The new URL is now /zh-TW/products
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next|images).*)",
        // Optional: only run on root (/) URL
        // '/'
    ],
};
