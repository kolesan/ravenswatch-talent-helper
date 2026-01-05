import { legendary } from "../../../../scrapedData/items/legendary";
import {
    Item,
    LegendaryItemsPageState,
    SerializedLegendaryItemsPageState,
} from "../../../pages/LegendaryItemsPage/types";
import { defaultLegendaryItemsPageState } from "../../../pages/LegendaryItemsPage/utils/defaultLegendaryItemsState";
import { isTruthy } from "../../isTruthy";

export function deserializeLegendaryItemsPageState(
    currentStoredState: SerializedLegendaryItemsPageState | null,
): LegendaryItemsPageState {
    if (!currentStoredState) {
        return defaultLegendaryItemsPageState;
    }

    const normalizedState: Partial<SerializedLegendaryItemsPageState> = 
        typeof currentStoredState === "object"
            ? currentStoredState || {} // additional check for null
            : {};

    const storedUsed = normalizedState.used;
    const storedPreferred = normalizedState.preferred;

    const normalizedUsed = Array.isArray(storedUsed)
        ? storedUsed
        : [];
    const normalizedPreferred = Array.isArray(storedPreferred)
        ? storedPreferred
        : [];

    return {
        used: normalizedUsed
            .map(deserializeItem(legendary))
            .filter(isTruthy),
        preferred: normalizedPreferred
            .map(deserializeItem(legendary))
            .filter(isTruthy),
    };
}

function deserializeItem(allItems: Item[]) {
    return function(storedItemCode: unknown): Item | undefined {
        return allItems.find(it => it.code === storedItemCode);
    }
}
