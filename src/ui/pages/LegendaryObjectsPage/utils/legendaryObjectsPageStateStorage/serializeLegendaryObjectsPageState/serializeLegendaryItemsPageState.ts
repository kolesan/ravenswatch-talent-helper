import {
    LegendaryObjectsPageState,
    SerializedLegendaryObjectsPageState,
} from "../../../types";

export function serializeLegendaryObjectsPageState(
    state: LegendaryObjectsPageState, 
): SerializedLegendaryObjectsPageState {
    return {
        used: state.used.map(it => it.code),
        preferred: state.preferred.map(it => it.code),
    }
}
