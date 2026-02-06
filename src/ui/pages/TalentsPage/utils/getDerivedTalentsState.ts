import { Talent } from "../../../../scripts/extractTalents/types";
import { ReactiveTalentsPageState, LocalTalentsState } from "../types";

import { isLocked } from "./isLocked";
import { isNotLocked } from "./isNotLocked";

export function getDerivedTalentsState(
    allTalents: Talent[],
    state: ReactiveTalentsPageState,
): LocalTalentsState {
    const {
        rank,
        talents,
    } = state;

    const unusedTalents = allTalents
        .filter(it => it.type === "standard")
        .filter(isNotIn(talents.used))
        .filter(isNotIn(talents.preferred));

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
