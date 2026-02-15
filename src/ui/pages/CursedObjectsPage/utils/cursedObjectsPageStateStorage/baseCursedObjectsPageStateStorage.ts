import { LocalStorage } from "../../../../core/LocalStorage";
import { SerializedCursedObjectsPageState } from "../../types";

const key = "rrh_objects_cursed";

export const baseCursedObjectsPageStateStorage = {
    get(): SerializedCursedObjectsPageState | null {
        return LocalStorage.get(key);
    },
    set(state: SerializedCursedObjectsPageState) {
        LocalStorage.set(key, state);
    }
};
