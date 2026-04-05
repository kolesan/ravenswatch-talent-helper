import { Hero } from "ui/uiData/heroes/types";

import { talentsCompendiumStateStorage } from "TalentsPage/utils/talentsCompendiumStateStorage/talentsCompendiumStateStorage";

export function loadFromStorage(hero: Hero) {
    return talentsCompendiumStateStorage.get(hero.code);
}
