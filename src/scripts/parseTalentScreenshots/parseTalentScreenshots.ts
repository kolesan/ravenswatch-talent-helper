import sharp from "sharp";

import { listDirFilesSyncRecursive } from "./utils/listDirFilesSyncRecursive";

const baseScreenshotsDir = "src\\data\\screenshots";

const files = listDirFilesSyncRecursive(baseScreenshotsDir);

files.forEach(file => {
    console.log(`Extracting talent icon from '${file}'`);
    const sharpFile = sharp(file);

    const extracted = sharpFile
        .extract({
            top: 843,
            left: 1108,
            width: 159,
            height: 154,
        });

    const composited = extracted
        .clone()
        .composite([{
            input: `${baseScreenshotsDir}\\empty_corner.webp`,
            top: 8,
            left: 1,
        }]);
    
    const final = file.includes("locked_talent") || file.includes("empty_corner")
        ? extracted
        : composited;

    final.toFile(outputFilePath(file))
        .then(() => console.log("Success"))
        .catch((err) => console.log("Error:", err));
})

function outputFilePath(filePath: string) {
    return filePath.replace(baseScreenshotsDir, "src\\scrapedData\\icons\\talents");
}
