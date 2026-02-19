import { legendary } from "../../../../scrapedData/mergedItems/legendary";
import { useBuilder } from "../../../components/Builder/useBuilder";
import { builderStateStorage } from "../../../components/Builder/utils/builderStateStorage/builderStateStorage";

const storageKey = "rrh_objects_legendary";

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
