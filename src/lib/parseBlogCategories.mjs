import * as fs from "fs";
import * as path from "path";
// import { compileMDX } from "next-mdx-remote/rsc";

async function getPostsBySlug(slug) {
    const { compileMDX } = await import("next-mdx-remote/rsc");
    const filepath = path.join(process.cwd(), `src/contents/${slug}.mdx`);
    const fileContent = fs.readFileSync(filepath, "utf8");
    const { frontmatter, content } = await compileMDX({
        source: fileContent,
        options: { parseFrontmatter: true },
    });
    return {
        frontmatter,
        content,
        slug,
    };
}

function listMdxFilePaths(dirPath, basePath = "") {
    let result = [];
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const fullPath = path.join(dirPath, file);
        const relativePath = path.join(basePath, file);

        if (fs.statSync(fullPath).isDirectory()) {
            // 如果是資料夾，遞迴進入
            result = result.concat(listMdxFilePaths(fullPath, relativePath));
        } else if (file.endsWith(".mdx")) {
            // 如果是 .mdx 檔案，加入結果
            result.push(relativePath);
        }
    });

    return result;
}

function mdxFilepathsToUrlpaths(mdxFilepaths) {
    return mdxFilepaths.map((mdxFilepath) => mdxFilepath.replace(/.mdx$/, "").split("\\").join("/"));
}

async function getAllPosts() {
    const filepath = path.join(process.cwd(), "src/contents");
    const mdxFilepaths = listMdxFilePaths(filepath); // 取得所有 .mdx 檔案的路徑
    const urlpaths = mdxFilepathsToUrlpaths(mdxFilepaths); // 將路徑轉換為 URL 路徑
    const posts = await Promise.all(urlpaths.map(getPostsBySlug));
    return posts;
}

async function getAllCategories() {
    const posts = await getAllPosts();
    const categories = posts.map((post) => post.frontmatter.category);
    return categories;
}

async function parseBlogCategories() {
    try {
        const categories = await getAllCategories();
        const blogCategoriesConfigPath = path.join(process.cwd(), "src/config/blog_categories.json");
        const categoriesWithoutDuplicates = Array.from(new Set(["all", ...categories]));
        fs.writeFileSync(blogCategoriesConfigPath, JSON.stringify(categoriesWithoutDuplicates));
    } catch (error) {
        console.error("Error parsing blog categories: ", error);
    }
}

parseBlogCategories();
