import { HeroCode } from "../../../../../../data/heroes";
import { SerializedCompendiumState, StorableCompendiumHeroState } from "../types";

import { serializeCompendiumHero } from "./utils/serializeCompendiumHero";

type Params = {
    currentStoredState: SerializedCompendiumState | null;
    stateToStore: StorableCompendiumHeroState;
    heroCode: HeroCode;
}

export function serializeCompendiumState({
    currentStoredState,
    stateToStore,
    heroCode,
}: Params): SerializedCompendiumState {
    return {
        heroes: {
            ...currentStoredState?.heroes,
            [heroCode]: serializeCompendiumHero(stateToStore),
        }
    }
}
