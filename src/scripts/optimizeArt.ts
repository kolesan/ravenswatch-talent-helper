import { mkdirSync } from "fs";
import sharp from "sharp";

import { listDirFilesSyncRecursive } from "./utils/listDirFilesSyncRecursive";

const baseDir = "public/art";
const newDir = `${baseDir}/optimized`

mkdirSync(newDir, { recursive: true });

const files = listDirFilesSyncRecursive(baseDir)
    .filter(it => it.includes("newHero"));

files.forEach(file => {
    console.log(`Optimizing hero art from '${file}'`);

    const sharpFile = sharp(file);

    sharpFile
        .webp()
        .toFile(outputFilePath(file))
        .then(info => console.log("Success", { w: info.width, h: info.height }))
        .catch((err) => console.log("Error:", file, err));
})

function outputFilePath(filePath: string) {
    return filePath
        .replace(baseDir, newDir)
        .replace(".jpg", ".webp");
}
