import { HeroCode } from "../../../data/heroes";
import { Talent } from "../../../scripts/extractTalents/types";

import { BuilderState } from "./components/Builder/types";
import { TalentsPageView } from "./talentsPageViews";

export type TalentsState = {
    used: Talent[];
    preferred: Talent[];
}

export type LocalTalentsState = {
    available: Talent[];
    locked: Talent[];
}

export type StorableTalentsPageState = {
    heroCode: HeroCode;
    view: TalentsPageView;
    rank: number;
    builderState: BuilderState;
}

export type SerializedTalentsPageState = {
    currentHeroCode: string;
    currentView: string;
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
