import { Metadata } from "next";
// components
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
    title: "Kevin | About",
    description: "Hi, I'm Kevin, a Frontend Developer. 了解更多關於我的經歷、技能和專業背景。",
    keywords: [
        "Kevin",
        "Kevin Luo",
        "Kevin's Blog",
        "Frontend Developer",
        "Web Development",
        "About",
        "前端",
        "前端工程師",
        "網頁開發",
        "關於我",
    ],
    authors: [{ name: "Kevin Luo" }],
    openGraph: {
        title: "Kevin | About",
        description: "Hi, I'm Kevin, a Frontend Developer. 了解更多關於我的經歷、技能和專業背景。",
        url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/about`,
        siteName: "Kevin's Blog",
        locale: "zh-TW",
        type: "website",
        images: [
            {
                url: `/images/android-chrome-512x512.png`,
                width: 1632,
                height: 918,
                alt: "Kevin's Blog - About Page",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Kevin | About",
        description: "Hi, I'm Kevin, a Frontend Developer. 了解更多關於我的經歷、技能和專業背景。",
        images: [`/images/android-chrome-512x512.png`],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/about`,
    },
};

async function About(): Promise<React.JSX.Element> {
    return <AboutPage />;
}

export default About;
