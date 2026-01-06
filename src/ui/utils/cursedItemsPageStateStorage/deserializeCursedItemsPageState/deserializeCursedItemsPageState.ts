import { cursed } from "../../../../scrapedData/items/cursed";
import {
    Item,
    CursedItemsPageState,
    SerializedCursedItemsPageState,
} from "../../../pages/CursedItemsPage/types";
import { defaultCursedItemsPageState } from "../../../pages/CursedItemsPage/utils/defaultCursedItemsState";
import { isTruthy } from "../../isTruthy";

export function deserializeCursedItemsPageState(
    currentStoredState: SerializedCursedItemsPageState | null,
): CursedItemsPageState {
    if (!currentStoredState) {
        return defaultCursedItemsPageState;
    }

    const normalizedState: Partial<SerializedCursedItemsPageState> = 
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
            .map(deserializeItem(cursed))
            .filter(isTruthy),
        preferred: normalizedPreferred
            .map(deserializeItem(cursed))
            .filter(isTruthy),
    };
}

function deserializeItem(allItems: Item[]) {
    return function(storedItemCode: unknown): Item | undefined {
        return allItems.find(it => it.code === storedItemCode);
    }
}
