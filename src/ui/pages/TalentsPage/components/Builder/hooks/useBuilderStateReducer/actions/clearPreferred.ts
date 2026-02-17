import { BuilderState, BuilderItem } from "../types";

export function clearPreferred<T extends BuilderItem>(
    state: BuilderState<T>
): BuilderState<T> {
    return {
        ...state,
        preferred: [],
    };
}
