import { BuilderItem, BuilderState } from "../types";

export function usedRemoveItem<T extends BuilderItem>(
    state: BuilderState<T>, 
    item: T
): BuilderState<T> {
    const used = state.used
        .filter(it => it.code !== item.code);
    const preferred = item.preferred
        ? [...state.preferred, item]
        : state.preferred;

    return {
        used,
        preferred,
    };
}
