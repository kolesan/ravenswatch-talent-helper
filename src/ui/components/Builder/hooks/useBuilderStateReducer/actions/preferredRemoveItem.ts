import { BuilderState, BuilderItem } from "../types";

export function preferredRemoveItem<T extends BuilderItem>(
    state: BuilderState<T>, 
    item: T
): BuilderState<T> {
    const preferred = state.preferred
        .filter(it => it.code !== item.code);

    return {
        ...state,
        preferred
    };
}
