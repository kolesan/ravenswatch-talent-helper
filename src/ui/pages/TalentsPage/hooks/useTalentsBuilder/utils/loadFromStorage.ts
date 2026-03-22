import { Hero } from "../../../../../uiData/types";
import { talentsBuilderStateStorage } from "../../../utils/talentsBuilderStateStorage/talentsBuilderStateStorage";

export function loadFromStorage(hero: Hero) {
    return talentsBuilderStateStorage.get(hero);
}
