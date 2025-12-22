import { renameSync } from "fs";

import { heroes } from "../../data/heroes";
import { listDirFilesSyncRecursive } from "../parseTalentScreenshots/utils/listDirFilesSyncRecursive";

const hero = heroes.all.aladdin;

const heroCode = hero.code;
const importName = `${heroCode}Order`;

const screenshots = listDirFilesSyncRecursive(`src\\data\\screenshots\\${heroCode}`);

const manualOrderOverride = [
    "sand_vortex",
    
    "dream_scimitars",
    "enchanted_jinn",
    "master_thief",

    "wondrous_wishes",
    "dream_stride",
    "infinite_wishes",
    "quick_ride",
];

const rgxp = new RegExp(`${heroCode}\\\\.+\.png`);
console.log(rgxp);
console.log(screenshots[0].replace(rgxp, `${heroCode}\\${manualOrderOverride[0]}.png`));

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
