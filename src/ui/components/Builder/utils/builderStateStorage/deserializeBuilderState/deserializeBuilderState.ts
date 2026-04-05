import { BuilderItem } from "ui/components/Builder/hooks/useBuilderStateReducer/types";
import { isTruthy } from "ui/utils/isTruthy";

import { SerializedBuilderItem, SerializedBuilderState, StorableBuilderState } from "../types";

export function deserializeBuilderState<T extends BuilderItem>(
    storedState: SerializedBuilderState | null,
    allItems: T[],
): StorableBuilderState<T> {
    if (!storedState) {
        return { used: [], preferred: [] };
    }

    const normalizedState: Partial<SerializedBuilderState> = 
        typeof storedState === "object"
            ? storedState || {} // additional check for null
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
