import { HeroCode } from "../../../../../data/heroes";
import { Hero } from "../../../../../finalData/finalData";
import { StorableHeroState } from "../../types";

import { baseHeroStateStorage } from "./baseHeroStateStorage";
import { deserializeHeroState } from "./deserializeHeroState/deserializeHeroState";
import { serializeHeroState } from "./serializeHeroState/serializeHeroState";

export const heroStateStorage = {
    get(hero: Hero): StorableHeroState {
        const currentStoredState = baseHeroStateStorage.get();

        return deserializeHeroState(currentStoredState, hero);
    },
    set(heroCode: HeroCode, stateToStore: StorableHeroState) {
        const currentStoredState = baseHeroStateStorage.get();

        const newSerializedState = serializeHeroState({
            currentStoredState,
            stateToStore,
            heroCode,
        });

        baseHeroStateStorage.set(newSerializedState);
    }
}
