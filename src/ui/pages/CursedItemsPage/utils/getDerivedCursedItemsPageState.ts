import { cursed } from "../../../../scrapedData/items/cursed";
import { DerivedCursedItemsPageState, Item, CursedItemsPageState } from "../types";

export function getDerivedCursedItemsPageState(
    state: CursedItemsPageState
): DerivedCursedItemsPageState {
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

function isNotIn(items: Item[]) {
    return function(item: Item) {
        return !items.find(it => it.code === item.code);
    }
}
