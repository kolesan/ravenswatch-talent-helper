import { Hero } from "../../../../../uiData/heroes";
import { talentsBuilderStateStorage } from "../../../utils/talentsBuilderStateStorage/talentsBuilderStateStorage";
import { StorableTalentsBuilderHeroState } from "../../../utils/talentsBuilderStateStorage/types";

export function saveToStorage(hero: Hero, newState: StorableTalentsBuilderHeroState) {
    talentsBuilderStateStorage.set(hero.code, newState);
}
