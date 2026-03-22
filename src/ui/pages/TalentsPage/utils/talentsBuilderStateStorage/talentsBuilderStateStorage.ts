import { Hero, HeroCode } from "../../../../uiData/heroes";

import { baseTalentsBuilderStateStorage } from "./baseTalentsBuilderStateStorage";
import { deserializeTalentsBuilderState } from "./deserializeTalentsBuilderState/deserializeTalentsBuilderState";
import { serializeTalentsBuilderState } from "./serializeTalentsBuilderState/serializeTalentsBuilderState";
import { StorableTalentsBuilderHeroState } from "./types";

export const talentsBuilderStateStorage = {
    get(hero: Hero): StorableTalentsBuilderHeroState {
        const storedState = baseTalentsBuilderStateStorage.get(hero.code);

        return deserializeTalentsBuilderState(storedState, hero.talents);
    },
    set(heroCode: HeroCode, stateToStore: StorableTalentsBuilderHeroState) {
        const serializedState = serializeTalentsBuilderState(stateToStore);

        baseTalentsBuilderStateStorage.set(heroCode, serializedState);
    }
}
