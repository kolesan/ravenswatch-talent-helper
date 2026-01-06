import {
    CursedObjectsPageState,
    SerializedCursedObjectsPageState,
} from "../../../types";

export function serializeCursedObjectsPageState(
    state: CursedObjectsPageState, 
): SerializedCursedObjectsPageState {
    return {
        used: state.used.map(it => it.code),
        preferred: state.preferred.map(it => it.code),
    }
}
