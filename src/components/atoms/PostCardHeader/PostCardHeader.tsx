import { CardHeader, CardTitle } from "@/components/ui/card";
import PostDate from "@/components/atoms/PostDate/PostDate";

export interface PostCardHeaderProps {
    title: string;
    date?: string;
}

function PostCardHeader({ title, date }: PostCardHeaderProps): React.JSX.Element {
    return (
        <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-100">{title}</CardTitle>
            {date && (
                <div className="mt-1">
                    <PostDate date={date} />
                </div>
            )}
        </CardHeader>
    );
}

export default PostCardHeader;
