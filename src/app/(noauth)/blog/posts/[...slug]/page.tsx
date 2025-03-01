import PostsPage from "@/components/pages/PostsPage";
import * as path from "path";
import * as fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { Metadata } from "next";
// utils
import listMdxFilePaths from "@/utils/listMdxFilePaths";
import mdxFilepathsToUrlpaths from "@/utils/mdxFilepathsToUrlpaths";
// types
import type { Frontmatter } from "@/types";

export interface PostsProps {
    params: Promise<{ slug: string[] }>;
}

export default async function Posts(props: PostsProps) {
    const params = await props.params;
    // console.log("posts params: ", params);
    return <PostsPage slugs={params.slug} />;
}

export async function generateMetadata(props: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    try {
        const params = await props.params;
        // 取得文章路徑
        const filepath: string = path.join(process.cwd(), `src/contents/${params.slug.join("/")}.mdx`);

        // 檢查文件是否存在
        if (!fs.existsSync(filepath)) {
            return {
                title: "文章不存在 | Kevin's Blog",
                description: "找不到請求的文章",
            };
        }

        // 讀取文件內容
        const fileContent = fs.readFileSync(filepath, "utf-8");

        // 解析frontmatter
        const { frontmatter } = await compileMDX<Frontmatter>({
            source: fileContent,
            options: { parseFrontmatter: true },
        });

        // 構建URL
        const url = process.env.NEXT_PUBLIC_SITE_DOMAIN || "";
        const postUrl = `${url}/blog/posts/${params.slug.join("/")}`;

        // 構建圖片URL
        const imageUrl = frontmatter?.image ? frontmatter.image : `/images/android-chrome-512x512.png`;

        // 返回metadata
        return {
            title: `${frontmatter.title}`,
            description: frontmatter.description,
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
                frontmatter.category,
                ...frontmatter.tags,
            ],
            authors: [{ name: "Kevin Luo" }],
            openGraph: {
                title: frontmatter.title,
                description: frontmatter.description,
                url: postUrl,
                siteName: "Kevin's Blog",
                locale: frontmatter.language,
                type: "article",
                publishedTime: frontmatter.date,
                authors: ["Kevin Luo"],
                images: [
                    {
                        url: imageUrl,
                        width: 1200,
                        height: 630,
                        alt: frontmatter.title,
                    },
                ],
            },
            twitter: {
                card: "summary_large_image",
                title: frontmatter.title,
                description: frontmatter.description,
                images: [imageUrl],
            },
            alternates: {
                canonical: postUrl,
            },
        };
    } catch (error) {
        console.error("Error generating metadata:", error);
        return {
            title: "部落格文章 | Kevin's Blog",
            description: "Kevin的個人部落格文章",
        };
    }
}

export async function generateStaticParams() {
    const filepath = path.join(process.cwd(), "src/contents");
    const mdxFilepaths = listMdxFilePaths(filepath);
    const urlpaths = mdxFilepathsToUrlpaths(mdxFilepaths);

    // 為每個 slug 生成靜態路徑
    return urlpaths.map((urlpath) => ({ slug: urlpath.split("/") }));
}
