import PostTag from "@/components/atoms/PostTag/PostTag";

export interface PostTagListProps {
    tags: string[];
}

function PostTagList({ tags }: PostTagListProps): React.JSX.Element | null {
    if (!tags || tags.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
                <PostTag key={tag} tag={tag} />
            ))}
        </div>
    );
}

export default PostTagList;
