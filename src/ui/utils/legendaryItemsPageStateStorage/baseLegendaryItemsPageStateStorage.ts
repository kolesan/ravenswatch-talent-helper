import { LocalStorage } from "../../core/LocalStorage";
import { SerializedLegendaryItemsPageState } from "../../pages/LegendaryItemsPage/types";

const key = "ravenswatch-run-helper_legendary-items-page_state"

export const baseLegendaryItemsPageStateStorage = {
    get(): SerializedLegendaryItemsPageState | null {
        return LocalStorage.get(key);
    },
    set(state: SerializedLegendaryItemsPageState) {
        LocalStorage.set(key, state);
    }
};
