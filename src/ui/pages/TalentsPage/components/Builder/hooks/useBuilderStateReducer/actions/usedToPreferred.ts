import { BuilderItem, BuilderState } from "../types";

export function usedToPreferred<T extends BuilderItem>(
    state: BuilderState<T>, 
    item: T
) {
    const used = state.used
        .filter(it => it.code !== item.code);
    const preferred = [...state.preferred, item];

    return {
        used,
        preferred,
    };
}
