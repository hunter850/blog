import { notFound } from "next/navigation";
import NarrowContentTemplate from "@/components/templates/NarrowContentTemplate";
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
import type { Options } from "rehype-pretty-code";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";

export interface PostsPageProps {
    slugs?: string[];
}

const components: MDXRemoteProps["components"] = {};

async function PostsPage(props: PostsPageProps): Promise<React.JSX.Element> {
    try {
        if (props?.slugs === undefined) {
            notFound();
        }
        const filepath = path.join(process.cwd(), `src/contents/${props.slugs.join("/")}.mdx`);
        if (!fs.existsSync(filepath)) {
            notFound();
        }
        const fileContent = fs.readFileSync(filepath, "utf-8");
        // const { frontmatter } = await compileMDX<{
        //     category: string;
        //     title: string;
        //     description: string;
        //     image: string;
        //     date: string;
        //     tags: any;
        // }>({
        //     source: fileContent,
        //     options: { parseFrontmatter: true },
        // });
        // console.log("frontmatter: ", frontmatter);
        return (
            <NarrowContentTemplate>
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
            </NarrowContentTemplate>
        );
    } catch {
        notFound();
    }
}

export default PostsPage;
