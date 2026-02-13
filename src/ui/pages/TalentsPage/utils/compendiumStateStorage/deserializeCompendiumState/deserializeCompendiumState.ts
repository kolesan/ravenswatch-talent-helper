import { HeroCode } from "../../../../../../data/heroes";
import { deserializeRank } from "../../storage/deserialization/deserializeRank";
import { SerializedCompendiumState, StorableCompendiumHeroState } from "../types";

export function deserializeCompendiumState(
    currentStoredState: SerializedCompendiumState | null,
    heroCode: HeroCode,
): StorableCompendiumHeroState {
    const storedHeroState = currentStoredState?.heroes?.[heroCode];

    const rank = deserializeRank(storedHeroState?.rank);

    return {
        rank,
    };
}
