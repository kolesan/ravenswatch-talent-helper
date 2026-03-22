import { heroes } from "../../../../../../uiData/heroes";
import { Hero } from "../../../../../../uiData/types";
import { isHeroCode } from "../../../../../../utils/isHeroCode";
import { defaultHero } from "../../../defaultHero";

export function deserializeHero(
    heroCode: unknown
): Hero {
    if (!isHeroCode(heroCode)) {
        return defaultHero;
    }
    return heroes.utils.findByCode(heroCode) || defaultHero;
}
