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
    
    const trimmedBuffer = await sharp(rotatedBackAndCleaned)
        .trim()
        .toBuffer();

    const afterTrim = sharp(trimmedBuffer);
    
    const { width, height } = await afterTrim.metadata();

    const topExtendMap: Record<number, number> = { 152: 1, 153: 1 };
    const bottomExtendMap: Record<number, number> = { 152: 2, 153: 1, 154: 1 };
    const leftExtendMap: Record<number, number> = { 157: 1 };
    const rightExtendMap: Record<number, number> = { 157: 1, 158: 1 };

    const normalized = afterTrim.extend({
        top: topExtendMap[height] || 0,
        bottom: bottomExtendMap[height] || 0,
        left: leftExtendMap[width] || 0,
        right: rightExtendMap[width] || 0,
        background: "#161716",
    });

    normalized
        .webp({
            lossless: true,
            quality: 100,
        })
        .toFile(outputFilePath(file))
        .then(info => console.log(
            "Success", 
            { pw: info.width, ph: info.height }, 
            info.width !== 159 ? "W_ERR" : "", 
            info.height !== 155 ? "H_ERR" : ""
        ))
        .catch((err) => console.log("Error:", file, err));
})

function outputFilePath(filePath: string) {
    return filePath
        .replace(baseItemScreenshotsDir, "public\\icons\\items")
        .replace(".png", ".webp");
}
