import { HeroBase } from "../../types";

export function heroTalentsFileName(hero: HeroBase) {
    return `./src/deprecated/scrapedData/heroTalents/${hero.code}.json`;
}
