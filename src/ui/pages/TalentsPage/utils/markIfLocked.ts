import { Talent } from "../../../../scripts/extractTalents/types";

export function markIfLocked(heroRank: number) {
    return function(talent: Talent) {
        if (talent.unlockedAtRank > heroRank) {
            return {
                ...talent,
                locked: true,
            };
        }
        return talent;
    }
}
