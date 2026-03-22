import { HeroBase } from "../../data/heroes/types";

export function heroTalentIconDirName(hero: HeroBase) {
    return `./public/icons/talents/${hero.code}`;
}
