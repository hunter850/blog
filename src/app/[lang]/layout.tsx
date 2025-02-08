import type { Metadata } from "next";
import { Roboto } from "next/font/google";
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
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;
    const htmlLang = typeof lang === "string" && lang !== "" ? lang : "zh-TW";
    return (
        <html lang={htmlLang}>
            <body className={`${roboto.variable} antialiased`} id="root">
                {children}
            </body>
        </html>
    );
}
