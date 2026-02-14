import { Talent } from "../../../../../../scripts/extractTalents/types";
import { TalentWithLockedFlag } from "../../../types";
import { isLocked } from "../../../utils/isLocked";
import { isNotLocked } from "../../../utils/isNotLocked";
import { markLocked } from "../../../utils/markLocked";
import { BuilderState } from "../hooks/useBuilderStateReducer/types";

type Params = {
    rank: number,
    builderState: BuilderState,
    allTalents: Talent[],
}

export function calculateAvailableTalents({
    rank,
    builderState,
    allTalents,
}: Params): TalentWithLockedFlag[] {
    const unused = allTalents
        .filter(it => it.type === "standard")
        .filter(isNotIn(builderState.used))
        .filter(isNotIn(builderState.preferred));

    const unlockedUnused = unused.filter(isNotLocked(rank));
    const lockedUnused = unused.filter(isLocked(rank));

    return [
        ...unlockedUnused, 
        ...lockedUnused.map(markLocked),
    ];
}

function isNotIn(talents: Talent[]) {
    return function(talent: Talent) {
        return !talents.find(it => it.code === talent.code);
    }
}
