import { HeroCode } from "../../../../../data/heroes";

import { baseCompendiumStateStorage } from "./baseCompendiumStateStorage";
import { deserializeCompendiumState } from "./deserializeCompendiumState/deserializeCompendiumState";
import { serializeCompendiumState } from "./serializeCompendiumState/serializeCompendiumHero";
import { StorableCompendiumHeroState } from "./types";

export const compendiumStateStorage = {
    get(heroCode: HeroCode): StorableCompendiumHeroState {
        console.log("Loading from compendium storage", { 
            hero: heroCode,
        });
        const storedState = baseCompendiumStateStorage.get(heroCode);

        return deserializeCompendiumState(storedState);
    },
    set(heroCode: HeroCode, stateToStore: StorableCompendiumHeroState) {
        console.log("Saving to compendium storage", { 
            hero: heroCode,
            rank: stateToStore.rank,
        });

        const serializedState = serializeCompendiumState(stateToStore);

        baseCompendiumStateStorage.set(heroCode, serializedState);
    }
}
