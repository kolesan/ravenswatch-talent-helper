export type BuilderState<T extends BuilderItem> = {
    used: T[];
    preferred: T[];
}

export type BuilderStateReducerAction<T extends BuilderItem> =
    | { type: "load_state", state: BuilderState<T> }
    | { type: "used_add_item", item: T }
    | { type: "used_remove_item", item: T }
    | { type: "used_move_item_to_preferred", item: T }
    | { type: "used_clear" }
    | { type: "preferred_add_item", item: T }
    | { type: "preferred_remove_item", item: T }
    | { type: "preferred_move_item_to_used", item: T }
    | { type: "preferred_clear" };

export type BuilderStateReducerActionType<T extends BuilderItem> = 
    BuilderStateReducerAction<T>["type"];

export type BuilderItem = {
    code: string;
    preferred?: boolean;
};
