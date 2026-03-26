import { items } from "../../../data/passtechResponses/items/items";
import { descriptionKeyMaps } from "../../../utils/descriptionKeyMaps";
import {
    CursedParsedPasstechItem,
    LegendaryParsedPasstechItem,
    ParsedPasstechItem,
    ParsedPasstechItemType,
    PasstechItem,
} from "../types";

import { isCursed } from "./isCursed";
import { isLegendary } from "./isLegendary";

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
    const name = item.name.replaceAll("’", "'");
    return {
        type: parseType(item.quality_name),
        code: nameToCode(name),
        name,
        description: parseDescription(item.description),
    };
}

function nameToCode(name: string) {
    return name.trim().replaceAll(" ", "_").toLowerCase();
}

function parseType(qualityName: PasstechItem["quality_name"]) {
    const map: Partial<Record<PasstechItem["quality_name"], ParsedPasstechItemType>> = {
        "Legendary": "legendary",
        "Cursed": "cursed",
    };
    return map[qualityName];
}

function parseDescription(description: string) {
    const initialCleanup = description
        .split("• ")
        .filter(Boolean)
        .map(it => it.replaceAll(/ \(currently: .*?\)/g, ""))
        .map(it => it.replaceAll("\n", ""))

    return initialCleanup
        .map(descriptionKeyMaps.passtechToMyTag.apply);
}
