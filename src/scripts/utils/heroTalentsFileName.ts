import { HeroBase } from "../../data/types";

export function heroTalentsFileName(hero: HeroBase) {
    return `./src/scrapedData/heroTalents/${hero.code}.json`;
}
