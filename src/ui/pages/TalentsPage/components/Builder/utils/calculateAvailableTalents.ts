import { Talent } from "../../../../../../scripts/extractTalents/types";
import { TalentWithLockedFlag } from "../../../types";
import { isLocked } from "../../../utils/isLocked";
import { isNotLocked } from "../../../utils/isNotLocked";
import { markLocked } from "../../../utils/markLocked";
import { BuilderState } from "../types";

export function calculateAvailableTalents(
    rank: number,
    allTalents: Talent[],
    state: BuilderState,
): TalentWithLockedFlag[] {
    const unused = allTalents
        .filter(it => it.type === "standard")
        .filter(isNotIn(state.used))
        .filter(isNotIn(state.preferred));

    const unlockedUnused = unused.filter(isNotLocked(rank));
    const lockedUnused = unused.filter(isLocked(rank));

    return [
        ...unlockedUnused, 
        ...lockedUnused.map(markLocked),
    ]
}

function isNotIn(talents: Talent[]) {
    return function(talent: Talent) {
        return !talents.find(it => it.code === talent.code);
    }
}
