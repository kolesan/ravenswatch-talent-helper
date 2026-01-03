import { HeroCode, heroCodes } from "../../data/heroes";

export function isHeroCode(v: unknown): v is HeroCode {
    return !!heroCodes.find(it => it === v);
}
