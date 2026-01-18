import { Hero } from "../../../finalData/finalData";
import { Talent } from "../../../scripts/extractTalents/types";

export type AppState = {
    hero: Hero;
    rank: number;
    talents: TalentsState;
}

export type TalentsState = {
    used: Talent[];
    preferred: Talent[];
}

export type LocalTalentsState = {
    available: Talent[];
    locked: Talent[];
}

export type SerializedAppState = {
    currentHeroCode: string;
    heroes: Record<string, SerializedHeroState>;
}

export type SerializedHeroState = {
    rank: number;
    talents: SerializedTalentsState;
}

export type SerializedTalentsState = {
    used: SerializedTalent[];
    preferred: SerializedTalent[];
}

export type SerializedTalent = {
    code: string;
    preferred?: boolean;
}

export type TalentWithLockedFlag = Talent & {
    locked?: boolean;
}
