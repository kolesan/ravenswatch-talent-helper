import { HeroBase } from "../../data/heroesBase";

export function heroTalentTableFileName(hero: HeroBase) {
    return `./src/scrapedData/heroTalentTables/${hero.code}.html`;
}
