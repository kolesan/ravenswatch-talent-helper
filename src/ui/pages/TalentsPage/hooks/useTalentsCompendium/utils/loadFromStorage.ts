import { Hero } from "../../../../../ui_data/heroes";
import { talentsCompendiumStateStorage } from "../../../utils/talentsCompendiumStateStorage/talentsCompendiumStateStorage";

export function loadFromStorage(hero: Hero) {
    return talentsCompendiumStateStorage.get(hero.code);
}
