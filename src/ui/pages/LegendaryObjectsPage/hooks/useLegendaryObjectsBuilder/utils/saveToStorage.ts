import { StorableLegendaryObjectsBuilderState } from "../../../types";
import { legendaryObjectsBuilderStateStorage } from "../../../utils/legendaryObjectsBuilderStateStorage/legendaryObjectsBuilderStateStorage";

export function saveToStorage(stateToStore: StorableLegendaryObjectsBuilderState) {
    legendaryObjectsBuilderStateStorage.set(stateToStore);
}
