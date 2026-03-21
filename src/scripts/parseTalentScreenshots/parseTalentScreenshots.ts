import sharp from "sharp";

import { listDirFilesSyncRecursive } from "../utils/listDirFilesSyncRecursive";

// Screenshots were Deprecated (and moved to image_archive) in favor of images 
// downloaded from original buildmaker site. 
// Leaving this script and path here just in case might find
// it useful later e.g. for examples of working with images
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
