import { Talent } from "../../../../../../scripts/extractTalents/types";
import { TalentWithLockedFlag } from "../../../types";

export function markIfLocked(heroRank: number) {
    return function(talent: Talent): TalentWithLockedFlag {
        if (talent.unlockedAtRank > heroRank) {
            return {
                ...talent,
                locked: true,
            };
        }
        return talent;
    }
}
