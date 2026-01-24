import sharp from "sharp";

import { listDirFilesSyncRecursive } from "../utils/listDirFilesSyncRecursive";

const baseTalentsDir = "public\\icons\\talents\\new";
const merlinTalentsDir = `${baseTalentsDir}\\merlin`;
const frameFile = `${baseTalentsDir}\\talent_frame_common.png`

const resizePercentage = 0.6;
const extendPercentage = 0.25;

const files = listDirFilesSyncRecursive(merlinTalentsDir);

// files.filter(it => it.includes("wild_magic")).forEach(file => {
files.forEach(async file => {
    const composited = sharp(file)
        .resize({
            fit: "contain",
            width: Math.round(256*resizePercentage),
            height: Math.round(256*resizePercentage),
        })
        .extend({
            background: "transparent",
            top: Math.round(256*extendPercentage),
            bottom: Math.round(256*extendPercentage),
            left: Math.round(256*extendPercentage),
            right: Math.round(256*extendPercentage),
        })
        .composite([{
            input: frameFile,
        }]);

    const compositedBuffer = await composited.toBuffer();

    sharp(compositedBuffer)
        .resize({
            fit: "contain",
            width: 256,
            height: 256,
        })
        .webp({
            lossless: true,
            quality: 100,
        })
        .toFile(outputFilePath(file))
        .then(info => console.log("Success", { w: info.width, h: info.height }))
        .catch((err) => console.log("Error:", file, err));
})

function outputFilePath(filePath: string) {
    return filePath
        .replace(merlinTalentsDir, "public\\icons\\talents\\new\\merlinWiki")
        .replace(".png", ".webp");
}
