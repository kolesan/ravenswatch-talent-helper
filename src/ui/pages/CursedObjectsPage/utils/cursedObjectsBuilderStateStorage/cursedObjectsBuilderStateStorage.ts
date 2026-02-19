import { StorableCursedObjectsBuilderState } from "../../types";

import { baseCursedObjectsBuilderStateStorage } from "./baseCursedObjectsBuilderStateStorage";
import { deserializeCursedObjectsBuilderState } from "./deserializeCursedObjectsBuilderState/deserializeCursedObjectsBuilderState";
import { serializeCursedObjectsBuilderState } from "./serializeCursedObjectsBuilderState/serializeCursedObjectsBuilderState";

export const cursedObjectsBuilderStateStorage = {
    get(): StorableCursedObjectsBuilderState {
        const storedState = baseCursedObjectsBuilderStateStorage.get();

        return deserializeCursedObjectsBuilderState(storedState);
    },
    set(state: StorableCursedObjectsBuilderState) {
        const serializedState = serializeCursedObjectsBuilderState(state);

        baseCursedObjectsBuilderStateStorage.set(serializedState);
    }
};
