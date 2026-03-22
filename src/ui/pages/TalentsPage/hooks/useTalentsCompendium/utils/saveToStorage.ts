import { Hero } from "../../../../../uiData/heroes";
import { talentsCompendiumStateStorage } from "../../../utils/talentsCompendiumStateStorage/talentsCompendiumStateStorage";
import { StorableTalentsCompendiumHeroState } from "../../../utils/talentsCompendiumStateStorage/types";

export function saveToStorage(hero: Hero, newState: StorableTalentsCompendiumHeroState) {
    talentsCompendiumStateStorage.set(hero.code, newState);
}
