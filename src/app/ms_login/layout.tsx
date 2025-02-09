import type { Metadata } from "next";
// providers
import ThemeProvider from "@/providers/ThemeProvider";

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
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning>
            <body id="root">
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
