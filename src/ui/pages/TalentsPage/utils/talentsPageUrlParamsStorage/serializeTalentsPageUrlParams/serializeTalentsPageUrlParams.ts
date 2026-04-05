import {
    SerializedTalentsPageUrlParamsState,
    StorableTalentsPageUrlParamsState,
} from "TalentsPage/types";

export function serializeTalentsPageUrlParams(
    stateToStore: StorableTalentsPageUrlParamsState
): SerializedTalentsPageUrlParamsState {
    return {
        hero: stateToStore.hero.code,
        view: stateToStore.view,
    }
}
