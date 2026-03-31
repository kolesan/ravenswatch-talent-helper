import { useBuilder } from "../../../components/Builder/useBuilder";
import { builderStateStorage } from "../../../components/Builder/utils/builderStateStorage/builderStateStorage";
import { legendary } from "../../../uiData/objects/legendary";

export const storageKey = "rrh_objects_legendary";

export function useLegendaryObjectsBuilder() {
    return useBuilder({
        getInitialState: () => {
            return builderStateStorage.get(storageKey, legendary);
        },
        onAction: newState => {
            builderStateStorage.set(storageKey, newState);
        },
        allItems: legendary,
    });
}
