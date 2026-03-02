import { Hero } from "../../../../../../finalData/finalData";
import { talentsBuilderStateStorage } from "../../../utils/talentsBuilderStateStorage/talentsBuilderStateStorage";

export function loadFromStorage(hero: Hero) {
    return talentsBuilderStateStorage.get(hero);
}
