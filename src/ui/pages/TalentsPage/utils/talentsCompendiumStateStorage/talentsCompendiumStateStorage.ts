import { HeroCode } from "../../../../uiData/heroes";

import { baseTalentsCompendiumStateStorage } from "./baseTalentsCompendiumStateStorage";
import { deserializeTalentsCompendiumState } from "./deserializeTalentsCompendiumState/deserializeTalentsCompendiumState";
import { serializeTalentsCompendiumState } from "./serializeTalentsCompendiumState/serializeTalentsCompendiumHero";
import { StorableTalentsCompendiumHeroState } from "./types";

export const talentsCompendiumStateStorage = {
    get(heroCode: HeroCode): StorableTalentsCompendiumHeroState {
        const storedState = baseTalentsCompendiumStateStorage.get(heroCode);

        return deserializeTalentsCompendiumState(storedState);
    },
    set(heroCode: HeroCode, stateToStore: StorableTalentsCompendiumHeroState) {
        const serializedState = serializeTalentsCompendiumState(stateToStore);

        baseTalentsCompendiumStateStorage.set(heroCode, serializedState);
    }
}
