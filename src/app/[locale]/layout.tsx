import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import loadTranslations from "@/utils/loadTranslations";
import ThemeProvider from "@/providers/ThemeProvider";
import TranslationsProvider from "@/providers/TranslationsProvider";
import { LOCALES } from "@/middleware";
import "../globals.css";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    title: "HLKW | Blog",
    description: "HLKW's blog",
    icons: { icon: { url: "/images/favicon.ico" } },
    authors: [{ name: "HLKW" }],
    openGraph: {
        title: "HLKW | Blog",
        description: "Hi, I'm HLKW, a Frontend Developer.",
        locale: "zh_TW",
        type: "website",
    },
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: (typeof LOCALES)[number] }>;
}>) {
    const { locale } = await params;
    const translations = await loadTranslations(locale);
    return (
        <html suppressHydrationWarning lang={locale ?? ""}>
            <body className={`${roboto.variable} antialiased`} id="root">
                <TranslationsProvider locale={locale} translations={translations}>
                    <ThemeProvider>{children}</ThemeProvider>
                </TranslationsProvider>
            </body>
        </html>
    );
}
