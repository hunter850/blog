import { notFound } from "next/navigation";
// components
import NarrowContentTemplate from "@/components/templates/NarrowContentTemplate/NarrowContentTemplate";
import BlogContent from "@/components/organisms/BlogContent/BlogContent";
// utils
import getAllPosts from "@/utils/getAllPosts";
import getPostsByCategory from "@/utils/getPostsByCategory";
// configs
import blogCategories from "@/config/blog_categories.json";
// types
import type { Post } from "@/types";

export interface BlogPageProps {
    category?: string;
}

function sortByDate(a: Post, b: Post) {
    const dateA = a?.frontmatter?.date ? new Date(a.frontmatter.date).getTime() : 0;
    const dateB = b?.frontmatter?.date ? new Date(b.frontmatter.date).getTime() : 0;
    return dateB - dateA; // 降序排列，最新的在最上面
}

async function BlogPage(props: BlogPageProps): Promise<React.JSX.Element> {
    const category = props?.category ?? null;
    if (typeof category === "string" && !(blogCategories as string[]).includes(category)) {
        notFound();
    }

    // 取得文章並按日期排序（最新的在最上面）
    const posts = category === null || category === "all" ? await getAllPosts() : await getPostsByCategory(category);

    // 過濾草稿文章
    const postsByLanguageAndDraft = posts.filter((post) => !post.frontmatter.draft);

    // 按日期排序文章
    const descendingPosts = postsByLanguageAndDraft.sort(sortByDate);

    return (
        <NarrowContentTemplate>
            <BlogContent
                categories={blogCategories as string[]}
                currentCategory={category}
                posts={descendingPosts}
                categoryTitle={"文章分類"}
                emptyMessage={"暫無文章"}
            />
        </NarrowContentTemplate>
    );
}

export default BlogPage;
