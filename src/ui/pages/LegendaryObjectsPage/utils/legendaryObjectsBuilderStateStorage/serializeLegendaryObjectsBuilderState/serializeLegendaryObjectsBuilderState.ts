import { MagicalObject } from "../../../../../../types";
import { StorableLegendaryObjectsBuilderState, SerializedLegendaryObjectsBuilderState } from "../../../types";

export function serializeLegendaryObjectsBuilderState(
    state: StorableLegendaryObjectsBuilderState, 
): SerializedLegendaryObjectsBuilderState {
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
