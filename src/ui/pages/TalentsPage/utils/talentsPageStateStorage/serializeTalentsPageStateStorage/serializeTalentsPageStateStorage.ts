import { SerializedTalentsPageState, StorableTalentsPageState } from "../../../types";

import { serializeHero } from "./utils/serializeHero";

type Params = {
    stateToStore: StorableTalentsPageState;
    currentStoredState: SerializedTalentsPageState | null,
}

export function serializeTalentsPageStateStorage({
    stateToStore,
    currentStoredState,
}: Params): SerializedTalentsPageState {
    const currentHeroCode = stateToStore.heroCode;
    return {
        currentHeroCode: stateToStore.heroCode,
        currentView: stateToStore.view,
        heroes: {
            ...currentStoredState?.heroes,
            [currentHeroCode]: serializeHero({
                rank: stateToStore.rank,
                talents: stateToStore.builderState
            }),
        }
    }
}
