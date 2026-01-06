import { LocalStorage } from "../../../../core/LocalStorage";
import { SerializedLegendaryObjectsPageState } from "../../types";

const key = "ravenswatch-run-helper_legendary-objects-page_state"

export const baseLegendaryObjectsPageStateStorage = {
    get(): SerializedLegendaryObjectsPageState | null {
        return LocalStorage.get(key);
    },
    set(state: SerializedLegendaryObjectsPageState) {
        LocalStorage.set(key, state);
    }
};
