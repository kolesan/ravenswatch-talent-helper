import sharp from "sharp";

import { listDirFilesSyncRecursive } from "../utils/listDirFilesSyncRecursive";

const baseTalentIconsDir = "public\\icons\\talents";

const files = listDirFilesSyncRecursive(baseTalentIconsDir);

Promise.all(files.map(async file => {
    if (file.includes("empty_corner")) {
        return;
    }

    const base = sharp(file)
    
    const { width, height } = await base.metadata();

    return { width, height };
})).then(res => {
    const nonEmpty = res.filter(it => it !== undefined);
    const uniqueW = [...new Set(nonEmpty.map(it => it.width))];
    const uniqueH = [...new Set(nonEmpty.map(it => it.height))];

    const uniquesWithCounts = nonEmpty.reduce((acc, it) => {
        if (acc.uniqueW[it.width]) {
            acc.uniqueW[it.width]++;
        } else {
            acc.uniqueW[it.width] = 1;
        }
        if (acc.uniqueH[it.height]) {
            acc.uniqueH[it.height]++;
        } else {
            acc.uniqueH[it.height] = 1;
        }
        return acc;
    }, { uniqueW: {}, uniqueH: {} } as any);

    console.log({ uniqueW, uniqueH });
    console.log(uniquesWithCounts);
    console.log(100/96, 135/130, 159/154, 316/304);
})
