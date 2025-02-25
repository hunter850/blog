import * as fs from "fs";
import * as path from "path";

function listMdxFilePaths(dirPath: string, basePath: string = ""): string[] {
    let result: string[] = [];
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const fullPath = path.join(dirPath, file);
        const relativePath = path.join(basePath, file);

        if (fs.statSync(fullPath).isDirectory()) {
            // 如果是資料夾，遞迴進入
            result = result.concat(listMdxFilePaths(fullPath, relativePath));
        } else if (file.endsWith(".mdx")) {
            // 如果是 .mdx 檔案，加入結果
            result.push(relativePath);
        }
    });

    return result;
}

export default listMdxFilePaths;
