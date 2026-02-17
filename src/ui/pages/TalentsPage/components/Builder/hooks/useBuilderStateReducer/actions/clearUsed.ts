import { BuilderState, BuilderItem } from "../types";

export function clearUsed<T extends BuilderItem>(
    state: BuilderState<T>
): BuilderState<T> {
    const preferredFromUsed = state.used.filter(it => it.preferred);

    return {
        used: [],
        preferred: [...state.preferred, ...preferredFromUsed],
    };
}
