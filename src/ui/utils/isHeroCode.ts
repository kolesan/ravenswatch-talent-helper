import { heroes } from "../uiData/heroes/heroes";
import { HeroCode } from "../uiData/heroes/types";

export function isHeroCode(v: unknown): v is HeroCode {
    return !!heroes.asArray.find(it => it.code === v);
}
