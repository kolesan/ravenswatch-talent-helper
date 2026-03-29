import { HeroBase, HeroBaseCode } from "../../../types";

import { parseSeparateIconColumnTable } from "./parseBeowulfTable/parseSeparateIconColumnTable";
import { parseCommonTable } from "./parseCommonTable";

const heroesWithSeparateIconColumnTables: HeroBaseCode[] = [
    "beowulf",
    "snowqueen",
]

export function chooseParser(hero: HeroBase) {
    if (heroesWithSeparateIconColumnTables.includes(hero.code)) {
        return parseSeparateIconColumnTable;
    }
    return parseCommonTable;
}
