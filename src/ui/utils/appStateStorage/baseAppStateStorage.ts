import { LocalStorage } from "../../core/LocalStorage";
import { SerializedAppState } from "../../pages/TalentsPage/types";

const key = "ravenswatch-run-helper_state"

export const baseAppStateStorage = {
    get(): SerializedAppState | null {
        return LocalStorage.get(key);
    },
    set(state: SerializedAppState) {
        LocalStorage.set(key, state);
    }
}
