import { LocalStorage } from "../../core/LocalStorage";
import { SerializedCursedItemsPageState } from "../../pages/CursedItemsPage/types";

const key = "ravenswatch-run-helper_cursed-items-page_state"

export const baseCursedItemsPageStateStorage = {
    get(): SerializedCursedItemsPageState | null {
        return LocalStorage.get(key);
    },
    set(state: SerializedCursedItemsPageState) {
        LocalStorage.set(key, state);
    }
};
