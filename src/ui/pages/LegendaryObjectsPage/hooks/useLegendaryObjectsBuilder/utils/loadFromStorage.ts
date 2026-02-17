import { legendaryObjectsBuilderStateStorage } from "../../../utils/legendaryObjectsBuilderStateStorage/legendaryObjectsBuilderStateStorage";

export function loadFromStorage() {
    return legendaryObjectsBuilderStateStorage.get();
}
