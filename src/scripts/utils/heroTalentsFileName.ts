import { Hero } from "../../data/heroes";

export function heroTalentsFileName(hero: Hero) {
    return `./src/scrapedData/heroTalents/${hero.code}.json`;
}
