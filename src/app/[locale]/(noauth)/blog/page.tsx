import { Fragment } from "react";
// components
import BlogPage from "@/components/pages/BlogPage";

async function Blog(): Promise<React.JSX.Element> {
    return (
        <Fragment>
            <BlogPage />
        </Fragment>
    );
}

export default Blog;
