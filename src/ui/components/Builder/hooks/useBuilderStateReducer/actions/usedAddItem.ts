import { BuilderState, BuilderItem } from "../types";

export function usedAddItem<T extends BuilderItem>(
    state: BuilderState<T>, 
    item: T
): BuilderState<T> {
    const used = [...state.used, item];

    return {
        ...state,
        used
    };
}
