import { useBuilder } from "ui/components/Builder/useBuilder";
import { builderStateStorage } from "ui/components/Builder/utils/builderStateStorage/builderStateStorage";
import { cursed } from "ui/uiData/objects/cursed";

export const storageKey = "rrh_objects_cursed";

export function useCursedObjectsBuilder() {
    return useBuilder({
        getInitialState: () => {
            return builderStateStorage.get(storageKey, cursed);
        },
        onAction: newState => {
            builderStateStorage.set(storageKey, newState);
        },
        allItems: cursed,
    });
}
