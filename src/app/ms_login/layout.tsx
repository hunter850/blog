import { Roboto } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";
import "@/app/globals.css";
// types
import type { Metadata } from "next";

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

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning>
            <body className={`${roboto.variable} antialiased`} id="root">
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
