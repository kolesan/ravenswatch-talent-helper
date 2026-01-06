import { CursedItemsPageState } from "../../pages/CursedItemsPage/types";

import { baseCursedItemsPageStateStorage } from "./baseCursedItemsPageStateStorage";
import { deserializeCursedItemsPageState } from "./deserializeCursedItemsPageState/deserializeCursedItemsPageState";
import { serializeCursedItemsPageState } from "./serializeCursedItemsPageState/serializeCursedItemsPageState";

export const cursedItemsPageStateStorage = {
    get(): CursedItemsPageState {
        return deserializeCursedItemsPageState(baseCursedItemsPageStateStorage.get());
    },
    set(state: CursedItemsPageState) {
        const newSerializedState = serializeCursedItemsPageState(state);

        baseCursedItemsPageStateStorage.set(newSerializedState);
    }
};
