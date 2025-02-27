import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import themeLight from "shiki/dist/themes/one-light.mjs";
import themeDark from "shiki/dist/themes/one-dark-pro.mjs";
import { createHighlighter } from "shiki/bundle/web";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeMathjax from "rehype-mathjax";
import MDXComponents from "@/components/atoms/MDXComponents/MDXComponents";
import type { Options } from "rehype-pretty-code";

export interface PostContentProps {
    content: string;
}

function PostContent({ content }: PostContentProps): React.JSX.Element {
    return (
        <div className="max-w-none">
            <MDXRemote
                source={content}
                components={{
                    ...MDXComponents,
                }}
                options={{
                    parseFrontmatter: true,
                    mdxOptions: {
                        remarkPlugins: [remarkGfm, remarkMath],
                        rehypePlugins: [
                            [rehypeMathjax, {}],
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
    );
}

export default PostContent;
