import { Talent } from "../../../../../../../scripts/extractTalents/types";
import { BuilderState } from "../../../../components/Builder/types";
import { SerializedHeroState } from "../../../../types";

type Params = {
    rank: number;
    talents: BuilderState;
}
export function serializeHero({
    rank,
    talents,
}: Params): SerializedHeroState {
    return {
        rank,
        talents: {
            used: talents.used.map(serializeTalent),
            preferred: talents.preferred.map(serializeTalent),
        }
    };
}

function serializeTalent(talent: Talent) {
    return {
        code: talent.code,
        preferred: talent.preferred,
    }
}
