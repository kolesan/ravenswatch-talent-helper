import { cursed } from "../../../../../scrapedData/mergedItems/cursed";
import { useBuilder } from "../../../../components/Builder/useBuilder";

import { loadFromStorage } from "./utils/loadFromStorage";
import { saveToStorage } from "./utils/saveToStorage";

export function useCursedObjectsBuilder() {
    return useBuilder({
        getInitialState: loadFromStorage,
        onAction: saveToStorage,
        allItems: cursed,
    });
}
