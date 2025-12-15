import { Hero } from "../../data/heroes";

export function heroTalentsTableFileName(hero: Hero) {
    return `./src/scrapedData/heroTalentTables/${hero.code}.html`;
}
