import BlogPage from "@/components/pages/BlogPage";
// utils
import getAllCategories from "@/utils/getAllCateGories";

export interface BlogProps {
    params: Promise<{ category: string }>;
}

export default async function Blog(props: BlogProps) {
    return <BlogPage {...props} />;
}

export async function generateStaticParams() {
    const categories = await getAllCategories();
    return [{ category: "all" }, ...categories.map((category) => ({ category }))];
}

export const dynamicParams = false;
