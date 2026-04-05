import { heroes } from "ui/uiData/heroes/heroes";
import { HeroCode } from "ui/uiData/heroes/types";

export function isHeroCode(v: unknown): v is HeroCode {
    return !!heroes.asArray.find(it => it.code === v);
}
