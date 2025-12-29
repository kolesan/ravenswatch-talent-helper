import { Talent } from "../../../../scripts/extractTalents/types";
import { AppState, FullTalentsState } from "../types";

import { isLocked } from "./isLocked";
import { isNotLocked } from "./isNotLocked";

export function calculateFullTalentsState(
    appState: AppState
): FullTalentsState {
    const {
        hero,
        rank,
        talents,
    } = appState;

    const unusedTalents = hero.talents
        .filter(talent => !sameCode(talent)(talents.used))
        .filter(talent => !sameCode(talent)(talents.preferred));

    const availableTalents = unusedTalents.filter(isNotLocked(rank));
    const lockedTalents = unusedTalents.filter(isLocked(rank));

    return {
        ...talents,
        available: availableTalents,
        locked: lockedTalents,
    }
}


function sameCode(talent: Talent) {
    return contained(it => it.code === talent.code);
}

function contained(cb: (it: Talent) => boolean) {
    return function(talents: Talent[]) {
        return talents.find(cb)
    }
}
