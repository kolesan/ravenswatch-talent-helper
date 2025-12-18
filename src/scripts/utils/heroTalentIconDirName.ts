import { Hero } from "../../data/heroes";

export function heroTalentIconDirName(hero: Hero) {
    return `./src/scrapedData/icons/talents/${hero.code}`;
}
