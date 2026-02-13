import { Talent } from "../../../../../../../scripts/extractTalents/types";
import { SerializedHero, SerializedTalent, StorableHeroState } from "../../../../types";

type Params = Omit<StorableHeroState, "heroCode">;

export function serializeHero({
    rank,
    builderState,
}: Params): SerializedHero {
    return {
        rank,
        builderState: {
            used: builderState.used.map(serializeTalent),
            preferred: builderState.preferred.map(serializeTalent),
        }
    };
}

function serializeTalent(talent: Talent): SerializedTalent {
    return {
        code: talent.code,
        preferred: talent.preferred,
    }
}
