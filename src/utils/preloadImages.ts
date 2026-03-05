import { heroes } from "../finalData/finalData";
import { cursed } from "../scrapedData/mergedItems/cursed";
import { legendary } from "../scrapedData/mergedItems/legendary";
import { imagePathUtils } from "./imagePathUtils";

const talents = heroes.asArray
    .flatMap(hero => hero.talents.map(talent => ({
        heroCode: hero.code,
        talentCode: talent.code,
    })))
    .map(it => imagePathUtils.talents.byCode(it.heroCode, it.talentCode));
const legendaryObjects = legendary
    .map(it => imagePathUtils.objects.byCode("legendary", it.code));
const cursedObjects = cursed
    .map(it => imagePathUtils.objects.byCode("cursed", it.code));

const images = [
    imagePathUtils.talents.frames.ultimate,
    imagePathUtils.talents.frames.common,
    imagePathUtils.talents.locked,
    ...talents,
    ...legendaryObjects,
    ...cursedObjects,
];

export async function preloadImages() {
    console.log("Preloading: ", images.length, " images");
    images.forEach(async src => {
        // console.log("Preloading: ", src);
        // const img = new Image();
        // img.src = src;
    });
}
