"use client";

import { useContext, createContext } from "react";
// data
import { LOCALES } from "@/middleware";
// types
import type { Translations } from "@/app/api/translations/route";
import type { ReactNode } from "react";

const TranslationsContext = createContext<Partial<Translations>>({});
const LocaleContenxt = createContext<(typeof LOCALES)[number]>("zh-TW");

export function useTranslations() {
    return useContext(TranslationsContext);
}

export function useLocale() {
    return useContext(LocaleContenxt);
}

export interface TranslationsProviderProps {
    children: ReactNode;
    translations: Partial<Translations>;
    locale: (typeof LOCALES)[number];
}

function TranslationsProvider(props: TranslationsProviderProps): React.JSX.Element {
    return (
        <LocaleContenxt.Provider value={props.locale}>
            <TranslationsContext.Provider value={props.translations}>{props.children}</TranslationsContext.Provider>
        </LocaleContenxt.Provider>
    );
}

export default TranslationsProvider;
