import { Hero } from "../../../../../../finalData/finalData";
import { compendiumStateStorage } from "../../../utils/compendiumStateStorage/compendiumStateStorage";

export function loadFromStorage(hero: Hero) {
    return compendiumStateStorage.get(hero.code);
}
