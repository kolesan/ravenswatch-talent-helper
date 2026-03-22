import { Hero, heroes } from "../../../../../../ui_data/heroes";
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
