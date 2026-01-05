import { legendary } from "../../../../scrapedData/items/legendary";
import { DerivedLegendaryItemsPageState, Item, LegendaryItemsPageState } from "../types";

export function getDerivedLegendaryItemsPageState(
    state: LegendaryItemsPageState
): DerivedLegendaryItemsPageState {
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

function isNotIn(items: Item[]) {
    return function(item: Item) {
        return !items.find(it => it.code === item.code);
    }
}
