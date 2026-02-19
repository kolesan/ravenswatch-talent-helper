import { BuilderItem } from "../../../hooks/useBuilderStateReducer/types";
import { SerializedBuilderState, StorableBuilderState } from "../types";

export function serializeBuilderState<T extends BuilderItem>(
    state: StorableBuilderState<T>, 
): SerializedBuilderState {
    return {
        used: state.used.map(serializeItem),
        preferred: state.preferred.map(serializeItem),
    }
}

function serializeItem<T extends BuilderItem>(item: T) {
    return {
        code: item.code,
        preferred: item.preferred,
    }
}
