import BlogPage from "@/components/pages/BlogPage";
// utils
import getAllCategories from "@/utils/getAllCateGories";

export interface BlogProps {
    params: Promise<{ category: string }>;
}

export default async function Blog(props: BlogProps) {
    const params = await props.params;
    return <BlogPage category={params.category} />;
}

export async function generateStaticParams() {
    const categories = await getAllCategories();

    // 為每個 locale 和 category 組合生成靜態路徑
    const paths = [];
    for (const category of ["all", ...categories]) {
        paths.push({
            category,
        });
    }

    return paths;
}
