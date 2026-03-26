import { HeroBase } from "../../../src/data/heroes/types";

export function heroPageFileName(hero: HeroBase) {
    return `./src/scrapedData/heroPages/${hero.code}.html`;
}
