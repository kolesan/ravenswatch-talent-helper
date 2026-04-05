import { BuilderState } from "ui/components/Builder/hooks/useBuilderStateReducer/types";
import { Talent } from "ui/uiData/heroes/talents/types";

import { isNotLocked } from "TalentsPage/utils/isNotLocked";

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
