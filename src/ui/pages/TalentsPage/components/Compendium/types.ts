import { useTalentsCompendium } from "./useTalentsCompendium";

export type TalentsCompendiumState = {
    rank: number;
}

export type TalentsCompendium = ReturnType<typeof useTalentsCompendium>;

export type TalentsCompendiumActionType = 
    | "load_state"
    | "apply_rank";
