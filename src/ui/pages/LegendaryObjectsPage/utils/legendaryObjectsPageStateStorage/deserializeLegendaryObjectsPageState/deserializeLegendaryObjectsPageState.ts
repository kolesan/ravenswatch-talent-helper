import { legendary } from "../../../../../../scrapedData/items/legendary";
import { MagicalObject } from "../../../../../../types";
import { isTruthy } from "../../../../../utils/isTruthy";
import { LegendaryObjectsPageState, SerializedLegendaryObjectsPageState } from "../../../types";
import { defaultLegendaryObjectsPageState } from "../../defaultLegendaryItemsState";

export function deserializeLegendaryObjectsPageState(
    currentStoredState: SerializedLegendaryObjectsPageState | null,
): LegendaryObjectsPageState {
    if (!currentStoredState) {
        return defaultLegendaryObjectsPageState;
    }

    const normalizedState: Partial<SerializedLegendaryObjectsPageState> = 
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
            .map(deserializeObject(legendary))
            .filter(isTruthy),
        preferred: normalizedPreferred
            .map(deserializeObject(legendary))
            .filter(isTruthy),
    };
}

function deserializeObject(allObjects: MagicalObject[]) {
    return function(storedObjectCode: unknown): MagicalObject | undefined {
        return allObjects.find(it => it.code === storedObjectCode);
    }
}
