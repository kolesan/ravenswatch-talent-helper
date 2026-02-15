import { Hero } from "../../../../../../finalData/finalData";
import { StorableHeroState } from "../../../types";
import { talentsBuilderStateStorage } from "../../../utils/talentsBuilderStateStorage/talentsBuilderStateStorage";

export function saveToStorage(hero: Hero, newState: StorableHeroState) {
    talentsBuilderStateStorage.set(hero.code, {
        rank: newState.rank,
        builderState: newState.builderState,
    });
}
