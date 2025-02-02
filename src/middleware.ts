import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LANGUAGES = ["zh-TW", "en-US"];
const DEFAULT_LANGUAGE = "zh-TW";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 取得路徑的第一個部分，例如 `/zh-TW/about` 會得到 `zh-TW`
    const segments = pathname.split("/").filter(Boolean);
    const lang = segments[0]; // 第一個 segment 作為語言

    // 若路徑是 `/`，則導向預設語言 `/zh-TW/`
    if (pathname === "/") {
        return NextResponse.redirect(new URL(`/${DEFAULT_LANGUAGE}/`, request.url));
    }

    // 若語言不在支援的列表，則導向 `/zh-TW/...`
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
        return NextResponse.redirect(new URL(`/${DEFAULT_LANGUAGE}${pathname}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next/static|images).*)"],
};
