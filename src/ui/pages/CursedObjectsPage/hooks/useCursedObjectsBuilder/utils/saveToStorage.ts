import { StorableLegendaryObjectsBuilderState } from "../../../types";
import { cursedObjectsBuilderStateStorage } from "../../../utils/cursedObjectsBuilderStateStorage/cursedObjectsBuilderStateStorage";
import { legendaryObjectsBuilderStateStorage } from "../../../utils/legendaryObjectsBuilderStateStorage/legendaryObjectsBuilderStateStorage";

export function saveToStorage(stateToStore: StorableLegendaryObjectsBuilderState) {
    cursedObjectsBuilderStateStorage.set(stateToStore);
}
