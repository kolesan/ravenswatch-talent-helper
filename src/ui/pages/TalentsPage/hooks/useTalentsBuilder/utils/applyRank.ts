import { Talent } from "../../../../../uiData/heroes/talents/types";
import { BuilderState } from "../../../../../components/Builder/hooks/useBuilderStateReducer/types";
import { isNotLocked } from "../../../utils/isNotLocked";

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
