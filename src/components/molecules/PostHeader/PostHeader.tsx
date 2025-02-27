import PostDate from "@/components/atoms/PostDate/PostDate";
import PostCategory from "@/components/atoms/PostCategory/PostCategory";
import PostTagList from "@/components/molecules/PostTagList/PostTagList";
import type { Frontmatter } from "@/types";

export interface PostHeaderProps {
    frontmatter: Frontmatter;
}

function PostHeader({ frontmatter }: PostHeaderProps): React.JSX.Element {
    return (
        <header className="relative mb-8 bg-white pb-6 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-slate-200 dark:bg-transparent dark:after:bg-slate-700">
            <h1 className="mb-3 text-3xl font-bold text-slate-800 dark:text-slate-100">{frontmatter.title}</h1>

            <div className="mb-4 flex items-center gap-4">
                <PostDate date={frontmatter.date} />
                {frontmatter.category && <PostCategory category={frontmatter.category} />}
            </div>

            <PostTagList tags={frontmatter.tags} />
        </header>
    );
}

export default PostHeader;
