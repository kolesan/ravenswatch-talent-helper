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
        
        const subdir = filePath.replace(`${baseDir}/`,"").split("/")[0];

        if (!subdir) {
            throw new Error(`
                Problem with sub directory name, can not optimize image: ${filePath}
            `);
        }

        const oldDir = `${baseDir}/${subdir}`;
        const newDir = `${newBaseDir}/${subdir}`;
        const newFilePath = filePath
            .replace(oldDir, newDir)
            .replace(/\..+$/, ".webp");
        
        mkdirSync(newDir, { recursive: true });

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
