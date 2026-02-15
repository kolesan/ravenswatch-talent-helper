import { Hero } from "../../../../../finalData/finalData";

import { useTalentsCompendium } from "./useTalentsCompendium";

export type TalentsCompendiumState = {
    hero: Hero;
    rank: number;
}

export type TalentsCompendium = ReturnType<typeof useTalentsCompendium>;

export type TalentsCompendiumActionType = 
    | "load_state"
    | "apply_rank";
