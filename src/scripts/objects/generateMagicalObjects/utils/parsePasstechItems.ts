import { items } from "data/passtechResponses/items/items";
import { PasstechItem } from "data/passtechResponses/types";
import { nameCleanup } from "scripts/utils/nameCleanup";
import { nameToCode } from "scripts/utils/nameToCode";
import { parsePasstechDescription } from "scripts/utils/parsePasstechDescription";

import {
    CursedParsedPasstechItem,
    LegendaryParsedPasstechItem,
    ParsedPasstechItem,
} from "../types";

import { isCursed } from "./isCursed";
import { isLegendary } from "./isLegendary";
import { parsePasstechItemType } from "./parsePasstechItemType";

export async function parsePasstechItems(): Promise<{
    legendary: LegendaryParsedPasstechItem[];
    cursed: CursedParsedPasstechItem[];
}> {
    const parsed = items.map(parseItem);
    return {
        legendary: parsed.filter(isLegendary),
        cursed: parsed.filter(isCursed),
    };
}

function parseItem(item: PasstechItem): ParsedPasstechItem {
    const name = nameCleanup(item.name);
    return {
        type: parsePasstechItemType(item.quality_name),
        code: nameToCode(name),
        name,
        description: parsePasstechDescription(item.description),
        iconUrl: item.icon,
    };
}
