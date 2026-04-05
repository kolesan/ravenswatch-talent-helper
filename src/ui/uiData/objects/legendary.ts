import { legendary as legendaryRaw } from "data/objects/legendary";

import { toUiMagicalObject } from "./utils/toUiMagicalObject";

export const legendary = legendaryRaw.map(toUiMagicalObject);
