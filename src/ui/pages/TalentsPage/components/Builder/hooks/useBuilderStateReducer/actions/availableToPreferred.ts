import { BuilderState, BuilderItem } from "../types";

export function availableToPreferred<T extends BuilderItem>(
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
