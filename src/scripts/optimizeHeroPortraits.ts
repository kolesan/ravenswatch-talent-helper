import sharp from "sharp";

import { listDirFilesSyncRecursive } from "./utils/listDirFilesSyncRecursive";
import { mkdirSync } from "node:fs";

// optimize hero portraits
const baseDir = "public\\icons\\heroes";
const newDir = `${baseDir}\\optimized`

mkdirSync(newDir, { recursive: true });

const files = listDirFilesSyncRecursive(baseDir);

files.forEach(file => {
    console.log(`Optimizing hero portrait icon from '${file}'`);

    const sharpFile = sharp(file);

    sharpFile.webp()
        .toFile(outputFilePath(file))
        .then(info => console.log("Success", { w: info.width, h: info.height }))
        .catch((err) => console.log("Error:", file, err));
});

function outputFilePath(filePath: string) {
    return filePath
        .replace(baseDir, newDir)
        .replace(".png", ".webp");
}
