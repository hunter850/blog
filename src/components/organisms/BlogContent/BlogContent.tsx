import BlogCategoryList from "@/components/molecules/BlogCategoryList/BlogCategoryList";
import PostCardList from "@/components/molecules/PostCardList/PostCardList";
import EmptyPostList from "@/components/atoms/EmptyPostList/EmptyPostList";
import type { Post } from "@/types";

export interface BlogContentProps {
    categories: string[];
    currentCategory: string | null;
    posts: Post[];
    categoryTitle: string;
    emptyMessage: string;
}

function BlogContent({
    categories,
    currentCategory,
    posts,
    categoryTitle,
    emptyMessage,
}: BlogContentProps): React.JSX.Element {
    return (
        <>
            <BlogCategoryList categories={categories} currentCategory={currentCategory} title={categoryTitle} />

            {posts.length > 0 ? <PostCardList posts={posts} /> : <EmptyPostList message={emptyMessage} />}
        </>
    );
}

export default BlogContent;
