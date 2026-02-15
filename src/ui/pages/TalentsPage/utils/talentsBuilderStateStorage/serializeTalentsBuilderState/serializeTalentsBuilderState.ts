import { Talent } from "../../../../../../scripts/extractTalents/types";
import { SerializedHeroState, SerializedTalentState, StorableHeroState } from "../types";

type Params = Omit<StorableHeroState, "heroCode">;

export function serializeTalentsBuilderState({
    rank,
    builderState,
}: Params): SerializedHeroState {
    return {
        rank,
        builderState: {
            used: builderState.used.map(serializeTalent),
            preferred: builderState.preferred.map(serializeTalent),
        }
    };
}

function serializeTalent(talent: Talent): SerializedTalentState {
    return {
        code: talent.code,
        preferred: talent.preferred,
    }
}
