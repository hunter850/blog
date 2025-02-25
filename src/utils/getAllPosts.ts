import * as path from "path";
import listMdxFilePaths from "@/utils/listMdxFilePaths";
import mdxFilepathsToUrlpaths from "@/utils/mdxFilepathsToUrlpaths";
import getPostsBySlug from "@/utils/getPostsBySlug";

async function getAllPosts() {
    const filepath = path.join(process.cwd(), "src/contents");
    const mdxFilepaths = listMdxFilePaths(filepath); // 取得所有 .mdx 檔案的路徑
    const urlpaths = mdxFilepathsToUrlpaths(mdxFilepaths); // 將路徑轉換為 URL 路徑
    const posts = await Promise.all(urlpaths.map(getPostsBySlug));
    return posts;
}

export default getAllPosts;
