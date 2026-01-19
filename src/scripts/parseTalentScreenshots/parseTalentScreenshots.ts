import sharp from "sharp";

import { listDirFilesSyncRecursive } from "../utils/listDirFilesSyncRecursive";

const baseTalentScreenshotsDir = "src\\data\\screenshots\\talents";

const files = listDirFilesSyncRecursive(baseTalentScreenshotsDir);

files.forEach(file => {
    const isMerlin = file.includes("merlin");

    if (
        file.includes("empty_corner") ||
        file.includes("locked_talent") ||
        !isMerlin
    ) {
        return;
    }

    console.log(`Extracting talent icon from '${file}'`);
    const sharpFile = sharp(file);

    const extracted = sharpFile
        .extract({
            top: isMerlin ? 857 : 843,
            left: 1108,
            width: 159,
            height: 154,
        });

    const composited = extracted
        .clone()
        .composite([{
            input: `${baseTalentScreenshotsDir}\\empty_corner.webp`,
            top: 8,
            left: 1,
        }]);

    composited.webp({
            lossless: true,
            quality: 100,
        })
        .toFile(outputFilePath(file))
        .then(info => console.log("Success", { w: info.width, h: info.height }))
        .catch((err) => console.log("Error:", file, err));
})

function outputFilePath(filePath: string) {
    return filePath
        .replace(baseTalentScreenshotsDir, "public\\icons\\talents")
        .replace(".png", ".webp");
}
