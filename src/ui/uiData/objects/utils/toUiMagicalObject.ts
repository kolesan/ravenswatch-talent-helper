import { MagicalObject as MagicalObjectRaw } from "data/objects/types";

import { MagicalObject } from "../types";

export function toUiMagicalObject(
    object: MagicalObjectRaw
): MagicalObject {
    return {
        type: object.type,
        code: object.code,
        name: object.name,
        description: object.description,
    }
}
