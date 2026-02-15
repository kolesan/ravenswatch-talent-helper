import { SerializedCompendiumHeroState } from "../types";

type Params = {
    rank: number;
};

export function serializeCompendiumState({
    rank,
}: Params): SerializedCompendiumHeroState {
    return {
        rank,
    };
}
