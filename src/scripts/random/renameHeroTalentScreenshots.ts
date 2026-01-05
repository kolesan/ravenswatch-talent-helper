import { renameSync } from "fs";

import { heroes } from "../../data/heroes";
import { listDirFilesSyncRecursive } from "../parseTalentScreenshots/utils/listDirFilesSyncRecursive";

const hero = heroes.all.melusine;

const heroCode = hero.code;
const importName = `${heroCode}Order`;

const screenshots = listDirFilesSyncRecursive(
    `src\\data\\screenshots\\talents\\${heroCode}`
);

const manualOrderOverride = [
    "geyser",
    "water_communion",
    "soothing_presence",
    "razor_tail",
    "wisp_surge",
    "final_burst",
    "waterlogging",
    "shimmering_scales",
    "enduring_wisp",
    "vortex_bomb",
    "crescendo",
    "healing_blast",
    "overtone_singing",
];

if (manualOrderOverride.length) {
    screenshots.forEach((screenshot, i) => {
        console.log(screenshot);
        renameSync(
            screenshot, 
            screenshot.replace(new RegExp(`${heroCode}\\\\.+\.png`), `${heroCode}\\${manualOrderOverride[i]}.png`)
        )
    });
} else {
    // below is not tested so dont trust
    import(`../extractTalents/utils/applyIngameOrder/consts/${importName}`)
        .then(module => module[importName])
        .then((order: string[]) => {
            console.log(screenshots);
            console.log(order);

            screenshots.forEach((screenshot, i) => {
                renameSync(
                    screenshot, 
                    screenshot.replace(`${heroCode}/\\.+\.png`, `${heroCode}\\${order[i]}.png`)
                )
            });
        });
}
