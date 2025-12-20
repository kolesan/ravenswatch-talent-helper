import sharp from "sharp";

import { listDirFilesSyncRecursive } from "./utils/listDirFilesSyncRecursive";

const baseScreenshotsDir = "src\\data\\screenshots";

const files = listDirFilesSyncRecursive(baseScreenshotsDir);

files.forEach(file => {
    console.log(`Extracting talent icon from '${file}'`);
    sharp(file)
        .extract({
            top: 843,
            left: 1108,
            width: 159,
            height: 154,
        })
        .toFile(outputFilePath(file))
        .then(() => console.log("Success"))
        .catch((err) => console.log("Error:", err));
})

function outputFilePath(filePath: string) {
    return filePath.replace(baseScreenshotsDir, "src\\scrapedData\\icons\\talents");
}
