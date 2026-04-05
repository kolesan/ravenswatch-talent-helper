import { heroes } from "ui/uiData/heroes/heroes";
import { Hero } from "ui/uiData/heroes/types";
import { isHeroCode } from "ui/utils/isHeroCode";

import { defaultHero } from "TalentsPage/utils/defaultHero";

export function deserializeHero(
    heroCode: unknown
): Hero {
    if (!isHeroCode(heroCode)) {
        return defaultHero;
    }
    return heroes.utils.findByCode(heroCode) || defaultHero;
}
