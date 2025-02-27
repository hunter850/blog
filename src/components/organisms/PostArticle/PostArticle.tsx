import PostHeader from "@/components/molecules/PostHeader/PostHeader";
import PostContent from "@/components/molecules/PostContent/PostContent";
import type { Frontmatter } from "@/types";

export interface PostArticleProps {
    frontmatter: Frontmatter;
    content: string;
}

function PostArticle({ frontmatter, content }: PostArticleProps): React.JSX.Element {
    return (
        <article className="mx-auto">
            <PostHeader frontmatter={frontmatter} />
            <PostContent content={content} />
        </article>
    );
}

export default PostArticle;
