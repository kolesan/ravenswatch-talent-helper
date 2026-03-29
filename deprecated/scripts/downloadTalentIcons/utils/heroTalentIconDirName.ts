import { HeroBase } from "../../../types";

export function heroTalentIconDirName(hero: HeroBase) {
    return `./public/icons/talents/${hero.code}`;
}
