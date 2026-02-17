import { BuilderItem, BuilderState } from "../types";

export function usedToAvailable<T extends BuilderItem>(
    state: BuilderState<T>, 
    item: T
): BuilderState<T> {
    const used = state.used
        .filter(it => it.code !== item.code);

    return {
        ...state,
        used,
    };
}
