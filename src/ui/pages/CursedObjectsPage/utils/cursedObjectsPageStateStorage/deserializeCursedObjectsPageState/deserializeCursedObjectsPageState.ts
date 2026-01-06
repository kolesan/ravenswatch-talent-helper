import { cursed } from "../../../../../../scrapedData/items/cursed";
import { MagicalObject } from "../../../../../../types";
import { isTruthy } from "../../../../../utils/isTruthy";
import { CursedObjectsPageState, SerializedCursedObjectsPageState } from "../../../types";
import { defaultCursedObjectsPageState } from "../../defaultCursedObjectPageState";

export function deserializeCursedObjectsPageState(
    currentStoredState: SerializedCursedObjectsPageState | null,
): CursedObjectsPageState {
    if (!currentStoredState) {
        return defaultCursedObjectsPageState;
    }

    const normalizedState: Partial<SerializedCursedObjectsPageState> = 
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
            .map(deserializeObject(cursed))
            .filter(isTruthy),
        preferred: normalizedPreferred
            .map(deserializeObject(cursed))
            .filter(isTruthy),
    };
}

function deserializeObject(allObjects: MagicalObject[]) {
    return function(storedObjectCode: unknown): MagicalObject | undefined {
        return allObjects.find(it => it.code === storedObjectCode);
    }
}
