import PostsPage from "@/components/pages/PostsPage";
import * as path from "path";
// utils
import listMdxFilePaths from "@/utils/listMdxFilePaths";
import mdxFilepathsToUrlpaths from "@/utils/mdxFilepathsToUrlpaths";
// i18n
import { LOCALES } from "@/i18n/routing";

export interface PostsProps {
    params: Promise<{ locale: string; slug: string[] }>;
}

export default async function Posts(props: PostsProps) {
    const params = await props.params;
    // console.log("posts params: ", params);
    return <PostsPage slugs={params.slug} />;
}

export async function generateStaticParams() {
    const filepath = path.join(process.cwd(), "src/contents");
    const mdxFilepaths = listMdxFilePaths(filepath);
    const urlpaths = mdxFilepathsToUrlpaths(mdxFilepaths);

    // 為每個 locale 和 slug 組合生成靜態路徑
    const paths = [];
    for (const locale of LOCALES) {
        for (const urlpath of urlpaths) {
            paths.push({
                locale,
                slug: urlpath.split("/"),
            });
        }
    }

    return paths;
}
