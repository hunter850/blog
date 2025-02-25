import PostsPage from "@/components/pages/PostsPage";
import * as path from "path";
// utils
import listMdxFilePaths from "@/utils/listMdxFilePaths";
import mdxFilepathsToUrlpaths from "@/utils/mdxFilepathsToUrlpaths";

export interface PostsProps {
    params: Promise<{ slug: string[] }>;
}

export default async function Posts(props: PostsProps) {
    return <PostsPage {...props} />;
}

export function generateStaticParams() {
    const filepath = path.join(process.cwd(), "src/contents");
    const mdxFilepaths = listMdxFilePaths(filepath); // 取得所有 .mdx 檔案的路徑
    const urlpaths = mdxFilepathsToUrlpaths(mdxFilepaths); // 將路徑轉換為 URL 路徑
    const slugs = urlpaths.map((urlpath) => ({ slug: urlpath.split("/") })); // 將 URL 路徑轉換為 slug
    console.log("slugs: ", slugs);
    return slugs;
}

export const dynamicParams = false;
