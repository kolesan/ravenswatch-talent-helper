import { cursedObjectsBuilderStateStorage } from "../../../utils/cursedObjectsBuilderStateStorage/cursedObjectsBuilderStateStorage";

export function loadFromStorage() {
    return cursedObjectsBuilderStateStorage.get();
}
