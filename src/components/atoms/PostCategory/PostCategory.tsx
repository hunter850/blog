import { Badge } from "@/components/ui/badge";

export interface PostCategoryProps {
    category: string;
}

function PostCategory({ category }: PostCategoryProps): React.JSX.Element | null {
    if (!category) return null;
    
    return (
        <Badge className="bg-slate-700 hover:bg-slate-800 dark:bg-cyan-700 dark:hover:bg-cyan-600">
            {category}
        </Badge>
    );
}

export default PostCategory; 