import getAllPosts from "@/utils/getAllPosts";

async function getPostsByCategory(category: string) {
    const posts = await getAllPosts();
    const postsByCategory = posts.filter((post) => post.frontmatter.category === category);
    return postsByCategory;
}

export default getPostsByCategory;
