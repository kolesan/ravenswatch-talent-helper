import { Hero } from "ui/uiData/heroes/types";

import { talentsBuilderStateStorage } from "TalentsPage/utils/talentsBuilderStateStorage/talentsBuilderStateStorage";

export function loadFromStorage(hero: Hero) {
    return talentsBuilderStateStorage.get(hero);
}
