import type { MDXComponents } from "mdx/types";
import "./app/globals.css";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h2: ({ children }) => <h2 className="bg-red-500 text-2xl font-bold">{children}</h2>,

        ...components,
    };
}
