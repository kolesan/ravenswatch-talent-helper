import { StorableCursedObjectsBuilderState } from "../../../types";
import { cursedObjectsBuilderStateStorage } from "../../../utils/cursedObjectsBuilderStateStorage/cursedObjectsBuilderStateStorage";

export function saveToStorage(stateToStore: StorableCursedObjectsBuilderState) {
    cursedObjectsBuilderStateStorage.set(stateToStore);
}
