import { HeroCode, heroes } from "../uiData/heroes";

export function isHeroCode(v: unknown): v is HeroCode {
    return !!heroes.asArray.find(it => it.code === v);
}
