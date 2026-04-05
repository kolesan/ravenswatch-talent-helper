import { useBuilder } from "ui/components/Builder/useBuilder";
import { builderStateStorage } from "ui/components/Builder/utils/builderStateStorage/builderStateStorage";
import { legendary } from "ui/uiData/objects/legendary";

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
