import { Fragment } from "react";
import { Metadata } from "next";
// components
import BlogPage from "@/components/pages/BlogPage";

export const metadata: Metadata = {
    title: "Kevin | Blog",
    description: "探索 Kevin 的技術文章、心得分享和網頁開發經驗。涵蓋 React、Next.js、TypeScript 等前端技術主題。",
    keywords: [
        "Kevin",
        "Kevin Luo",
        "Kevin's Blog",
        "Frontend Developer",
        "Web Development",
        "Blog",
        "前端",
        "前端工程師",
        "網頁開發",
        "部落格",
        "React",
        "Next.js",
        "TypeScript",
    ],
    authors: [{ name: "Kevin Luo" }],
    openGraph: {
        title: "Kevin | Blog",
        description: "探索 Kevin 的技術文章、心得分享和網頁開發經驗。涵蓋 React、Next.js、TypeScript 等前端技術主題。",
        url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/blog`,
        siteName: "Kevin's Blog",
        locale: "zh-TW",
        type: "website",
        images: [
            {
                url: `/images/android-chrome-512x512.png`,
                width: 1632,
                height: 918,
                alt: "Kevin's Blog - Blog Page",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Kevin | Blog",
        description: "探索Kevin的技術文章、心得分享和前端開發經驗。涵蓋React、Next.js、TypeScript等前端技術主題。",
        images: [`/images/android-chrome-512x512.png`],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/blog`,
    },
};

export default async function Blog(): Promise<React.JSX.Element> {
    return (
        <Fragment>
            <BlogPage />
        </Fragment>
    );
}
