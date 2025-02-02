import fs from "fs";
import path from "path";
import zhTWTranslations from "@/assets/translations/zh-TW.json";

type Translations = {
    [K in keyof typeof zhTWTranslations]: string;
};

// 載入翻譯 JSON
async function loadTranslations(lang: string) {
    const translationsPath = path.resolve("src/assets/translations", `${lang}.json`);
    try {
        const translations = JSON.parse(fs.readFileSync(translationsPath, "utf8")) as Translations;
        return translations;
    } catch (error) {
        console.error("Error loading translations:", error);
        return {} as Translations; // 如果翻譯文件讀取失敗，回傳空對象
    }
}

export default loadTranslations;
