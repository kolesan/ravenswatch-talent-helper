import { heroesBase } from "../../../../data/heroes/heroesBase";
import { aladdin } from "../../../../scrapedData/mergedTalents/aladdin";
import { beowulf } from "../../../../scrapedData/mergedTalents/beowulf";
import { carmilla } from "../../../../scrapedData/mergedTalents/carmilla";
import { geppetto } from "../../../../scrapedData/mergedTalents/geppetto";
import { juliet } from "../../../../scrapedData/mergedTalents/juliet";
import { melusine } from "../../../../scrapedData/mergedTalents/melusine";
import { merlin } from "../../../../scrapedData/mergedTalents/merlin";
import { piper } from "../../../../scrapedData/mergedTalents/piper";
import { romeo } from "../../../../scrapedData/mergedTalents/romeo";
import { scarlet } from "../../../../scrapedData/mergedTalents/scarlet";
import { snowqueen } from "../../../../scrapedData/mergedTalents/snowqueen";
import { wukong } from "../../../../scrapedData/mergedTalents/wukong";
import { Talent } from "../../../../scripts/extractTalents/types";
import { Hero, HeroCode, HeroRecord } from "../types";
    
const talentsByHero: Record<HeroCode, Talent[]> = {
    scarlet,
    piper,
    beowulf,
    snowqueen,
    aladdin,
    melusine,
    geppetto,
    wukong,
    carmilla,
    romeo,
    juliet,
    merlin,
};

export function injectBaseHeroesWithTalents() {
    let heroesObj: Partial<HeroRecord> = {};

    for (let i = 0; i < heroesBase.asArray.length; i++) {
        const heroBase = heroesBase.asArray[i]!;

        const hero: Hero = {
            code: heroBase.code,
            name: heroBase.name,
            talents: talentsByHero[heroBase.code],
        };

        heroesObj[heroBase.code] = hero;
    }

    return {
        asObj: heroesObj as HeroRecord,
        asArray: Object.values(heroesObj),
    }
}
