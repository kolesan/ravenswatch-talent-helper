import { HeroCode } from "../../../../../data/heroes";

import { baseTalentsCompendiumStateStorage } from "./baseTalentsCompendiumStateStorage";
import { deserializeTalentsCompendiumState } from "./deserializeTalentsCompendiumState/deserializeTalentsCompendiumState";
import { serializeTalentsCompendiumState } from "./serializeTalentsCompendiumState/serializeTalentsCompendiumHero";
import { StorableTalentsCompendiumHeroState } from "./types";

export const talentsCompendiumStateStorage = {
    get(heroCode: HeroCode): StorableTalentsCompendiumHeroState {
        console.log("Loading from compendium storage", { 
            hero: heroCode,
        });
        const storedState = baseTalentsCompendiumStateStorage.get(heroCode);

        return deserializeTalentsCompendiumState(storedState);
    },
    set(heroCode: HeroCode, stateToStore: StorableTalentsCompendiumHeroState) {
        console.log("Saving to compendium storage", { 
            hero: heroCode,
            rank: stateToStore.rank,
        });

        const serializedState = serializeTalentsCompendiumState(stateToStore);

        baseTalentsCompendiumStateStorage.set(heroCode, serializedState);
    }
}
