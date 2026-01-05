import sharp from "sharp";

import { listDirFilesSyncRecursive } from "../utils/listDirFilesSyncRecursive";

const baseTalentScreenshotsDir = "src\\data\\screenshots\\talents";

const files = listDirFilesSyncRecursive(baseTalentScreenshotsDir);

files.forEach(file => {
    if (file.includes("empty_corner")) {
        return;
    }

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
            input: `${baseTalentScreenshotsDir}\\empty_corner.webp`,
            top: 8,
            left: 1,
        }]);
    
    const final = file.includes("locked_talent")
        ? extracted
        : composited;

    final.toFile(outputFilePath(file))
        .then(() => console.log("Success"))
        .catch((err) => console.log("Error:", file, err));
})

function outputFilePath(filePath: string) {
    return filePath
        .replace(baseTalentScreenshotsDir, "public\\icons\\talents")
        .replace(".png", ".webp");
}
