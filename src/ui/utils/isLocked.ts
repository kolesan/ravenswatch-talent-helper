import { Talent } from "../../scripts/extractTalents/types";

export function isLocked(rank: number) {
    return function(talent: Talent) {
        return talent.unlockedAtRank > rank;
    }
}
