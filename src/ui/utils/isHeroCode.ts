import { HeroCode, heroes } from "../../finalData/finalData";

export function isHeroCode(v: unknown): v is HeroCode {
    return !!heroes.asArray.find(it => it.code === v);
}
