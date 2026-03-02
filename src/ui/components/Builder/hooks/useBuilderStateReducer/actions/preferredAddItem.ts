import { BuilderState, BuilderItem } from "../types";

export function preferredAddItem<T extends BuilderItem>(
    state: BuilderState<T>, 
    item: T
): BuilderState<T> {
    const preferredItem = {
        ...item,
        preferred: true,
    };

    const preferred = [...state.preferred, preferredItem];

    return {
        ...state,
        preferred,
    };
}
