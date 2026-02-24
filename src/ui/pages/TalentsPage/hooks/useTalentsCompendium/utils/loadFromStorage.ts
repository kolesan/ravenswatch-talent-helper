import { Hero } from "../../../../../../finalData/finalData";
import { talentsCompendiumStateStorage } from "../../../utils/talentsCompendiumStateStorage/talentsCompendiumStateStorage";

export function loadFromStorage(hero: Hero) {
    return talentsCompendiumStateStorage.get(hero.code);
}
