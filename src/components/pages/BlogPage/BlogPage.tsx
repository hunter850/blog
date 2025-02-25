// components
import Link from "next/link";
import MsLogoutButton from "@/components/atoms/MsLogoutButton";
import DefaultTemplate from "@/components/templates/DefaultTemplate";
// utils
import getAllPosts from "@/utils/getAllPosts";
import getPostsByCategory from "@/utils/getPostsByCategory";
// types
import type { BlogProps } from "@/app/[locale]/(noauth)/blog/[category]/page";

// export type BlogPageProps = BlogProps | {};

async function BlogPage(props: Partial<BlogProps>): Promise<React.JSX.Element> {
    const category = props?.params ? (await props.params).category : null;
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
