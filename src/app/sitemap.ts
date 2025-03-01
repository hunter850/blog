import { MetadataRoute } from "next";

export const revalidate = 4320; // 12小時 = 12 * 60 * 60 秒

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    try {
        // 基本的 sitemap 條目（保證至少有首頁）
        const baseEntries: MetadataRoute.Sitemap = [
            {
                url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN!}`,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 1,
            },
            {
                url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN!}/about`,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 1,
            },
        ];
        return baseEntries;
    } catch (error) {
        console.error("Error generating sitemap:", error);
        return [
            {
                url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN!}`,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 1,
            },
            {
                url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN!}/about`,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 1,
            },
        ];
    }
}
