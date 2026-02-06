import { useMemo } from "preact/hooks";

import { HeroCode } from "../../../../data/heroes";
import { talentsPageStateStorage } from "../utils/talentsPageStateStorage/talentsPageStateStorage";

export function useStoredState(initialHeroCode: HeroCode | undefined) {
    return useMemo(() => {
        if (initialHeroCode) {
            return talentsPageStateStorage.getHero(initialHeroCode);
        }
        return talentsPageStateStorage.getCurrentHero();
    }, [initialHeroCode]);
}
