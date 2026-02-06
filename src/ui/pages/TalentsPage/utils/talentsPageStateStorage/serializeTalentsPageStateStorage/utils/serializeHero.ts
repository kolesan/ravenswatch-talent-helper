import { Talent } from "../../../../../../../scripts/extractTalents/types";
import { ReactiveTalentsPageState, SerializedHeroState } from "../../../../types";

export function serializeHero(
    state: ReactiveTalentsPageState,
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
