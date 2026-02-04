import { Hero, HeroCode } from "../../../data/heroes";

import { parseSeparateIconColumnTable } from "./parseBeowulfTable/parseSeparateIconColumnTable";
import { parseCommonTable } from "./parseCommonTable";

const heroesWithSeparateIconColumnTables: HeroCode[] = [
    "beowulf",
    "snowqueen",
]

export function chooseParseer(hero: Hero) {
    if (heroesWithSeparateIconColumnTables.includes(hero.code)) {
        return parseSeparateIconColumnTable;
    }
    return parseCommonTable;
}
