import BlogPage from "@/components/pages/BlogPage";
// utils
import getAllCategories from "@/utils/getAllCateGories";
// i18n
import { LOCALES } from "@/i18n/routing";

export interface BlogProps {
    params: Promise<{ locale: string; category: string }>;
}

export default async function Blog(props: BlogProps) {
    const params = await props.params;
    return <BlogPage category={params.category} />;
}

export async function generateStaticParams() {
    const categories = await getAllCategories();

    // 為每個 locale 和 category 組合生成靜態路徑
    const paths = [];
    for (const locale of LOCALES) {
        for (const category of ["all", ...categories]) {
            paths.push({
                locale,
                category,
            });
        }
    }

    return paths;
}
