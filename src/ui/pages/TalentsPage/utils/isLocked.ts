import { Talent } from "ui/uiData/heroes/talents/types";

export function isLocked(rank: number) {
    return function(talent: Talent) {
        return talent.unlockedAtRank > rank;
    }
}
