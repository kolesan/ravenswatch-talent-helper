import { deserializeRank } from "../../storage/deserialization/deserializeRank";
import { SerializedTalentsCompendiumHeroState, StorableTalentsCompendiumHeroState } from "../types";

export function deserializeTalentsCompendiumState(
    currentStoredState: SerializedTalentsCompendiumHeroState | null,
): StorableTalentsCompendiumHeroState {
    const rank = deserializeRank(currentStoredState?.rank);

    return {
        rank,
    };
}
