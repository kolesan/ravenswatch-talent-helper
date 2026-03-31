import { mkdirSync } from "fs";
import sharp from "sharp";

type Params = {
    baseDir: string;
    newBaseDir: string;
}

export function optimizeImage({
    baseDir,
    newBaseDir,
}: Params) {
    return function(filePath: string) {
        console.log(`Optimizing image: '${filePath}'`);
        
        const subdir = filePath
            .replace(baseDir,"")
            .replace(/\/.[^/]+$/, "")
            .substring(1);

        const oldDir = subdir ? `${baseDir}/${subdir}` : baseDir;
        const newDir = subdir ? `${newBaseDir}/${subdir}` : newBaseDir;
        const newFilePath = filePath
            .replace(oldDir, newDir)
            .replace(/\..+$/, ".webp");
        
        mkdirSync(newDir, { recursive: true });

        // console.log({
        //     subdir_____: subdir,
        //     baseDir____: baseDir,
        //     oldDir_____: oldDir,
        //     filePath___: filePath,
        //     newBaseDir_: newBaseDir,
        //     newDir_____: newDir,
        //     newFilePath,
        // });

        sharp(filePath)
            .webp()
            .toFile(newFilePath)
            .then(info => {
                console.log("Success", { w: info.width, h: info.height });
                console.log(`New optimized image: '${newFilePath}'`);
            })
            .catch((err) => console.log("Error:", filePath, err));
    }
}
