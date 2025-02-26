import PostsPage from "@/components/pages/PostsPage";
import * as path from "path";
// utils
import listMdxFilePaths from "@/utils/listMdxFilePaths";
import mdxFilepathsToUrlpaths from "@/utils/mdxFilepathsToUrlpaths";
import isInLocale from "@/utils/isInLocale";
// i18n
import { LOCALES } from "@/i18n/routing";

export interface PostsProps {
    params: Promise<{ locale: string; slug: string[] }>;
}

export default async function Posts(props: PostsProps) {
    const params = await props.params;
    // console.log("posts params: ", params);
    return <PostsPage slugs={params.slug} locale={params.locale} />;
}

export async function generateStaticParams() {
    const filepath = path.join(process.cwd(), "src/contents");
    const mdxFilepaths = listMdxFilePaths(filepath);
    const urlpaths = mdxFilepathsToUrlpaths(mdxFilepaths);

    // 為每個 locale 和 slug 組合生成靜態路徑
    const paths = [];
    for (const urlpath of urlpaths) {
        // 如果文章在任何 locale 中，則只產生對應的 locale 靜態路徑
        if (isInLocale(urlpath)) {
            paths.push({
                locale: urlpath.split("/")[0],
                slug: urlpath.split("/").slice(1),
            });
        } else {
            // 如果文章不在任何 locale 中，則產生所有 locale 的靜態路徑
            for (const locale of LOCALES) {
                paths.push({
                    locale,
                    slug: urlpath.split("/"),
                });
            }
        }
    }

    return paths;
}
