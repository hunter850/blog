import { CardContent, CardDescription } from "@/components/ui/card";

export interface PostCardContentProps {
    description: string;
}

function PostCardContent({ description }: PostCardContentProps): React.JSX.Element {
    return (
        <CardContent>
            <CardDescription className="text-slate-600 dark:text-slate-300">{description}</CardDescription>
        </CardContent>
    );
}

export default PostCardContent;
