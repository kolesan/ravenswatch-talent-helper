import { HeroBase } from "../../data/types";

export function heroTalentTableFileName(hero: HeroBase) {
    return `./src/scrapedData/heroTalentTables/${hero.code}.html`;
}
