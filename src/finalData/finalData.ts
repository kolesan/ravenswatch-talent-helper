import { Hero as HeroRaw, HeroCode, heroes as heroesRaw } from "../data/heroes";
import { aladdin } from "../scrapedData/mergedTalents/aladdin";
import { beowulf } from "../scrapedData/mergedTalents/beowulf";
import { carmilla } from "../scrapedData/mergedTalents/carmilla";
import { geppetto } from "../scrapedData/mergedTalents/geppetto";
import { juliet } from "../scrapedData/mergedTalents/juliet";
import { melusine } from "../scrapedData/mergedTalents/melusine";
import { piper } from "../scrapedData/mergedTalents/piper";
import { romeo } from "../scrapedData/mergedTalents/romeo";
import { scarlet } from "../scrapedData/mergedTalents/scarlet";
import { snowqueen } from "../scrapedData/mergedTalents/snowqueen";
import { wukong } from "../scrapedData/mergedTalents/wukong";
import { merlin } from "../scrapedData/mergedTalents/merlin";
import { Talent } from "../scripts/extractTalents/types";

export type Hero = HeroRaw & {
    talents: Talent[];
}

const allRaw = {
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

let heroesFinalArray: Hero[] = [];
let heroesFinal: Partial<Record<HeroCode, Hero>> = {};
for (let i = 0; i < heroesRaw.asArray.length; i++) {
    const heroRaw = heroesRaw.asArray[i];

    const mergedTalents = allRaw[heroRaw.code];

    const heroFinal = {
        ...heroRaw,
        talents: mergedTalents,
    };

    heroesFinalArray.push(heroFinal);
    heroesFinal[heroRaw.code] = heroFinal;
}

export const heroes = {
    all: heroesFinal as Record<HeroCode, Hero>,
    asArray: heroesFinalArray,
    utils: {
        findByCode(code: string): Hero | undefined {
            return heroesFinalArray.find(it => it.code === code);
        }
    }
};
