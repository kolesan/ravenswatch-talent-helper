import { mkdirSync } from "node:fs";
import sharp from "sharp";

import { listDirFilesSyncRecursive } from "./utils/listDirFilesSyncRecursive";

// optimize hero portraits
const baseDir = "public\\icons\\talents\\new";
const newBaseDir = `${baseDir}\\optimized`

mkdirSync(newBaseDir, { recursive: true });

const files = listDirFilesSyncRecursive(baseDir);

files.forEach(file => {
    console.log(`Optimizing hero portrait icon from '${file}'`);

    const heroName = file.replace(`${baseDir}\\`,"").split("\\")[0];
    const newDir = `${newBaseDir}\\${heroName}`;

    mkdirSync(newDir, { recursive: true });

    console.log({newDir, file});

    const sharpFile = sharp(file);

    sharpFile.webp()
        .toFile(outputFilePath(file, heroName, newDir))
        .then(info => console.log("Success", { w: info.width, h: info.height }))
        .catch((err) => console.log("Error:", file, err));
});

function outputFilePath(filePath: string, heroName:string, newDir: string) {
    const baseHeroDir = `${baseDir}\\${heroName}`;
    return filePath
        .replace(baseHeroDir, newDir)
        .replace(".png", ".webp");
}
