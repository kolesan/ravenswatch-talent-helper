import { Talent } from "../../../../../../scripts/extractTalents/types";
import { deserializeBuilderState } from "../../../../../components/Builder/utils/builderStateStorage/deserializeBuilderState/deserializeBuilderState";
import { deserializeRank } from "../../storage/deserialization/deserializeRank";
import { SerializedTalentsBuilderHeroState, StorableTalentsBuilderHeroState } from "../types";

export function deserializeTalentsBuilderState(
    currentStoredState: SerializedTalentsBuilderHeroState | null,
    allHeroTalents: Talent[],
): StorableTalentsBuilderHeroState {
    const rank = deserializeRank(
        currentStoredState?.rank
    );
    const builderState = deserializeBuilderState(
        currentStoredState?.builderState || null,
        allHeroTalents, 
    );

    return {
        rank,
        builderState,
    };
}
