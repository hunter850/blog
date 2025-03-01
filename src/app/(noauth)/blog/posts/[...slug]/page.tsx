import PostsPage from "@/components/pages/PostsPage";
import * as path from "path";
// utils
import listMdxFilePaths from "@/utils/listMdxFilePaths";
import mdxFilepathsToUrlpaths from "@/utils/mdxFilepathsToUrlpaths";

export interface PostsProps {
    params: Promise<{ slug: string[] }>;
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

    // 為每個 slug 生成靜態路徑
    return urlpaths.map((urlpath) => ({ slug: urlpath.split("/") }));
}
