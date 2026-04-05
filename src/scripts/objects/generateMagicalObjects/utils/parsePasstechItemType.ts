import { PasstechItem } from "data/passtechResponses/types";

import { ParsedPasstechItemType } from "../types";

export function parsePasstechItemType(qualityName: PasstechItem["quality_name"]) {
    const map: Partial<Record<PasstechItem["quality_name"], ParsedPasstechItemType>> = {
        "Legendary": "legendary",
        "Cursed": "cursed",
    };
    return map[qualityName];
}
