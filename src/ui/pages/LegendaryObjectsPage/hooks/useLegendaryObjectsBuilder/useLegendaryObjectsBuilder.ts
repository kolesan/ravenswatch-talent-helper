import { legendary } from "../../../../../scrapedData/mergedItems/legendary";
import { useBuilder } from "../../../../components/Builder/useBuilder";

import { loadFromStorage } from "./utils/loadFromStorage";
import { saveToStorage } from "./utils/saveToStorage";

export function useLegendaryObjectsBuilder() {
    return useBuilder({
        getInitialState: loadFromStorage,
        onAction: saveToStorage,
        allItems: legendary,
    });
}
