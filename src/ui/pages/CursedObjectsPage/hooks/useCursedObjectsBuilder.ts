import { cursed } from "../../../../scrapedData/mergedItems/cursed";
import { useBuilder } from "../../../components/Builder/useBuilder";
import { builderStateStorage } from "../../../components/Builder/utils/builderStateStorage/builderStateStorage";

const storageKey = "rrh_objects_cursed";

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
