import { TagIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface PostTagProps {
    tag: string;
}

function PostTag({ tag }: PostTagProps): React.JSX.Element {
    return (
        <Badge variant="secondary" className="bg-blue-50 text-blue-500 dark:bg-cyan-900/30 dark:text-cyan-300">
            <TagIcon className="mr-1 h-3 w-3" />
            {tag}
        </Badge>
    );
}

export default PostTag;
