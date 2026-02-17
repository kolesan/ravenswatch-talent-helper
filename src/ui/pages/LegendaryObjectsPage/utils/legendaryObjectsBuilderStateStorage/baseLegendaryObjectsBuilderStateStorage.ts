import { LocalStorage } from "../../../../core/LocalStorage";
import { SerializedLegendaryObjectsBuilderState } from "../../types";

const key = "rrh_objects_legendary";

export const baseLegendaryObjectsBuilderStateStorage = {
    get(): SerializedLegendaryObjectsBuilderState | null {
        return LocalStorage.get(key);
    },
    set(state: SerializedLegendaryObjectsBuilderState) {
        LocalStorage.set(key, state);
    }
};
