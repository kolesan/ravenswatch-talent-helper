import { Hero } from "../../data/heroes";

export function heroTalentIconDirName(hero: Hero) {
    return `./public/icons/talents/${hero.code}`;
}
