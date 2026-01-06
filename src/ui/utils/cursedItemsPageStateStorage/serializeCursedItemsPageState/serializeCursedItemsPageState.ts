import {
    CursedItemsPageState,
    SerializedCursedItemsPageState,
} from "../../../pages/CursedItemsPage/types";

export function serializeCursedItemsPageState(
    state: CursedItemsPageState, 
): SerializedCursedItemsPageState {
    return {
        used: state.used.map(it => it.code),
        preferred: state.preferred.map(it => it.code),
    }
}
