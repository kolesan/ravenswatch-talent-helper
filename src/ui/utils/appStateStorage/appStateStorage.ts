import { HeroCode } from "../../../data/heroes";
import { AppState } from "../../pages/talentsPage/types";

import { baseAppStateStorage } from "./baseAppStateStorage";
import { deserializeAppState } from "./deserializeAppState/deserializeAppState";
import { serializeAppState } from "./serializeAppState/serializeAppState";

// TODO double check the serialization deserialization logic for safety and sense

export const appStateStorage = {
    getCurrentHero(): AppState {
        return deserializeAppState(baseAppStateStorage.get());
    },
    getHero(heroCode: HeroCode): AppState {
        return deserializeAppState(baseAppStateStorage.get(), heroCode);
    },
    set(state: AppState) {
        const currentStoredState = baseAppStateStorage.get();

        const newSerializedState = serializeAppState(state, currentStoredState);

        baseAppStateStorage.set(newSerializedState);
    }
}
