function mdxFilepathsToUrlpaths(mdxFilepaths: string[]): string[] {
    return mdxFilepaths.map((mdxFilepath) => mdxFilepath.replace(/.mdx$/, "").split("\\").join("/"));
}

export default mdxFilepathsToUrlpaths;
