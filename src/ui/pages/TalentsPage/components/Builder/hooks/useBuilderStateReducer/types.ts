export type BuilderState<T extends BuilderItem> = {
    used: T[];
    preferred: T[];
}

export type BuilderStateReducerAction<T extends BuilderItem> =
    | { type: "load_state", state: BuilderState<T> }
    | { type: "clear_used" }
    | { type: "clear_preferred" }
    | { type: "used_to_preferred", item: T }
    | { type: "used_to_available", item: T }
    | { type: "preferred_to_used", item: T }
    | { type: "preferred_to_available", item: T }
    | { type: "available_to_preferred", item: T }
    | { type: "available_to_used", item: T };

export type BuilderStateReducerActionType<T extends BuilderItem> = 
    BuilderStateReducerAction<T>["type"];

export type BuilderItem = {
    code: string;
    preferred?: boolean;
};
