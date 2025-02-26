import { LOCALES } from "@/i18n/routing";

function isInLocale(urlpath: string) {
    return LOCALES.some((locale) => urlpath.startsWith(locale));
}

export default isInLocale;
