import { LocalStorage } from "../../../../core/LocalStorage";
import { SerializedCursedObjectsPageState } from "../../types";

const key = "ravenswatch-run-helper_cursed-objects-page_state"

export const baseCursedObjectsPageStateStorage = {
    get(): SerializedCursedObjectsPageState | null {
        return LocalStorage.get(key);
    },
    set(state: SerializedCursedObjectsPageState) {
        LocalStorage.set(key, state);
    }
};
