import { Talent } from "../../scripts/extractTalents/types";
import { AppState, FullTalentsState } from "../types";

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

    const availableTalents = unusedTalents.filter(it => !isLocked(rank)(it));
    const lockedTalents = unusedTalents.filter(it => isLocked(rank)(it));

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


function isLocked(rank: number) {
    return function(talent: Talent) {
        return talent.unlockedAtRank > rank;
    }
}
