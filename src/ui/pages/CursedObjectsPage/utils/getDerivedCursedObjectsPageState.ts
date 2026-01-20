import { cursed } from "../../../../scrapedData/mergedItems/cursed";
import { MagicalObject } from "../../../../types";
import { CursedObjectsPageState, DerivedCursedObjectsPageState } from "../types";

export function getDerivedCursedObjectsPageState(
    state: CursedObjectsPageState
): DerivedCursedObjectsPageState {
    const {
        used,
        preferred,
    } = state;

    const unusedTalents = cursed
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
