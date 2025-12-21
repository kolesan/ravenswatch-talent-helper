import { Hero } from "../../../data/heroes";
import { parseBeowulfTable } from "./parseBeowulfTable/parseBeowulfTable";
import { parseCommonTable } from "./parseCommonTable";

export function chooseParseer(hero: Hero) {
    if (hero.name === "Beowulf") {
        return parseBeowulfTable;
    }
    return parseCommonTable;
}