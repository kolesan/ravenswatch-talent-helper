import { Hero } from "../data/heroes";

export function heroTalentTableFileName(hero: Hero) {
    return `./src/scrapedData/${hero.code}Page.html`;
}
