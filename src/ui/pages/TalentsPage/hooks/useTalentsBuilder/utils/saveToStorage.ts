import { Hero } from "ui/uiData/heroes/types";

import { talentsBuilderStateStorage } from "TalentsPage/utils/talentsBuilderStateStorage/talentsBuilderStateStorage";
import { StorableTalentsBuilderHeroState } from "TalentsPage/utils/talentsBuilderStateStorage/types";

export function saveToStorage(hero: Hero, newState: StorableTalentsBuilderHeroState) {
    talentsBuilderStateStorage.set(hero.code, newState);
}
