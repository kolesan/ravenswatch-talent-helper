import { deserializeRank } from "../../storage/deserialization/deserializeRank";
import { SerializedCompendiumHeroState, StorableCompendiumHeroState } from "../types";

export function deserializeCompendiumState(
    currentStoredState: SerializedCompendiumHeroState | null,
): StorableCompendiumHeroState {
    const rank = deserializeRank(currentStoredState?.rank);

    return {
        rank,
    };
}
