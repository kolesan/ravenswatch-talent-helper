import { CursedObjectsPageState } from "../../types";

import { baseCursedObjectsPageStateStorage } from "./baseCursedObjectsPageStateStorage";
import { deserializeCursedObjectsPageState } from "./deserializeCursedObjectsPageState/deserializeCursedObjectsPageState";
import { serializeCursedObjectsPageState } from "./serializeCursedObjectsPageState/serializeCursedObjectsPageState";

export const cursedObjectsPageStateStorage = {
    get(): CursedObjectsPageState {
        return deserializeCursedObjectsPageState(baseCursedObjectsPageStateStorage.get());
    },
    set(state: CursedObjectsPageState) {
        const newSerializedState = serializeCursedObjectsPageState(state);

        baseCursedObjectsPageStateStorage.set(newSerializedState);
    }
};
