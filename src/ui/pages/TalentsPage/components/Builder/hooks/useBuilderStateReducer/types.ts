import { Talent } from "../../../../../../../scripts/extractTalents/types";

export type BuilderState = {
    used: Talent[];
    preferred: Talent[];
}

export type BuilderStateReducerAction =
    | { type: "load_state", state: BuilderState }
    | { type: "clear_used" }
    | { type: "clear_preferred" }
    | { type: "used_to_preferred", talent: Talent }
    | { type: "used_to_available", talent: Talent }
    | { type: "preferred_to_used", talent: Talent }
    | { type: "preferred_to_available", talent: Talent }
    | { type: "available_to_preferred", talent: Talent }
    | { type: "available_to_used", talent: Talent };

export type BuilderStateReducerActionType = BuilderStateReducerAction["type"];
