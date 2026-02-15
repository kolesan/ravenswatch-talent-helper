import { Hero } from "../../../../../../finalData/finalData";
import { talentsBuilderStateStorage } from "../../../utils/talentsBuilderStateStorage/talentsBuilderStateStorage";
import { StorableHeroState } from "../../../utils/talentsBuilderStateStorage/types";

export function saveToStorage(hero: Hero, newState: StorableHeroState) {
    talentsBuilderStateStorage.set(hero.code, {
        rank: newState.rank,
        builderState: newState.builderState,
    });
}
