import { Talent } from "../../../../../uiData/heroes/talents/types";
import { deserializeBuilderState } from "../../../../../components/Builder/utils/builderStateStorage/deserializeBuilderState/deserializeBuilderState";
import { deserializeRank } from "../../storage/deserialization/deserializeRank";
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
