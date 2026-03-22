import { Hero } from "../../../../../ui_data/heroes";
import { talentsBuilderStateStorage } from "../../../utils/talentsBuilderStateStorage/talentsBuilderStateStorage";

export function loadFromStorage(hero: Hero) {
    return talentsBuilderStateStorage.get(hero);
}
