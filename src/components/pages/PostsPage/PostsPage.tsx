import { notFound } from "next/navigation";
import DefaultTemplate from "@/components/templates/DefaultTemplate";
import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import themeLight from "shiki/dist/themes/one-light.mjs";
import themeDark from "shiki/dist/themes/one-dark-pro.mjs";
import { createHighlighter } from "shiki/bundle/web";
import rehypePrettyCode from "rehype-pretty-code";
import * as fs from "fs";
import * as path from "path";
// components
import CodeBlockCopyButton from "@/components/atoms/CodeBlockCopyButton";
// types
import type { PostsProps } from "@/app/[locale]/(noauth)/blog/posts/[...slug]/page";
import type { Options } from "rehype-pretty-code";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";

const components: MDXRemoteProps["components"] = {};

async function PostsPage(props: PostsProps): Promise<React.JSX.Element> {
    try {
        const slug = (await props.params).slug;
        // const { default: Post } = await import(`@/contents/${slug.join("/")}.mdx`);
        // const Post = await import(`@/contents/${slug.join("/")}.mdx`);
        // console.log("Post: ", Post);
        const filepath = path.join(process.cwd(), `src/contents/${slug.join("/")}.mdx`);
        if (!fs.existsSync(filepath)) {
            notFound();
        }
        const fileContent = fs.readFileSync(filepath, "utf-8");
        /*
        category: Notes
title: Next.js 中的 robots 和 sitemap 使用指南
description: 本文將介紹如何在 Next.js 中使用 robots.txt 和 sitemap.xml，幫助新手設置網站的搜索引擎爬蟲規則和網站地圖。
coverImage: /assets/blog/notes/2025/02/nextjs-robots.png
date: 2025-02-22
        */
        const { frontmatter } = await compileMDX<{
            category: string;
            title: string;
            description: string;
            image: string;
            date: string;
            tags: any;
        }>({
            source: fileContent,
            options: { parseFrontmatter: true },
        });
        console.log("frontmatter: ", frontmatter);
        return (
            <DefaultTemplate>
                <div className="mx-auto max-w-6xl">
                    <MDXRemote
                        source={fileContent}
                        components={{
                            ...components,
                            pre: (props) => (
                                <div className="relative">
                                    <CodeBlockCopyButton textToCopy={props.rawcontent} />
                                    <pre className="overflow-auto rounded-md bg-gray-100 p-4 dark:bg-gray-800">
                                        {props.children}
                                    </pre>
                                </div>
                            ),
                        }}
                        options={{
                            parseFrontmatter: true,
                            mdxOptions: {
                                remarkPlugins: [remarkGfm],
                                rehypePlugins: [
                                    [
                                        rehypePrettyCode,
                                        {
                                            theme: {
                                                light: themeLight,
                                                dark: themeDark,
                                            },
                                            getHighlighter: createHighlighter,
                                            transformers: [
                                                {
                                                    pre(node) {
                                                        node.properties.rawcontent = this.source;
                                                    },
                                                },
                                            ],
                                        } as Options,
                                    ],
                                ],
                            },
                        }}
                    />
                </div>
            </DefaultTemplate>
        );
    } catch {
        notFound();
    }
}

export default PostsPage;
