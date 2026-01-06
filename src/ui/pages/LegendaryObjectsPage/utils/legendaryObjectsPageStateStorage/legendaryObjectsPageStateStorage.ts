import { LegendaryObjectsPageState } from "../../types";

import { baseLegendaryObjectsPageStateStorage } from "./baseLegendaryObjectsPageStateStorage";
import { deserializeLegendaryObjectsPageState } from "./deserializeLegendaryObjectsPageState/deserializeLegendaryObjectsPageState";
import { serializeLegendaryObjectsPageState } from "./serializeLegendaryObjectsPageState/serializeLegendaryItemsPageState";

export const legendaryObjectsPageStateStorage = {
    get(): LegendaryObjectsPageState {
        return deserializeLegendaryObjectsPageState(baseLegendaryObjectsPageStateStorage.get());
    },
    set(state: LegendaryObjectsPageState) {
        const newSerializedState = serializeLegendaryObjectsPageState(state);

        baseLegendaryObjectsPageStateStorage.set(newSerializedState);
    }
};
