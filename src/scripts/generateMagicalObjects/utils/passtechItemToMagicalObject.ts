import { MagicalObject } from "../../../data/objects/types";
import { ParsedPasstechItem } from "../types";

export function passtechItemToMagicalObject(
    passtech: ParsedPasstechItem
): MagicalObject {
    return {
        code: passtech.code,
        name: passtech.name,
        description: passtech.description,
    };
}
