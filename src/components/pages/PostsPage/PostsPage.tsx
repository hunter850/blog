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
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, TagIcon } from "lucide-react";
// date formatting
import { format, parseISO } from "date-fns";
import { zhTW } from "date-fns/locale";
// types
import type { Options } from "rehype-pretty-code";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { Post, Frontmatter } from "@/types";

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
        const { frontmatter } = await compileMDX<Frontmatter>({
            source: fileContent,
            options: { parseFrontmatter: true },
        });
        // console.log("frontmatter: ", frontmatter);
        return (
            <NarrowContentTemplate>
                <article className="mx-auto">
                    <header className="relative mb-8 bg-white pb-6 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-slate-200 dark:bg-transparent dark:after:bg-slate-700">
                        <h1 className="mb-3 text-3xl font-bold text-slate-800 dark:text-slate-100">
                            {frontmatter.title}
                        </h1>

                        <div className="mb-4 flex items-center text-sm text-slate-500 dark:text-slate-400">
                            <CalendarIcon className="mr-1 h-4 w-4" />
                            <time dateTime={frontmatter.date}>
                                {frontmatter.date && format(parseISO(frontmatter.date), "yyyy-MM-dd", { locale: zhTW })}
                            </time>

                            {frontmatter.category && (
                                <Badge className="ml-4 bg-slate-700 hover:bg-slate-800 dark:bg-cyan-700 dark:hover:bg-cyan-600">
                                    {frontmatter.category}
                                </Badge>
                            )}
                        </div>

                        {frontmatter.tags && frontmatter.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {frontmatter.tags.map((tag: string) => (
                                    <Badge
                                        key={tag}
                                        variant="secondary"
                                        className="bg-blue-50 text-blue-500 dark:bg-cyan-900/30 dark:text-cyan-300"
                                    >
                                        <TagIcon className="mr-1 h-3 w-3" />
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </header>
                    <div className="prose prose-slate dark:prose-invert max-w-none">
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
                </article>
            </NarrowContentTemplate>
        );
    } catch {
        notFound();
    }
}

export default PostsPage;
