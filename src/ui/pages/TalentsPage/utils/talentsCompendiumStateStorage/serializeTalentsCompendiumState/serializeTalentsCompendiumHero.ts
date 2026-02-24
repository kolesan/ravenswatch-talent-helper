import { SerializedTalentsCompendiumHeroState } from "../types";

type Params = {
    rank: number;
};

export function serializeTalentsCompendiumState({
    rank,
}: Params): SerializedTalentsCompendiumHeroState {
    return {
        rank,
    };
}
