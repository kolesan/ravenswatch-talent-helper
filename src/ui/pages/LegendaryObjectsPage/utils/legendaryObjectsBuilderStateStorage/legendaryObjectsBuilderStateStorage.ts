import { StorableLegendaryObjectsBuilderState } from "../../types";

import { baseLegendaryObjectsBuilderStateStorage } from "./baseLegendaryObjectsBuilderStateStorage";
import { deserializeLegendaryObjectsBuilderState } from "./deserializeLegendaryObjectsBuilderState/deserializeLegendaryObjectsBuilderState";
import { serializeLegendaryObjectsBuilderState } from "./serializeLegendaryObjectsBuilderState/serializeLegendaryObjectsBuilderState";

export const legendaryObjectsBuilderStateStorage = {
    get(): StorableLegendaryObjectsBuilderState {
        return deserializeLegendaryObjectsBuilderState(baseLegendaryObjectsBuilderStateStorage.get());
    },
    set(stateToStore: StorableLegendaryObjectsBuilderState) {
        const serializedState = serializeLegendaryObjectsBuilderState(stateToStore);

        baseLegendaryObjectsBuilderStateStorage.set(serializedState);
    }
};
