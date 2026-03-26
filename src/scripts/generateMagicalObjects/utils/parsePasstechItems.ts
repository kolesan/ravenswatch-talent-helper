import { items } from "../../../data/passtechResponses/items/items";
import { MagicalObjectType } from "../../../types";
import { descriptionKeyMaps } from "../../../utils/descriptionKeyMaps";
import { ParsedPasstechItem, PasstechItem } from "../types";

export async function parsePasstechItems(): Promise<{
    legendary: ParsedPasstechItem[];
    cursed: ParsedPasstechItem[];
}> {
    const parsed = items.map(parseItem);
    return {
        legendary: parsed.filter(it => it.type === "legendary"),
        cursed: parsed.filter(it => it.type === "cursed"),
    };
}

function parseItem(item: PasstechItem): ParsedPasstechItem {
    const name = item.name.replaceAll("’", "'");
    return {
        code: nameToCode(name),
        name,
        type: parseType(item.quality_name),
        description: parseDescription(item.description),
    };
}

function nameToCode(name: string) {
    return name.trim().replaceAll(" ", "_").toLowerCase();
}

function parseType(qualityName: PasstechItem["quality_name"]) {
    const map: Partial<Record<PasstechItem["quality_name"], MagicalObjectType>> = {
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
