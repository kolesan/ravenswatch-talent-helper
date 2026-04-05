import { deserializeBuilderState } from "ui/components/Builder/utils/builderStateStorage/deserializeBuilderState/deserializeBuilderState";
import { Talent } from "ui/uiData/heroes/talents/types";

import { deserializeRank } from "TalentsPage/utils/storage/deserialization/deserializeRank";

import { SerializedTalentsBuilderHeroState, StorableTalentsBuilderHeroState } from "../types";

export function deserializeTalentsBuilderState(
    storedState: SerializedTalentsBuilderHeroState | null,
    allHeroTalents: Talent[],
): StorableTalentsBuilderHeroState {
    const rank = deserializeRank(
        storedState?.rank
    );
    const builderState = deserializeBuilderState(
        storedState?.builderState || null,
        allHeroTalents, 
    );

    return {
        rank,
        builderState,
    };
}
