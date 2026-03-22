import { HeroBase } from "../../data/types";

export function heroTalentIconDirName(hero: HeroBase) {
    return `./public/icons/talents/${hero.code}`;
}
