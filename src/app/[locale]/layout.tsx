import { Roboto } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ThemeProvider from "@/providers/ThemeProvider";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";
// datas
import favicon from "@/../public/images/favicon.ico";
// types
import type { Metadata } from "next";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_DOMAIN!),
    title: "Kevin | blog",
    description: "Hi, I'm Kevin, a Frontend Developer.",
    keywords: ["Kevin", "Kevin Luo", "blog", "frontend", "developer", "typescript", "react", "nextjs", "tailwindcss"],
    authors: [{ name: "Kevin Luo" }],
    creator: "Kevin Luo",
    publisher: "Kevin Luo",
    icons: {
        icon: [
            { url: favicon.src },
            { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/images/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        // Apple 設備專用
        apple: [
            { url: "/images/apple-touch-icon-57x57.png", sizes: "57x57", type: "image/png" },
            { url: "/images/apple-touch-icon-60x60.png", sizes: "60x60", type: "image/png" },
            { url: "/images/apple-touch-icon-72x72.png", sizes: "72x72", type: "image/png" },
            { url: "/images/apple-touch-icon-76x76.png", sizes: "76x76", type: "image/png" },
            { url: "/images/apple-touch-icon-114x114.png", sizes: "114x114", type: "image/png" },
            { url: "/images/apple-touch-icon-120x120.png", sizes: "120x120", type: "image/png" },
            { url: "/images/apple-touch-icon-144x144.png", sizes: "144x144", type: "image/png" },
            { url: "/images/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
            { url: "/images/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
        ],
        // Android/PWA 用
        other: [
            { url: "/images/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
            { url: "/images/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
            // PWA maskable icon
            { url: "/images/maskable-icon-192x192.png", sizes: "192x192", type: "image/png", rel: "maskable" },
            { url: "/images/maskable-icon-512x512.png", sizes: "512x512", type: "image/png", rel: "maskable" },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: "Kevin | blog",
        description: "Hi, I'm Kevin, a Frontend Developer.",
        locale: "zh_TW",
        type: "website",
        siteName: "HLKW.me",
        images: [
            {
                url: "/images/open_graph.jpg",
                width: 1632,
                height: 918,
                alt: "HLKW.me Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Kevin | blog",
        description: "Hi, I'm Kevin, a Frontend Developer.",
        images: ["/images/open_graph.jpg"],
    },
    alternates: {
        canonical: "/",
    },
};

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const locale = (await params).locale;
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html suppressHydrationWarning lang={locale}>
            <body className={`${roboto.variable} antialiased`} id="root">
                <ThemeProvider>
                    <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
