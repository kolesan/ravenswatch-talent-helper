import { isTruthy } from "../../../../../utils/isTruthy";
import { BuilderItem } from "../../../hooks/useBuilderStateReducer/types";
import { SerializedBuilderItem, SerializedBuilderState, StorableBuilderState } from "../types";

export function deserializeBuilderState<T extends BuilderItem>(
    currentStoredState: SerializedBuilderState | null,
    allItems: T[],
): StorableBuilderState<T> {
    if (!currentStoredState) {
        return { used: [], preferred: [] };
    }

    const normalizedState: Partial<SerializedBuilderState> = 
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
            .map(deserializeItem(allItems))
            .filter(isTruthy),
        preferred: normalizedPreferred
            .map(deserializeItem(allItems))
            .filter(isTruthy),
    };
}

function deserializeItem<T extends BuilderItem>(allItems: T[]) {
    return function(storedItem: SerializedBuilderItem): T | undefined {
        const object = allItems
            .find(it => it.code === storedItem.code);

        return object && {
            ...object,
            preferred: storedItem.preferred,
        }
    }
}
