import { HeroCode } from "../../../../../../data/heroes";
import { SerializedHeroes, StorableHeroState } from "../../../types";

import { serializeHero } from "./utils/serializeHero";

type Params = {
    currentStoredState: SerializedHeroes | null;
    stateToStore: StorableHeroState;
    heroCode: HeroCode;
}

export function serializeHeroState({
    currentStoredState,
    stateToStore,
    heroCode,
}: Params): SerializedHeroes {
    return {
        heroes: {
            ...currentStoredState?.heroes,
            [heroCode]: serializeHero(stateToStore),
        }
    }
}
