import { Fragment } from "react";
// components
import BlogPage from "@/components/pages/BlogPage";

export const dynamic = "force-static";

async function Blog(): Promise<React.JSX.Element> {
    return (
        <Fragment>
            <BlogPage />
        </Fragment>
    );
}

export default Blog;
