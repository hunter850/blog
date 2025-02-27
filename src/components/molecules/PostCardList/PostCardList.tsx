import PostCard from "@/components/molecules/PostCard/PostCard";
import type { Post } from "@/types";

export interface PostCardListProps {
    posts: Post[];
}

function PostCardList({ posts }: PostCardListProps): React.JSX.Element {
    return (
        <div className="grid gap-6">
            {posts.map((post) => (
                <PostCard key={post.slug + post.frontmatter.language} post={post} />
            ))}
        </div>
    );
}

export default PostCardList;
