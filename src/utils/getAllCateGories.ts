import getAllPosts from "@/utils/getAllPosts";

async function getAllCategories() {
    const posts = await getAllPosts();
    const categories = posts.map((post) => post.frontmatter.category);
    return categories;
}

export default getAllCategories;
