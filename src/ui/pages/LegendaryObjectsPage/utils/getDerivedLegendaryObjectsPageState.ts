import { legendary } from "../../../../scrapedData/mergedItems/legendary";
import { MagicalObject } from "../../../../types";
import { DerivedLegendaryObjectsPageState, LegendaryObjectsPageState } from "../types";

export function getDerivedLegendaryObjectsPageState(
    state: LegendaryObjectsPageState
): DerivedLegendaryObjectsPageState {
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
