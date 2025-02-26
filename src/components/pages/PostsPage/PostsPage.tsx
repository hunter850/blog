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
import { CalendarIcon, TagIcon, CheckSquare, Square } from "lucide-react";
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

const components: MDXRemoteProps["components"] = {
    // 标题组件
    h1: (props) => <h1 {...props} className="mb-4 mt-8 text-3xl font-bold text-slate-800 dark:text-slate-100" />,
    h2: (props) => <h2 {...props} className="mb-4 mt-6 text-2xl font-bold text-slate-800 dark:text-slate-100" />,
    h3: (props) => <h3 {...props} className="mb-3 mt-5 text-xl font-bold text-slate-800 dark:text-slate-100" />,
    h4: (props) => <h4 {...props} className="mb-2 mt-4 text-lg font-bold text-slate-800 dark:text-slate-100" />,
    h5: (props) => <h5 {...props} className="mb-2 mt-3 text-base font-bold text-slate-800 dark:text-slate-100" />,
    h6: (props) => <h6 {...props} className="mb-2 mt-3 text-sm font-bold text-slate-800 dark:text-slate-100" />,

    // 段落和文本样式
    p: (props) => <p {...props} className="my-4 text-slate-700 dark:text-slate-300" />,
    strong: (props) => <strong {...props} className="font-bold" />,
    em: (props) => <em {...props} className="italic" />,
    del: (props) => <del {...props} className="text-slate-500 line-through dark:text-slate-400" />,

    // 链接和图片
    a: (props) => (
        <a
            {...props}
            className="text-blue-600 underline underline-offset-2 hover:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-300"
            target={props.href?.startsWith("http") ? "_blank" : undefined}
            rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        />
    ),
    img: (props) => (
        <img {...props} className="my-4 h-auto max-w-full rounded-lg" alt={props.alt || ""} loading="lazy" />
    ),

    // 引用块
    blockquote: (props) => (
        <blockquote
            {...props}
            className="my-4 border-l-4 border-slate-300 pl-4 italic text-slate-600 dark:border-slate-600 dark:text-slate-400"
        />
    ),

    // 列表
    ul: (props) => <ul {...props} className="my-4 list-disc pl-6 text-slate-700 dark:text-slate-300" />,
    ol: (props) => <ol {...props} className="my-4 list-decimal pl-6 text-slate-700 dark:text-slate-300" />,
    li: (props) => <li {...props} className="my-1" />,

    // 任务列表
    input: (props) => {
        if (props.type === "checkbox") {
            return props.checked ? (
                <span className="inline-flex items-center">
                    <CheckSquare className="mr-1 inline-block h-4 w-4 text-green-500 dark:text-green-400" />
                </span>
            ) : (
                <span className="inline-flex items-center">
                    <Square className="mr-1 inline-block h-4 w-4 text-slate-500 dark:text-slate-400" />
                </span>
            );
        }
        return <input {...props} />;
    },

    // 表格
    table: (props) => (
        <div className="my-6 overflow-x-auto">
            <table
                {...props}
                className="min-w-full divide-y divide-slate-200 rounded-lg border border-slate-200 dark:divide-slate-700 dark:border-slate-700"
            />
        </div>
    ),
    thead: (props) => <thead {...props} className="bg-slate-100 dark:bg-slate-800" />,
    tbody: (props) => <tbody {...props} className="divide-y divide-slate-200 dark:divide-slate-700" />,
    tr: (props) => <tr {...props} className="hover:bg-slate-50 dark:hover:bg-slate-700/50" />,
    th: (props) => (
        <th {...props} className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200" />
    ),
    td: (props) => <td {...props} className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300" />,

    // 水平线
    hr: () => <hr className="my-8 border-t border-slate-200 dark:border-slate-700" />,

    // 代码
    code: (props) => {
        // 检查是否为行内代码
        const isInline = typeof props.children === "string";
        if (isInline) {
            return (
                <code
                    {...props}
                    className="mx-0.5 rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-pink-500 dark:bg-slate-800 dark:text-pink-400"
                />
            );
        }
        return <code {...props} />;
    },
};

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
