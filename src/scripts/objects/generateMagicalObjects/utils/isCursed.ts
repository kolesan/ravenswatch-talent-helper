import { CursedParsedPasstechItem, ParsedPasstechItem } from "../types";

export function isCursed(
    item: ParsedPasstechItem
): item is CursedParsedPasstechItem {
    return item.type === "cursed";
}
