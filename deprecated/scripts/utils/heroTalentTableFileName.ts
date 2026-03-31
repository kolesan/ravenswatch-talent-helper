import { HeroBase } from "../../types";

export function heroTalentTableFileName(hero: HeroBase) {
    return `./src/deprecated/scrapedData/heroTalentTables/${hero.code}.html`;
}
