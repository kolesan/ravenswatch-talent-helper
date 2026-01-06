import { AppState, SerializedAppState } from "../../../pages/TalentsPage/types";

import { serializeHero } from "./utils/serializeHero";

export function serializeAppState(
    state: AppState, 
    currentStoredState: SerializedAppState | null,
): SerializedAppState {
    const currentHeroCode = state.hero.code;
    return {
        currentHeroCode,
        heroes: {
            ...currentStoredState?.heroes,
            [currentHeroCode]: serializeHero(state),
        }
    }
}
