import { SerializedCompendiumHeroState } from "../../types";

type Params = {
    rank: number;
};

export function serializeCompendiumHero({
    rank,
}: Params): SerializedCompendiumHeroState {
    return {
        rank,
    };
}
