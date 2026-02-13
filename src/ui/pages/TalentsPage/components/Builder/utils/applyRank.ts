import { isNotLocked } from "../../../utils/isNotLocked";
import { BuilderState } from "../types";

export function applyRank(state: BuilderState, rank: number): BuilderState {
    const used = state.used.filter(isNotLocked(rank));
    const preferred = state.preferred.filter(isNotLocked(rank));

    return {
        used,
        preferred,
    };
}
