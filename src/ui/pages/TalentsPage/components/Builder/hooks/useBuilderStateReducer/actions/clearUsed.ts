import { BuilderState } from "../../../types";

export function clearUsed(state: BuilderState): BuilderState {
    const preferredFromUsed = state.used.filter(it => it.preferred);

    return {
        used: [],
        preferred: [...state.preferred, ...preferredFromUsed],
    };
}
