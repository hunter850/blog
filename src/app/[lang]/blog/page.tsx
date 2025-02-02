import { Fragment } from "react";
// components
import BlogPage from "@/components/pages/BlogPage";

export interface BlogProps {
    params: { lang: string };
}

async function Blog(props: BlogProps): Promise<React.JSX.Element> {
    return (
        <Fragment>
            <BlogPage {...props} />
        </Fragment>
    );
}

export default Blog;
