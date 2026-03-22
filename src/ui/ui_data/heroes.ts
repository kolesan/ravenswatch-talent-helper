import { HeroBase, heroesBase } from "../../data/heroesBase";
import { aladdin } from "../../scrapedData/mergedTalents/aladdin";
import { beowulf } from "../../scrapedData/mergedTalents/beowulf";
import { carmilla } from "../../scrapedData/mergedTalents/carmilla";
import { geppetto } from "../../scrapedData/mergedTalents/geppetto";
import { juliet } from "../../scrapedData/mergedTalents/juliet";
import { melusine } from "../../scrapedData/mergedTalents/melusine";
import { merlin } from "../../scrapedData/mergedTalents/merlin";
import { piper } from "../../scrapedData/mergedTalents/piper";
import { romeo } from "../../scrapedData/mergedTalents/romeo";
import { scarlet } from "../../scrapedData/mergedTalents/scarlet";
import { snowqueen } from "../../scrapedData/mergedTalents/snowqueen";
import { wukong } from "../../scrapedData/mergedTalents/wukong";
import { Talent } from "../../scripts/extractTalents/types";

export type Hero = Omit<HeroBase, "wikiUrl"> & {
    talents: Talent[];
}
export type HeroCode = Hero["code"];

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

let heroesArray: Hero[] = [];
let heroesAll: Partial<Record<HeroCode, Hero>> = {};
for (let i = 0; i < heroesBase.asArray.length; i++) {
    const heroBase = heroesBase.asArray[i]!;

    const hero: Hero = {
        code: heroBase.code,
        name: heroBase.name,
        talents: talentsByHero[heroBase.code],
    };

    heroesArray.push(hero);
    heroesAll[heroBase.code] = hero;
}

export const heroes = {
    all: heroesAll as Record<HeroCode, Hero>,
    asArray: heroesArray,
    utils: {
        findByCode(code: string): Hero | undefined {
            return heroesArray.find(it => it.code === code);
        }
    }
};
