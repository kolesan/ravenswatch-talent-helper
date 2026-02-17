import { legendary } from "../../../../scrapedData/mergedItems/legendary";
import { MagicalObject } from "../../../../types";
import {
    DerivedLegendaryObjectsBuilderState,
    StorableLegendaryObjectsBuilderState,
} from "../types";

export function getDerivedLegendaryObjectsBuilderState(
    state: StorableLegendaryObjectsBuilderState
): DerivedLegendaryObjectsBuilderState {
    const {
        used,
        preferred,
    } = state;

    const unusedTalents = legendary
        .filter(isNotIn(used))
        .filter(isNotIn(preferred));

    return {
        available: unusedTalents
    };
}

function isNotIn(objects: MagicalObject[]) {
    return function(object: MagicalObject) {
        return !objects.find(it => it.code === object.code);
    }
}
