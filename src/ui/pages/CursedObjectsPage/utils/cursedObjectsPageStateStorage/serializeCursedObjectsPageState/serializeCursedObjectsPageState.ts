import { MagicalObject } from "../../../../../../types";
import { CursedObjectsPageState, SerializedCursedObjectsPageState } from "../../../types";

export function serializeCursedObjectsPageState(
    state: CursedObjectsPageState, 
): SerializedCursedObjectsPageState {
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
