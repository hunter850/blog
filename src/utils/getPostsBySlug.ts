import * as fs from "fs";
import * as path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

async function getPostsBySlug(slug: string) {
    const filepath = path.join(process.cwd(), `src/contents/${slug}.mdx`);
    const fileContent = fs.readFileSync(filepath, "utf8");
    const { frontmatter, content } = await compileMDX<{
        title: string;
        date: string;
        category: string;
        tags: string[];
        description: string;
        image?: string;
    }>({
        source: fileContent,
        options: { parseFrontmatter: true },
    });
    return {
        frontmatter,
        content,
        slug,
    };
}

export default getPostsBySlug;
