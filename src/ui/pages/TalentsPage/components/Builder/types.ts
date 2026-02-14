import { BuilderStateReducerActionType } from "./hooks/useBuilderStateReducer/types";
import { useTalentsBuilder } from "./useTalentsBuilder";

export type TalentsBuilder = ReturnType<typeof useTalentsBuilder>;

export type TalentsBuilderActionType = 
    // Exclude<BuilderStateReducerActionType, "load_state">
    BuilderStateReducerActionType
    | "apply_rank";
