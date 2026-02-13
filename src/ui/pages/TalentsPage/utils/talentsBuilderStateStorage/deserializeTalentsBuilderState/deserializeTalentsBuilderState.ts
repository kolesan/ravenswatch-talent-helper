import { Hero } from "../../../../../../finalData/finalData";
import { SerializedHeroes, StorableHeroState } from "../../../types";
import { deserializeRank } from "../../storage/deserialization/deserializeRank";

import { deserializeBuilderState } from "./utils/deserializeBuilderState";

export function deserializeTalentsBuilderState(
    currentStoredState: SerializedHeroes | null,
    hero: Hero,
): StorableHeroState {
    const storedHeroState = currentStoredState?.heroes?.[hero.code];

    const rank = deserializeRank(
        storedHeroState?.rank
    );
    const builderState = deserializeBuilderState(
        hero.talents, 
        storedHeroState?.builderState
    );

    return {
        rank,
        builderState,
    };
}
