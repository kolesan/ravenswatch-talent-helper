import { Hero } from "../../../../../../finalData/finalData";
import { SerializedHeroes, StorableHeroState } from "../../../types";

import { deserializeBuilderState } from "./utils/deserializeBuilderState";
import { deserializeRank } from "./utils/deserializeRank";

export function deserializeHeroState(
    currentStoredState: SerializedHeroes | null,
    hero: Hero,
): StorableHeroState {
    const storedHeroState = currentStoredState?.heroes?.[hero.code];

    const rank = deserializeRank(storedHeroState?.rank);
    const builderState = deserializeBuilderState(hero.talents, storedHeroState?.builderState);

    return {
        rank,
        builderState,
    };
}
