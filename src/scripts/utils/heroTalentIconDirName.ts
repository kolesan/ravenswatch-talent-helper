import { HeroBase } from "../../data/heroesBase";

export function heroTalentIconDirName(hero: HeroBase) {
    return `./public/icons/talents/${hero.code}`;
}
