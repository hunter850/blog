import * as fs from "fs";
import * as path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import isInLocale from "@/utils/isInLocale";
// types
import type { Frontmatter, Post } from "@/types";

async function getPostsBySlug(slug: string): Promise<Post> {
    const filepath = path.join(process.cwd(), `src/contents/${slug}.mdx`);
    const fileContent = fs.readFileSync(filepath, "utf8");
    const { frontmatter, content } = await compileMDX<Frontmatter>({
        source: fileContent,
        options: { parseFrontmatter: true },
    });
    if (isInLocale(slug)) {
        return {
            frontmatter,
            content,
            slug: slug.split("/").slice(1).join("/"),
        };
    } else {
        return {
            frontmatter,
            content,
            slug,
        };
    }
}

export default getPostsBySlug;
