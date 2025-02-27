import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import PostCardHeader from "@/components/atoms/PostCardHeader/PostCardHeader";
import PostCardContent from "@/components/atoms/PostCardContent/PostCardContent";
import PostCardFooter from "@/components/atoms/PostCardFooter/PostCardFooter";
import type { Post } from "@/types";

export interface PostCardProps {
    post: Post;
}

function PostCard({ post }: PostCardProps): React.JSX.Element {
    return (
        <Link href={`/blog/posts/${post.slug}`} className="block no-underline">
            <Card className="overflow-hidden border border-slate-200 bg-white shadow-[1px_2px_6px_0px_rgba(0,_0,_0,_0.1)] transition-shadow hover:shadow-[2px_4px_8px_2px_rgba(0,_0,_0,_0.1)] dark:border-slate-700 dark:bg-slate-800 dark:hover:border-cyan-700 dark:hover:shadow-[0_0_15px_rgba(8,145,178,0.15)]">
                <PostCardHeader title={post.frontmatter.title} date={post.frontmatter.date} />
                <PostCardContent description={post.frontmatter.description} />
                <PostCardFooter tags={post.frontmatter.tags} />
            </Card>
        </Link>
    );
}

export default PostCard;
