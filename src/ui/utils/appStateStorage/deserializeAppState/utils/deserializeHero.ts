import { Hero, heroes } from "../../../../../finalData/finalData";
import { defaultAppState } from "../../../../pages/talentsPage/utils/defaultAppState";
import { isHeroCode } from "../../../isHeroCode";

export function deserializeHero(
    heroCode: unknown
): Hero {
    if (!isHeroCode(heroCode)) {
        return defaultAppState.hero;
    }
    return heroes.utils.findByCode(heroCode) || defaultAppState.hero;
}
