import { Hero } from "../../../../../uiData/types";
import { talentsCompendiumStateStorage } from "../../../utils/talentsCompendiumStateStorage/talentsCompendiumStateStorage";

export function loadFromStorage(hero: Hero) {
    return talentsCompendiumStateStorage.get(hero.code);
}
