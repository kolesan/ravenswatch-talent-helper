import { mkdirSync } from "fs";

import { listDirFilesSyncRecursive } from "./listDirFilesSyncRecursive";

import { optimizeImage } from "./optimizeImage";

type Params = {
    baseDir: string;
    newBaseDir: string;
}

export function optimizeImages({
    baseDir,
    newBaseDir,
}: Params) {
    mkdirSync(newBaseDir, { recursive: true });

    const doOptimize = optimizeImage({
        baseDir,
        newBaseDir
    });

    listDirFilesSyncRecursive(baseDir)
        .forEach(doOptimize);
}
