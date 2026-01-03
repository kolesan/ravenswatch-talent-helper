import { Hero } from "../../../finalData/finalData";
import { Talent } from "../../../scripts/extractTalents/types";

export type AppState = {
    hero: Hero;
    rank: number;
    talents: TalentsState;
}

type TalentsState = {
    used: Talent[];
    preferred: Talent[];
}

export type FullAppState = AppState & {
    talents: FullTalentsState;
}

type FullTalentsState = TalentsState & LocalTalentsState;

export type LocalTalentsState = {
    available: Talent[];
    locked: Talent[];
}
