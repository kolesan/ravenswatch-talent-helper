import { HeroCode } from "../../../../../data/heroes";
import { Hero } from "../../../../../finalData/finalData";

import { baseTalentsBuilderStateStorage } from "./baseTalentsBuilderStateStorage";
import { deserializeTalentsBuilderState } from "./deserializeTalentsBuilderState/deserializeTalentsBuilderState";
import { serializeTalentsBuilderState } from "./serializeTalentsBuilderState/serializeTalentsBuilderState";
import { StorableHeroState } from "./types";

export const talentsBuilderStateStorage = {
    get(hero: Hero): StorableHeroState {
        console.log("Loading from builder storage", { 
            hero: hero.code,
        });
        const storedState = baseTalentsBuilderStateStorage.get(hero.code);

        return deserializeTalentsBuilderState(storedState, hero);
    },
    set(heroCode: HeroCode, stateToStore: StorableHeroState) {
        console.log("Saving to builder storage", { 
            hero: heroCode,
            rank: stateToStore.rank,
            used: stateToStore.builderState.used.length,
            preferred: stateToStore.builderState.preferred.length,
        });

        const serializedState = serializeTalentsBuilderState(stateToStore);

        baseTalentsBuilderStateStorage.set(heroCode, serializedState);
    }
}
