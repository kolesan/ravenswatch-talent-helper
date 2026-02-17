import { useMemo, useReducer } from "preact/hooks";

import { availableToPreferred } from "./actions/availableToPreferred";
import { availableToUsed } from "./actions/availableToUsed";
import { clearPreferred } from "./actions/clearPreferred";
import { clearUsed } from "./actions/clearUsed";
import { preferredToAvailable } from "./actions/preferredToAvailable";
import { preferredToUsed } from "./actions/preferredToUsed";
import { usedToAvailable } from "./actions/usedToAvailable";
import { usedToPreferred } from "./actions/usedToPreferred";
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
            case "clear_used": {
                return hns(clearUsed(state));
            }
            case "clear_preferred": {
                return hns(clearPreferred(state));
            }
            case "available_to_preferred": {
                return hns(availableToPreferred(state, action.item));
            }
            case "available_to_used": {
                return hns(availableToUsed(state, action.item));
            }
            case "preferred_to_used": {
                return hns(preferredToUsed(state, action.item));
            }
            case "preferred_to_available": {
                return hns(preferredToAvailable(state, action.item));
            }
            case "used_to_preferred": {
                return hns(usedToPreferred(state, action.item));
            }
            case "used_to_available": {
                return hns(usedToAvailable(state, action.item));
            }
            // Should never happen thanks to TS failing 
            // on dispatch() call with unknown action type
            default: {
                return state;
            }
        }
    }, initialState);
}
