import * as fs from "fs";
import * as path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
// types
import type { Frontmatter, Post } from "@/types";

async function getPostsBySlug(slug: string): Promise<Post> {
    const filepath = path.join(process.cwd(), `src/contents/${slug}.mdx`);
    const fileContent = fs.readFileSync(filepath, "utf8");
    const { frontmatter, content } = await compileMDX<Frontmatter>({
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
