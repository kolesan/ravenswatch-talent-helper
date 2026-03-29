import { HeroBase } from "../../types";

export function heroPageFileName(hero: HeroBase) {
    return `./src/deprecated/scrapedData/heroPages/${hero.code}.html`;
}
