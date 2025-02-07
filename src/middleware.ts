import { NextRequest, NextResponse } from "next/server";

const locales = ["en-US", "zh-TW"];
const defaultLocale = "zh-TW";

// Get the preferred locale, similar to the above or using a library

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;
    if (pathname === "/ms_login") return;
    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
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
