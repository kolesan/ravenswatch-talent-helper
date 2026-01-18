import { Talent } from "../../../../../scripts/extractTalents/types";
import { AppState, SerializedHeroState } from "../../../../pages/TalentsPage/types";

export function serializeHero(
    state: AppState,
): SerializedHeroState {
    return {
        rank: state.rank,
        talents: {
            used: state.talents.used.map(serializeTalent),
            preferred: state.talents.preferred.map(serializeTalent),
        }
    };
}

function serializeTalent(talent: Talent) {
    return {
        code: talent.code,
        preferred: talent.preferred,
    }
}
