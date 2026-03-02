import { useMemo, useReducer } from "preact/hooks";

import { preferredAddItem } from "./actions/preferredAddItem";
import { usedAddItem } from "./actions/usedAddItem";
import { preferredClear } from "./actions/preferredClear";
import { usedClear } from "./actions/usedClear";
import { preferredRemoveItem } from "./actions/preferredRemoveItem";
import { preferredMoveItemToUsed } from "./actions/preferredMoveItemToUsed";
import { usedRemoveItem } from "./actions/usedRemoveItem";
import { usedMoveItemToPreferred } from "./actions/usedMoveItemToPreferred";
import {
    BuilderItem,
    BuilderState,
    BuilderStateReducerAction,
    BuilderStateReducerActionType,
} from "./types";

type Params<T extends BuilderItem> = {
    getInitialState: () => BuilderState<T>;
    onAction: (
        newState: BuilderState<T>, 
        actionType: BuilderStateReducerActionType<T>
    ) => void;
}

export function useBuilderStateReducer<T extends BuilderItem>({
    getInitialState,
    onAction,
}: Params<T>) {
    const initialState = useMemo(() => {
        return getInitialState();
    }, []);

    return useReducer<BuilderState<T>, BuilderStateReducerAction<T>>((state, action) => {
        // handleNewState
        function hns(newState: BuilderState<T>): BuilderState<T> {
            onAction(newState, action.type);
            return newState;
        }

        switch (action.type) {
            case "load_state": {
                return hns(action.state);
            }
            case "used_add_item": {
                return hns(usedAddItem(state, action.item));
            }
            case "used_remove_item": {
                return hns(usedRemoveItem(state, action.item));
            }
            case "used_move_item_to_preferred": {
                return hns(usedMoveItemToPreferred(state, action.item));
            }
            case "used_clear": {
                return hns(usedClear(state));
            }
            case "preferred_add_item": {
                return hns(preferredAddItem(state, action.item));
            }
            case "preferred_remove_item": {
                return hns(preferredRemoveItem(state, action.item));
            }
            case "preferred_move_item_to_used": {
                return hns(preferredMoveItemToUsed(state, action.item));
            }
            case "preferred_clear": {
                return hns(preferredClear(state));
            }
            // Should never happen thanks to TS failing 
            // on dispatch() call with unknown action type
            default: {
                return state;
            }
        }
    }, initialState);
}
