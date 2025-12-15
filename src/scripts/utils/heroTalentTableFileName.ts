import { Hero } from "../../data/heroes";

export function heroTalentTableFileName(hero: Hero) {
    return `./src/scrapedData/heroPages/${hero.code}.html`;
}
