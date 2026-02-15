import { LocalStorage } from "../../../../core/LocalStorage";
import { SerializedLegendaryObjectsPageState } from "../../types";

const key = "rrh_objects_legendary";

export const baseLegendaryObjectsPageStateStorage = {
    get(): SerializedLegendaryObjectsPageState | null {
        return LocalStorage.get(key);
    },
    set(state: SerializedLegendaryObjectsPageState) {
        LocalStorage.set(key, state);
    }
};
