import Image from "next/image";
import { CheckSquare, Square } from "lucide-react";
import CodeBlockCopyButton from "@/components/atoms/CodeBlockCopyButton/CodeBlockCopyButton";
import { cn } from "@/lib/utils";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";

export const MDXComponents: MDXRemoteProps["components"] = {
    h1: (props) => (
        <h1 {...props} className="mb-4 mt-8 text-3xl font-bold text-slate-800 dark:text-slate-100 md:text-4xl" />
    ),
    h2: (props) => (
        <h2 {...props} className="mb-4 mt-6 text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl" />
    ),
    h3: (props) => (
        <h3 {...props} className="mb-3 mt-5 text-xl font-bold text-slate-800 dark:text-slate-100 md:text-2xl" />
    ),
    h4: (props) => (
        <h4 {...props} className="mb-2 mt-4 text-lg font-bold text-slate-800 dark:text-slate-100 md:text-xl" />
    ),
    h5: (props) => (
        <h5 {...props} className="mb-2 mt-3 text-base font-bold text-slate-800 dark:text-slate-100 md:text-lg" />
    ),
    h6: (props) => (
        <h6 {...props} className="mb-2 mt-3 text-base font-bold text-slate-800 dark:text-slate-100 md:text-lg" />
    ),
    p: (props) => (
        <p {...props} className="my-4 text-justify text-base text-slate-700 dark:text-slate-300 md:text-lg" />
    ),
    strong: (props) => <strong {...props} className="font-bold" />,
    em: (props) => <em {...props} className="italic" />,
    del: (props) => <del {...props} className="text-slate-500 line-through dark:text-slate-400" />,
    a: (props) => (
        <a
            {...props}
            className="text-blue-600 underline underline-offset-2 hover:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-300"
            target={props.href?.startsWith("http") ? "_blank" : undefined}
            rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        />
    ),
    img: (props) => (
        <Image
            src={props.src || ""}
            alt={props.alt || ""}
            width={0}
            height={0}
            sizes="100vw"
            className="my-4 h-auto w-full max-w-full rounded-lg"
            style={{ width: "100%", height: "auto" }}
            loading="lazy"
            quality={80}
        />
    ),
    blockquote: (props) => (
        <blockquote
            {...props}
            className="relative my-4 pl-6 italic text-slate-600 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-2 before:bg-slate-300 dark:text-slate-400 dark:before:bg-slate-600"
        />
    ),
    ul: (props) => (
        <ul
            {...props}
            className="ul group my-4 list-disc pl-6 text-slate-700 marker:text-slate-300 dark:text-slate-300 dark:marker:text-slate-600"
        />
    ),
    ol: (props) => <ol {...props} className="ol group my-4 list-decimal pl-6 text-slate-700 dark:text-slate-300" />,
    li: (props) => {
        const isInline = typeof props.children === "string" || typeof props?.children?.[0] === "string";
        return (
            <li
                {...props}
                className={cn(`my-1 list-outside text-lg`, [
                    isInline ? "group-[.ol]:list-decimal group-[.ul]:list-disc" : "",
                ])}
            />
        );
    },
    input: (props) => {
        if (props.type === "checkbox") {
            return props.checked ? (
                <span className="inline-flex items-center align-middle">
                    <CheckSquare className="mb-1 mr-1 inline-block h-4 w-4 text-blue-500 dark:text-blue-400" />
                </span>
            ) : (
                <span className="inline-flex items-center align-middle">
                    <Square className="mb-1 mr-1 inline-block h-4 w-4 text-slate-500 dark:text-slate-400" />
                </span>
            );
        }
        return <input {...props} />;
    },
    table: (props) => (
        <div className="my-6 overflow-hidden overflow-x-auto rounded-lg !border !border-solid !border-slate-300 dark:!border-slate-600">
            <table
                {...props}
                className="min-w-full border-collapse overflow-hidden rounded-lg !border !border-solid !border-slate-300 dark:!border-slate-600"
            />
        </div>
    ),
    thead: (props) => <thead {...props} className="thead group rounded-t-lg bg-slate-100 dark:bg-slate-800" />,
    tbody: (props) => <tbody {...props} className="bg-white dark:bg-transparent" />,
    tr: (props) => (
        <tr
            {...props}
            className="hover:bg-slate-50 group-[.thead]:hover:bg-slate-200 dark:hover:bg-slate-700/50 dark:group-[.thead]:hover:!bg-slate-700"
        />
    ),
    th: (props) => (
        <th
            {...props}
            className="!border !border-solid !border-slate-300 px-4 py-3 text-left font-bold text-slate-700 dark:!border-slate-600 dark:text-slate-200"
        />
    ),
    td: (props) => (
        <td
            {...props}
            className="!border !border-solid !border-slate-300 px-4 py-3 text-sm text-slate-600 dark:!border-slate-600 dark:text-slate-300"
        />
    ),
    hr: () => <hr className="my-8 h-[2px] bg-slate-200 dark:bg-slate-700" />,
    pre: (props) => (
        <div className="relative">
            <CodeBlockCopyButton textToCopy={props.rawcontent} />
            <pre className="overflow-auto rounded-b-md rounded-t-md bg-gray-100 group-[.has-title]:rounded-t-none dark:bg-gray-800">
                <div className="w-fit p-4">{props.children}</div>
            </pre>
        </div>
    ),
    code: (props) => {
        const isInline = typeof props.children === "string";
        if (isInline) {
            return (
                <code
                    {...props}
                    className="mx-1 whitespace-nowrap rounded bg-gray-100 px-1.5 py-0.5 font-mono text-slate-800 dark:bg-slate-700 dark:text-slate-100"
                />
            );
        }
        return <code {...props} />;
    },
    figure: (props) => {
        const hasTitle = Array.isArray(props.children);
        return (
            <figure {...props} className={cn("my-4", [hasTitle ? "has-title group" : ""])}>
                {props.children}
            </figure>
        );
    },
    figcaption: (props) => (
        <figcaption
            {...props}
            className="truncate rounded-t-md bg-slate-200 px-4 py-1 text-sm text-slate-500 dark:bg-slate-700 dark:text-slate-400"
        />
    ),
};

export default MDXComponents;
