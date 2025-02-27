import { notFound } from "next/navigation";
import NarrowContentTemplate from "@/components/templates/NarrowContentTemplate/NarrowContentTemplate";
import PostArticle from "@/components/organisms/PostArticle/PostArticle";
import { compileMDX } from "next-mdx-remote/rsc";
import * as fs from "fs";
import * as path from "path";
// utils
import isInLocale from "@/utils/isInLocale";
// types
import type { Frontmatter } from "@/types";

export interface PostsPageProps {
    slugs?: string[];
    locale: string;
}

// props: { locale: 'zh-TW', slug: [ '2025-02', 'hello-world' ] }
async function PostsPage(props: PostsPageProps): Promise<React.JSX.Element> {
    try {
        if (props?.slugs === undefined) {
            notFound();
        }
        // 避免直接靠網址內含 locale 的 slug 直接進入文章
        if (isInLocale(props.slugs.join("/"))) {
            notFound();
        }
        // 先找沒有 locale 的 slug
        let filepath: string = path.join(process.cwd(), `src/contents/${props.slugs.join("/")}.mdx`);
        if (!fs.existsSync(filepath)) {
            // 如果沒有，則找有 locale 的 slug
            filepath = path.join(process.cwd(), `src/contents/${props.locale}/${props.slugs.join("/")}.mdx`);
            if (!fs.existsSync(filepath)) {
                notFound();
            }
        }
        const fileContent = fs.readFileSync(filepath, "utf-8");
        const { frontmatter } = await compileMDX<Frontmatter>({
            source: fileContent,
            options: { parseFrontmatter: true },
        });

        return (
            <NarrowContentTemplate>
                <PostArticle frontmatter={frontmatter} content={fileContent} />
            </NarrowContentTemplate>
        );
    } catch {
        notFound();
    }
}

export default PostsPage;
