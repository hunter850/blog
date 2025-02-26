import { notFound } from "next/navigation";
// components
import Link from "next/link";
import NarrowContentTemplate from "@/components/templates/NarrowContentTemplate";
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

    // 获取文章并按日期排序（最新的在最上面）
    const posts = category === null || category === "all" ? await getAllPosts() : await getPostsByCategory(category);

    // 按日期排序文章
    const descendingPosts = posts.sort(sortByDate);

    return (
        <NarrowContentTemplate>
            {/* 分類導覽列 */}
            <div className="mb-8">
                <h2 className="mb-4 text-xl font-semibold text-slate-700 dark:text-slate-200">{t("categories")}</h2>
                <div className="flex flex-wrap gap-2">
                    {(blogCategories as string[]).map((cat) => (
                        <Link key={cat} href={`/blog/${cat}`}>
                            <Badge
                                variant={
                                    category === cat || (category === null && cat === "all") ? "default" : "outline"
                                }
                                className="cursor-pointer transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
                            >
                                {cat}
                            </Badge>
                        </Link>
                    ))}
                </div>
            </div>

            {/* 文章列表 */}
            <div className="grid gap-6">
                {descendingPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/posts/${post.slug}`} className="block no-underline">
                        <Card className="overflow-hidden border border-slate-200 bg-white transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-100">
                                    {post.frontmatter.title}
                                </CardTitle>
                                {post.frontmatter.date && (
                                    <div className="mt-1 flex items-center text-sm text-slate-500 dark:text-slate-400">
                                        <CalendarIcon className="mr-1 h-4 w-4" />
                                        <span>
                                            {format(parseISO(post.frontmatter.date), "yyyy-MM-dd", { locale: zhTW })}
                                        </span>
                                    </div>
                                )}
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-slate-600 dark:text-slate-300">
                                    {post.frontmatter.description}
                                </CardDescription>
                            </CardContent>
                            {post.frontmatter.tags && (
                                <CardFooter className="flex flex-wrap gap-2 pt-0">
                                    {post.frontmatter.tags.map((tag: string) => (
                                        <Badge
                                            key={tag}
                                            variant="secondary"
                                            className="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                                        >
                                            <TagIcon className="mr-1 h-3 w-3" />
                                            {tag}
                                        </Badge>
                                    ))}
                                </CardFooter>
                            )}
                        </Card>
                    </Link>
                ))}
            </div>

            {descendingPosts.length === 0 && (
                <div className="py-12 text-center">
                    <p className="text-slate-600 dark:text-slate-300">{t("noArticles")}</p>
                </div>
            )}
        </NarrowContentTemplate>
    );
}

export default BlogPage;
