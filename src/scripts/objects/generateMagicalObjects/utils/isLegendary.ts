import { LegendaryParsedPasstechItem, ParsedPasstechItem } from "../types";

export function isLegendary(
    item: ParsedPasstechItem
): item is LegendaryParsedPasstechItem {
    return item.type === "legendary";
}
