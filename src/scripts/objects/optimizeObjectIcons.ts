import { mkdirSync } from "node:fs";
import sharp from "sharp";

import { listDirFilesSyncRecursive } from "../utils/listDirFilesSyncRecursive";

import { baseObjectIconsNewDir } from "./consts";

const baseDir = baseObjectIconsNewDir;
const optimizedBaseDir = `${baseDir}/optimized`;

mkdirSync(optimizedBaseDir, { recursive: true });

const files = listDirFilesSyncRecursive(baseDir);

files.forEach(file => {
    console.log(`Optimizing object icon from '${file}'`);

    const objectType = file.replace(`${baseDir}/`,"").split("/")[0];

    if (!objectType) {
        throw new Error("Problem with object type, can not optimize object icons: " + file);
    }

    const newDir = `${optimizedBaseDir}/${objectType}`;

    mkdirSync(newDir, { recursive: true });

    console.log({ newDir, file });

    const sharpFile = sharp(file);

    sharpFile.webp()
        .toFile(outputFilePath(file, objectType, newDir))
        .then(info => console.log("Success", { w: info.width, h: info.height }))
        .catch((err) => console.log("Error:", file, err));
});

function outputFilePath(filePath: string, objectType:string, newDir: string) {
    const baseObjectDir = `${baseDir}/${objectType}`;
    return filePath
        .replace(baseObjectDir, newDir)
        .replace(".png", ".webp");
}
