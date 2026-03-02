import { BuilderState, BuilderItem } from "../types";

export function preferredClear<T extends BuilderItem>(
    state: BuilderState<T>
): BuilderState<T> {
    return {
        ...state,
        preferred: [],
    };
}
