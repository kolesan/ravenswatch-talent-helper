import { cursed as cursedRaw } from "../../../data/objects/cursed";

import { toUiMagicalObject } from "./utils/toUiMagicalObject";

export const cursed = cursedRaw.map(toUiMagicalObject);
