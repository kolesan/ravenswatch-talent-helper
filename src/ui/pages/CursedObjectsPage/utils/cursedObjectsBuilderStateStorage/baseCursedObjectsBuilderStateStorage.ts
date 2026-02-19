import { LocalStorage } from "../../../../core/LocalStorage";
import { SerializedCursedObjectsBuilderState } from "../../types";

const key = "rrh_objects_cursed";

export const baseCursedObjectsBuilderStateStorage = {
    get(): SerializedCursedObjectsBuilderState | null {
        return LocalStorage.get(key);
    },
    set(state: SerializedCursedObjectsBuilderState) {
        LocalStorage.set(key, state);
    }
};
