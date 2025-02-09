import type { TranslationsResponse, Translations } from "@/app/api/translations/route";

// 載入翻譯 JSON
async function loadTranslations(locale: string | null): Promise<Partial<Translations>> {
    try {
        const params = new URLSearchParams();
        params.append("locale", locale ?? "zh-TW");
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/translations?${params.toString()}`, {
            cache: "default",
        });
        if (!response.ok) throw new Error(`Failed to fetch translations: ${response.statusText}`);
        const json = (await response.json()) as TranslationsResponse;
        return json?.data ?? {};
    } catch (error) {
        console.error("Error loading translations:", error);
        return {}; // 返回空物件，避免程式崩潰
    }
}

export default loadTranslations;
