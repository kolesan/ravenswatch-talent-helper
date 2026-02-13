import { HeroCode } from "../../../../../data/heroes";
import { Hero } from "../../../../../finalData/finalData";
import { StorableHeroState } from "../../types";

import { baseTalentsBuilderStateStorage } from "./baseTalentsBuilderStateStorage";
import { deserializeTalentsBuilderState } from "./deserializeTalentsBuilderState/deserializeTalentsBuilderState";
import { serializeTalentsBuilderState } from "./serializeTalentsBuilderState/serializeTalentsBuilderState";

export const talentsBuilderStateStorage = {
    get(hero: Hero): StorableHeroState {
        const currentStoredState = baseTalentsBuilderStateStorage.get();

        return deserializeTalentsBuilderState(currentStoredState, hero);
    },
    set(heroCode: HeroCode, stateToStore: StorableHeroState) {
        console.log("Saving to builder storage", { 
            hero: heroCode,
            rank: stateToStore.rank,
            used: stateToStore.builderState.used.length,
            preferred: stateToStore.builderState.preferred.length,
        });

        const currentStoredState = baseTalentsBuilderStateStorage.get();

        const newSerializedState = serializeTalentsBuilderState({
            currentStoredState,
            stateToStore,
            heroCode,
        });

        baseTalentsBuilderStateStorage.set(newSerializedState);
    }
}
