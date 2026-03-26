import sharp from "sharp";

import { listDirFilesSyncRecursive } from "./utils/listDirFilesSyncRecursive";

const baseDir = "public\\art\\new";

const files = listDirFilesSyncRecursive(baseDir);

files.forEach(file => {
    sharp(file)
        .webp({
            quality: 80,
        })
        .toFile(outputFilePath(file))
        .then(info => console.log("Success", { w: info.width, h: info.height }))
        .catch((err) => console.log("Error:", file, err));
})

function outputFilePath(filePath: string) {
    return filePath
        .replace(baseDir, "public\\art\\newResampled\\")
        .replace(".jpg", ".webp");
}
