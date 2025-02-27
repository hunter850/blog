import { notFound } from "next/navigation";
// components
// import Link from "next/link";
import { Link } from "@/i18n/routing";
import NarrowContentTemplate from "@/components/templates/NarrowContentTemplate/NarrowContentTemplate";
import BlogContent from "@/components/organisms/BlogContent/BlogContent";
// utils
import getAllPosts from "@/utils/getAllPosts";
import getPostsByCategory from "@/utils/getPostsByCategory";
import { getTranslations } from "next-intl/server";
// configs
import blogCategories from "@/config/blog_categories.json";
// ui components
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CalendarIcon, TagIcon } from "lucide-react";
// date formatting
import { format, parseISO } from "date-fns";
import { zhTW } from "date-fns/locale";
// types
import type { Post } from "@/types";

export interface BlogPageProps {
    category?: string;
    locale: string;
}

function sortByDate(a: Post, b: Post) {
    const dateA = a?.frontmatter?.date ? new Date(a.frontmatter.date).getTime() : 0;
    const dateB = b?.frontmatter?.date ? new Date(b.frontmatter.date).getTime() : 0;
    return dateB - dateA; // 降序排列，最新的在最上面
}

async function BlogPage(props: BlogPageProps): Promise<React.JSX.Element> {
    const t = await getTranslations("blogPage");
    const category = props?.category ?? null;
    if (typeof category === "string" && !(blogCategories as string[]).includes(category)) {
        notFound();
    }

    // 取得文章並按日期排序（最新的在最上面）
    const posts = category === null || category === "all" ? await getAllPosts() : await getPostsByCategory(category);

    // 按語言過濾文章 如果語言是 all 則不過濾
    const postsByLanguage = posts.filter(
        (post) => post.frontmatter.language === "all" || post.frontmatter.language === props.locale
    );

    // 過濾草稿文章
    const postsByLanguageAndDraft = postsByLanguage.filter((post) => !post.frontmatter.draft);

    // 按日期排序文章
    const descendingPosts = postsByLanguageAndDraft.sort(sortByDate);

    return (
        <NarrowContentTemplate>
            <BlogContent
                categories={blogCategories as string[]}
                currentCategory={category}
                posts={descendingPosts}
                categoryTitle={t("categories")}
                emptyMessage={t("noArticles")}
            />
        </NarrowContentTemplate>
    );
}

export default BlogPage;
