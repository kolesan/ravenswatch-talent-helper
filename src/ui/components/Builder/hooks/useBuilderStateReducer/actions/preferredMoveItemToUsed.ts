import { BuilderState, BuilderItem } from "../types";

export function preferredMoveItemToUsed<T extends BuilderItem>(
    state: BuilderState<T>, 
    item: T
): BuilderState<T> {
    const used = [...state.used, item];
    const preferred = state.preferred
        .filter(it => it.code !== item.code);

    return {
        used,
        preferred,
    };
}
