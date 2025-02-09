import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import zhTWTranslations from "@/assets/translations/zh-TW.json";

export type Translations = {
    [K in keyof typeof zhTWTranslations]: string;
};

export interface TranslationsResponse {
    success: boolean;
    message: string;
    error?: any;
    data?: Translations;
}

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const locale = searchParams.get("locale") ?? "zh-TW";
    const translationsPath = path.resolve("src/assets/translations", `${locale}.json`);
    try {
        const fileContent = await fs.promises.readFile(translationsPath, "utf8");
        const translations = JSON.parse(fileContent) as Translations;
        return NextResponse.json<TranslationsResponse>(
            { success: true, message: "Read translations successfully", data: translations },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error loading translations:", error);
        return NextResponse.json<TranslationsResponse>(
            { success: false, message: "Failed to load translations", error: error.message },
            { status: 500 }
        );
    }
}
