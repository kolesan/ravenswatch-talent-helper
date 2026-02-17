import { Talent } from "../../../../../../scripts/extractTalents/types";
import { isNotLocked } from "../../../utils/isNotLocked";
import { BuilderState } from "../hooks/useBuilderStateReducer/types";

export function applyRank(
    state: BuilderState<Talent>, 
    rank: number
): BuilderState<Talent> {
    const used = state.used.filter(isNotLocked(rank));
    const preferred = state.preferred.filter(isNotLocked(rank));

    return {
        used,
        preferred,
    };
}
