import { BuilderItem } from "../../hooks/useBuilderStateReducer/types";

import { baseBuilderStateStorage } from "./baseBuilderStateStorage";
import { deserializeBuilderState } from "./deserializeBuilderState/deserializeBuilderState";
import { serializeBuilderState } from "./serializeBuilderState/serializeBuilderState";
import { StorableBuilderState } from "./types";

export const builderStateStorage = {
    get<T extends BuilderItem>(
        key: string, 
        allItems: T[]
    ): StorableBuilderState<T> {
        const storedState = baseBuilderStateStorage.get(key);

        return deserializeBuilderState(storedState, allItems);
    },
    set(
        key: string, 
        state: StorableBuilderState<BuilderItem>
    ) {
        const serializedState = serializeBuilderState(state);

        baseBuilderStateStorage.set(key, serializedState);
    }
};
