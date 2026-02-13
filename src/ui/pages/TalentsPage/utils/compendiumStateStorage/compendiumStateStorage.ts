import { HeroCode } from "../../../../../data/heroes";

import { baseCompendiumStateStorage } from "./baseCompendiumStateStorage";
import { deserializeCompendiumState } from "./deserializeCompendiumState/deserializeCompendiumState";
import { serializeCompendiumState } from "./serializeCompendiumState/serializeCompendiumState";
import { StorableCompendiumHeroState } from "./types";

export const compendiumStateStorage = {
    get(heroCode: HeroCode): StorableCompendiumHeroState {
        const currentStoredState = baseCompendiumStateStorage.get();

        return deserializeCompendiumState(currentStoredState, heroCode);
    },
    set(heroCode: HeroCode, stateToStore: StorableCompendiumHeroState) {
        const currentStoredState = baseCompendiumStateStorage.get();

        const newSerializedState = serializeCompendiumState({
            currentStoredState,
            stateToStore,
            heroCode,
        });

        baseCompendiumStateStorage.set(newSerializedState);
    }
}
