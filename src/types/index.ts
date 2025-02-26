import type { CompileMDXResult } from "next-mdx-remote/rsc";

export interface NavLink {
    href: string;
    label: string;
}

export interface Frontmatter {
    title: string;
    date: string;
    category: string;
    tags: string[];
    description: string;
    language: string;
    draft?: boolean;
    image?: string;
}

export interface Post {
    slug: string;
    frontmatter: Frontmatter;
    content: CompileMDXResult<Frontmatter>["content"];
}
