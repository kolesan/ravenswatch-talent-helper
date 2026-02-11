import { StorableTalentsPageUrlParamsState } from "../../types";

import { baseTalentsPageUrlParamsStorage } from "./baseTalentsPageUrlParamsStorage";
import { deserializeTalentsPageUrlParams } from "./deserializeTalentsPageUrlParams/deserializeTalentsPageUrlParams";
import { serializeTalentsPageUrlParams } from "./serializeTalentsPageUrlParams/serializeTalentsPageUrlParams";

export const talentsPageUrlParamsStorage = {
    get(): StorableTalentsPageUrlParamsState {
        const currentStoredState = baseTalentsPageUrlParamsStorage.get();

        return deserializeTalentsPageUrlParams(currentStoredState);
    },
    set(stateToStore: StorableTalentsPageUrlParamsState) {
        const serializedState = serializeTalentsPageUrlParams(stateToStore);

        baseTalentsPageUrlParamsStorage.set(serializedState);
    }
}
