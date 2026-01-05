import sharp from "sharp";

import { listDirFilesSyncRecursive } from "../utils/listDirFilesSyncRecursive";

const baseItemScreenshotsDir = "src\\data\\screenshots\\items";

const files = listDirFilesSyncRecursive(baseItemScreenshotsDir);

files.forEach(async file => {
    if (file.includes("empty_corner")) {
        return;
    }

    console.log(`Extracting item icon from '${file}'`);

    const base = sharp(file);

    const rotatedAndExtracted = await base
        .rotate(47)
        .extract({
            top: 1380,
            left: 979,
            width: 143,
            height: 142,
        })
        .toBuffer();

    const rotatedBackAndCleaned = await sharp(rotatedAndExtracted)
        .rotate(-47, { background: "#161716" })
        .composite([{
            input: {
                create: {
                    width: 4,
                    height: 201,
                    channels: 4,
                    background: "#161716",
                }
            },
            left: 0,
            top: 0
        }, {
            input: {
                create: {
                    width: 201,
                    height: 26,
                    channels: 4,
                    background: "#161716",
                }
            },
            left: 0,
            top: 201 - 26,
        }])
        .toBuffer();
    
    const trimmed = sharp(rotatedBackAndCleaned)
        .trim();

    trimmed
        .webp({
            lossless: true,
            quality: 100,
        })
        .toFile(outputFilePath(file))
        .then(() => console.log("Success"))
        .catch((err) => console.log("Error:", file, err));
})

function outputFilePath(filePath: string) {
    return filePath
        .replace(baseItemScreenshotsDir, "public\\icons\\items")
        .replace(".png", ".webp");
}
