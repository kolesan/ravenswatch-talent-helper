import { MagicalObject } from "../../../../../../types";
import { LegendaryObjectsPageState, SerializedLegendaryObjectsPageState } from "../../../types";

export function serializeLegendaryObjectsPageState(
    state: LegendaryObjectsPageState, 
): SerializedLegendaryObjectsPageState {
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
