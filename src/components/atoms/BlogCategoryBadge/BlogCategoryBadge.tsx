import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";

export interface BlogCategoryBadgeProps {
    category: string;
    currentCategory: string | null;
    isAll?: boolean;
}

function BlogCategoryBadge({ category, currentCategory, isAll = false }: BlogCategoryBadgeProps): React.JSX.Element {
    const isActive = category === currentCategory || (isAll && currentCategory === null && category === "all");

    return (
        <Link href={`/blog/${category}`}>
            <Badge
                variant={isActive ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                    isActive
                        ? "bg-slate-700 hover:bg-slate-800 dark:bg-cyan-700 dark:hover:bg-cyan-600"
                        : "border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-100 dark:text-cyan-400 dark:hover:bg-cyan-900/30"
                }`}
            >
                {category}
            </Badge>
        </Link>
    );
}

export default BlogCategoryBadge;
