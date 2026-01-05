import { snowQueenOrder } from "../extractTalents/utils/applyIngameOrder/consts/snowQueenOrder";
import { listDirFilesSyncRecursive } from "../parseTalentScreenshots/utils/listDirFilesSyncRecursive";

const snowQueenScreenshots = listDirFilesSyncRecursive(
    "src\\data\\screenshots\\talents\\snowQueen"
);

console.log(snowQueenScreenshots);
console.log(snowQueenOrder);
