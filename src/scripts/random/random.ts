import { renameSync } from "fs";

import { snowQueenOrder } from "../extractTalents/utils/applyIngameOrder/consts/snowQueenOrder";
import { listDirFilesSyncRecursive } from "../parseTalentScreenshots/utils/listDirFilesSyncRecursive";

const snowQueenScreenshots = listDirFilesSyncRecursive("src\\data\\screenshots\\snowQueen");

console.log(snowQueenScreenshots);
console.log(snowQueenOrder);

// snowQueenScreenshots.forEach((screenshot, i) => {
//     renameSync(
//         screenshot, 
//         screenshot.replace(/snowQueen\\.+\.png/, `snowQueen\\${snowQueenOrder[i]}.png`)
//     )
// });
