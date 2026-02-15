import { BuilderState } from "../../components/Builder/hooks/useBuilderStateReducer/types";

export type StorableHeroState = {
    rank: number;
    builderState: BuilderState;
}

export type SerializedHeroState = {
    rank: number;
    builderState: SerializedBuilderState;
}

export type SerializedBuilderState = {
    used: SerializedTalentState[];
    preferred: SerializedTalentState[];
}

export type SerializedTalentState = {
    code: string;
    preferred?: boolean;
}
