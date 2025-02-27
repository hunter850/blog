import { CardFooter } from "@/components/ui/card";
import PostTagList from "@/components/molecules/PostTagList/PostTagList";

export interface PostCardFooterProps {
    tags?: string[];
}

function PostCardFooter({ tags }: PostCardFooterProps): React.JSX.Element | null {
    if (!tags || tags.length === 0) return null;

    return (
        <CardFooter className="flex flex-wrap gap-2 pt-0">
            <PostTagList tags={tags} />
        </CardFooter>
    );
}

export default PostCardFooter;
