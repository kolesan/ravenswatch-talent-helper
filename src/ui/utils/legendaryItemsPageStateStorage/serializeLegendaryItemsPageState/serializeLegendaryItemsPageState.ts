import {
    LegendaryItemsPageState,
    SerializedLegendaryItemsPageState,
} from "../../../pages/LegendaryItemsPage/types";

export function serializeLegendaryItemsPageState(
    state: LegendaryItemsPageState, 
): SerializedLegendaryItemsPageState {
    return {
        used: state.used.map(it => it.code),
        preferred: state.preferred.map(it => it.code),
    }
}
