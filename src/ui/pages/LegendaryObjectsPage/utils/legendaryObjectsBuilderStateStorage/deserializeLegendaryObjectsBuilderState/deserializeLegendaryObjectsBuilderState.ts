import { legendary } from "../../../../../../scrapedData/mergedItems/legendary";
import { MagicalObject, SerializedMagicalObject } from "../../../../../../types";
import { isTruthy } from "../../../../../utils/isTruthy";
import { StorableLegendaryObjectsBuilderState, SerializedLegendaryObjectsBuilderState } from "../../../types";
import { defaultLegendaryObjectsBuilderState } from "../../defaultLegendaryObjectsBuilderState";

export function deserializeLegendaryObjectsBuilderState(
    currentStoredState: SerializedLegendaryObjectsBuilderState | null,
): StorableLegendaryObjectsBuilderState {
    if (!currentStoredState) {
        return defaultLegendaryObjectsBuilderState;
    }

    const normalizedState: Partial<SerializedLegendaryObjectsBuilderState> = 
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
    return function(storedObject: SerializedMagicalObject): MagicalObject | undefined {
        const object = allObjects
            .find(it => it.code === storedObject.code);

        return object && {
            ...object,
            preferred: storedObject.preferred,
        }
    }
}
