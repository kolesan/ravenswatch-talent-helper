import { LegendaryItemsPageState } from "../../pages/LegendaryItemsPage/types";

import { baseLegendaryItemsPageStateStorage } from "./baseLegendaryItemsPageStateStorage";
import { deserializeLegendaryItemsPageState } from "./deserializeLegendaryItemsPageState/deserializeLegendaryItemsPageState";
import { serializeLegendaryItemsPageState } from "./serializeLegendaryItemsPageState/serializeLegendaryItemsPageState";

export const legendaryItemsPageStateStorage = {
    get(): LegendaryItemsPageState {
        return deserializeLegendaryItemsPageState(baseLegendaryItemsPageStateStorage.get());
    },
    set(state: LegendaryItemsPageState) {
        const newSerializedState = serializeLegendaryItemsPageState(state);

        baseLegendaryItemsPageStateStorage.set(newSerializedState);
    }
};
