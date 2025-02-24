import { MetadataRoute } from "next";

// 強制在建置時生成
export const dynamic = "force-static";
// 禁用所有動態行為
export const dynamicParams = false;

// 在建置時就確定的內容
const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN!;

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/"],
        },
        sitemap: `${SITE_DOMAIN}/sitemap.xml`,
    };
}
