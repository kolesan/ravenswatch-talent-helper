import { HeroBase } from "../../data/heroesBase";

export function heroPageFileName(hero: HeroBase) {
    return `./src/scrapedData/heroPages/${hero.code}.html`;
}
