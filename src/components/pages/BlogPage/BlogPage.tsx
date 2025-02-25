import { notFound } from "next/navigation";
// components
import Link from "next/link";
import DefaultTemplate from "@/components/templates/DefaultTemplate";
// utils
import getAllPosts from "@/utils/getAllPosts";
import getPostsByCategory from "@/utils/getPostsByCategory";
// configs
import blogCategories from "@/config/blog_categories.json";

export interface BlogPageProps {
    category?: string;
}

async function BlogPage(props: BlogPageProps): Promise<React.JSX.Element> {
    const category = props?.category ?? null;
    if (typeof category === "string" && !(blogCategories as string[]).includes(category)) {
        notFound();
    }
    const posts = category === null || category === "all" ? await getAllPosts() : await getPostsByCategory(category);
    return (
        <DefaultTemplate>
            {posts.map((post) => {
                return (
                    <Link key={post.slug} href={`/blog/posts/${post.slug}`}>
                        <div>
                            <h1>{post.frontmatter.title}</h1>
                            <p>{post.frontmatter.description}</p>
                        </div>
                    </Link>
                );
            })}
        </DefaultTemplate>
    );
}

export default BlogPage;
