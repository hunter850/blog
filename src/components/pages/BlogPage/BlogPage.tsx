// components
import Link from "next/link";
import DefaultTemplate from "@/components/templates/DefaultTemplate";
// utils
import getAllPosts from "@/utils/getAllPosts";
import getPostsByCategory from "@/utils/getPostsByCategory";

export interface BlogPageProps {
    category?: string;
}

async function BlogPage(props: BlogPageProps): Promise<React.JSX.Element> {
    const category = props?.category ?? null;
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
