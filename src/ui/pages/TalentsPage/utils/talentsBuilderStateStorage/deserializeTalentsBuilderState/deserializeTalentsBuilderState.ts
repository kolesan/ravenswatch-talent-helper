import { Hero } from "../../../../../../finalData/finalData";
import { deserializeRank } from "../../storage/deserialization/deserializeRank";
import { SerializedHeroState, StorableHeroState } from "../types";

import { deserializeBuilderState } from "./utils/deserializeBuilderState";

export function deserializeTalentsBuilderState(
    currentStoredState: SerializedHeroState | null,
    hero: Hero,
): StorableHeroState {
    const rank = deserializeRank(
        currentStoredState?.rank
    );
    const builderState = deserializeBuilderState(
        hero.talents, 
        currentStoredState?.builderState
    );

    return {
        rank,
        builderState,
    };
}
