import { Hero, heroes } from "../../../../../../../finalData/finalData";
import { defaultHero } from "../../../defaultHero";
import { isHeroCode } from "../../../../../../utils/isHeroCode";

export function deserializeHero(
    heroCode: unknown
): Hero {
    if (!isHeroCode(heroCode)) {
        return defaultHero;
    }
    return heroes.utils.findByCode(heroCode) || defaultHero;
}
