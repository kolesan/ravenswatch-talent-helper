import { HeroBase } from "../../data/types";

export function heroPageFileName(hero: HeroBase) {
    return `./src/scrapedData/heroPages/${hero.code}.html`;
}
