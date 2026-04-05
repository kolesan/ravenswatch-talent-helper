import { Hero } from "ui/uiData/heroes/types";

import { talentsCompendiumStateStorage } from "TalentsPage/utils/talentsCompendiumStateStorage/talentsCompendiumStateStorage";
import { StorableTalentsCompendiumHeroState } from "TalentsPage/utils/talentsCompendiumStateStorage/types";

export function saveToStorage(hero: Hero, newState: StorableTalentsCompendiumHeroState) {
    talentsCompendiumStateStorage.set(hero.code, newState);
}
