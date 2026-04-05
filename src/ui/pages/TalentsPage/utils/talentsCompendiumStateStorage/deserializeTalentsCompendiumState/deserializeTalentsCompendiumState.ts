import { deserializeRank } from "TalentsPage/utils/storage/deserialization/deserializeRank";

import { SerializedTalentsCompendiumHeroState, StorableTalentsCompendiumHeroState } from "../types";

export function deserializeTalentsCompendiumState(
    storedState: SerializedTalentsCompendiumHeroState | null,
): StorableTalentsCompendiumHeroState {
    const rank = deserializeRank(storedState?.rank);

    return {
        rank,
    };
}
