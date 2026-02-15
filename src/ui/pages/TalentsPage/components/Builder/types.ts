import { Hero } from "../../../../../finalData/finalData";

import { BuilderState, BuilderStateReducerActionType } from "./hooks/useBuilderStateReducer/types";
import { useTalentsBuilder } from "./useTalentsBuilder";

export type TalentsBuilderState = {
    hero: Hero;
    rank: number;
    builderState: BuilderState;
}

export type TalentsBuilder = ReturnType<typeof useTalentsBuilder>;

export type TalentsBuilderActionType = 
    BuilderStateReducerActionType
    | "apply_rank";
