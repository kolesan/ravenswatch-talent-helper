import { HeroBase } from "../../../src/data/heroes/types";

export function heroTalentTableFileName(hero: HeroBase) {
    return `./src/scrapedData/heroTalentTables/${hero.code}.html`;
}
