import { MagicalObject } from "../../../data/objects/types";
import { CursedParsedPasstechItem, LegendaryParsedPasstechItem } from "../types";

export function passtechItemToMagicalObject(
    passtech: LegendaryParsedPasstechItem | CursedParsedPasstechItem
): MagicalObject {
    return {
        type: passtech.type,
        code: passtech.code,
        name: passtech.name,
        description: passtech.description,
    };
}
