import { HeroBase } from "../../../src/data/heroes/types";

export function heroTalentsFileName(hero: HeroBase) {
    return `./src/scrapedData/heroTalents/${hero.code}.json`;
}
