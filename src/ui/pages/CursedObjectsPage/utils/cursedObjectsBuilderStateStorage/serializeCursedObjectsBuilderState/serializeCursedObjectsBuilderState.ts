import { MagicalObject } from "../../../../../../types";
import { StorableCursedObjectsBuilderState, SerializedCursedObjectsBuilderState } from "../../../types";

export function serializeCursedObjectsBuilderState(
    state: StorableCursedObjectsBuilderState, 
): SerializedCursedObjectsBuilderState {
    return {
        used: state.used.map(serializeObject),
        preferred: state.preferred.map(serializeObject),
    }
}

function serializeObject(object: MagicalObject) {
    return {
        code: object.code,
        preferred: object.preferred,
    }
}
