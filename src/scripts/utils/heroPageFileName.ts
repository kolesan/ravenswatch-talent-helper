import { Hero } from "../../data/heroes";

export function heroPageFileName(hero: Hero) {
    return `./src/scrapedData/heroPages/${hero.code}.html`;
}
