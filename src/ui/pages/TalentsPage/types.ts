import { Hero } from "../../../finalData/finalData";
import { Talent } from "../../../scripts/extractTalents/types";

import { BuilderState } from "./components/Builder/types";
import { TalentsPageView } from "./talentsPageViews";

export type LocalTalentsState = {
    available: Talent[];
    locked: Talent[];
}

export type StorableTalentsPageUrlParamsState = {
    hero: Hero;
    view: TalentsPageView;
}
export type SerializedTalentsPageUrlParamsState = {
    hero: string;
    view: string;
}

export type StorableHeroState = {
    rank: number;
    builderState: BuilderState;
}

export type SerializedHeroes = {
    heroes: Record<string, SerializedHero>;
}

export type SerializedHero = {
    rank: number;
    builderState: SerializedBuilderState;
}

export type SerializedBuilderState = {
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
