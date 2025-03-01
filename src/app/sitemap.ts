import { MetadataRoute } from "next";
import getAllPosts from "@/utils/getAllPosts";
import getAllCategories from "@/utils/getAllCateGories";

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

        // 添加部落格文章列表
        baseEntries.push({
            url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN!}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        });

        // 添加部落格文章分類
        const categories = await getAllCategories();
        // 過濾重複並去除 null 或 undefined 值
        const uniqueCategories = ["all", ...new Set(categories.filter(Boolean))];

        for (const category of uniqueCategories) {
            baseEntries.push({
                url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN!}/blog/${category}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.8,
            });
        }

        // 添加部落格文章頁面
        const posts = await getAllPosts();

        // 過濾掉草稿文章
        const publishedPosts = posts.filter((post) => !post.frontmatter.draft);

        for (const post of publishedPosts) {
            baseEntries.push({
                url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN!}/blog/posts/${post.slug}`,
                lastModified: new Date(post.frontmatter.date),
                changeFrequency: "monthly",
                priority: 0.7,
            });
        }

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
            {
                url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN!}/blog`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.9,
            },
            {
                url: `${process.env.NEXT_PUBLIC_SITE_DOMAIN!}/blog/all`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.8,
            },
        ];
    }
}
