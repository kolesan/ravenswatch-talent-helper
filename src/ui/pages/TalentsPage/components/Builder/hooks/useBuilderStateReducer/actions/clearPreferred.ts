import { BuilderState } from "../types";

export function clearPreferred(state: BuilderState): BuilderState {
    return {
        ...state,
        preferred: [],
    };
}
