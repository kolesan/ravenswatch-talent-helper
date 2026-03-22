import { heroes } from "../uiData/heroes";
import { HeroCode } from "../uiData/types";

export function isHeroCode(v: unknown): v is HeroCode {
    return !!heroes.asArray.find(it => it.code === v);
}
