import BlogCategoryBadge from "@/components/atoms/BlogCategoryBadge/BlogCategoryBadge";

export interface BlogCategoryListProps {
    categories: string[];
    currentCategory: string | null;
    title: string;
}

function BlogCategoryList({ categories, currentCategory, title }: BlogCategoryListProps): React.JSX.Element {
    return (
        <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-slate-700 dark:text-slate-200">{title}</h2>
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <BlogCategoryBadge
                        key={category}
                        category={category}
                        currentCategory={currentCategory}
                        isAll={category === "all"}
                    />
                ))}
            </div>
        </div>
    );
}

export default BlogCategoryList;
