import { HeroBase } from "../../data/heroesBase";

export function heroTalentsFileName(hero: HeroBase) {
    return `./src/scrapedData/heroTalents/${hero.code}.json`;
}
