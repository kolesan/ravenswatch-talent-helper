import { Talent } from "../../../../../../scripts/extractTalents/types";
import { LocalTalentsState } from "../../../types";
import { isLocked } from "../../../utils/isLocked";
import { isNotLocked } from "../../../utils/isNotLocked";
import { BuilderState } from "../types";

export function getDerivedTalentsState(
    rank: number,
    allTalents: Talent[],
    state: BuilderState,
): LocalTalentsState {
    const unusedTalents = allTalents
        .filter(it => it.type === "standard")
        .filter(isNotIn(state.used))
        .filter(isNotIn(state.preferred));

    const availableTalents = unusedTalents.filter(isNotLocked(rank));
    const lockedTalents = unusedTalents.filter(isLocked(rank));

    return {
        available: availableTalents,
        locked: lockedTalents,
    }
}

function isNotIn(talents: Talent[]) {
    return function(talent: Talent) {
        return !talents.find(it => it.code === talent.code);
    }
}
