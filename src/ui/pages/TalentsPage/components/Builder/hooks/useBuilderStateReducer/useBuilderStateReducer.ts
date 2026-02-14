import { useMemo, useReducer } from "preact/hooks";

import { availableToPreferred } from "./actions/availableToPreferred";
import { availableToUsed } from "./actions/availableToUsed";
import { clearPreferred } from "./actions/clearPreferred";
import { clearUsed } from "./actions/clearUsed";
import { preferredToAvailable } from "./actions/preferredToAvailable";
import { preferredToUsed } from "./actions/preferredToUsed";
import { usedToAvailable } from "./actions/usedToAvailable";
import { usedToPreferred } from "./actions/usedToPreferred";
import { BuilderState, BuilderStateReducerAction, BuilderStateReducerActionType } from "./types";

type Params = {
    getInitialState: () => BuilderState;
    onAction: (newState: BuilderState, actionType: BuilderStateReducerActionType) => void;
}

export function useBuilderStateReducer({
    getInitialState,
    onAction,
}: Params) {
    const initialState = useMemo(() => {
        return getInitialState();
    }, []);

    return useReducer<BuilderState, BuilderStateReducerAction>((state, action) => {
        // handleNewState
        function hns(newState: BuilderState): BuilderState {
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
                return hns(availableToPreferred(state, action.talent));
            }
            case "available_to_used": {
                return hns(availableToUsed(state, action.talent));
            }
            case "preferred_to_used": {
                return hns(preferredToUsed(state, action.talent));
            }
            case "preferred_to_available": {
                return hns(preferredToAvailable(state, action.talent));
            }
            case "used_to_preferred": {
                return hns(usedToPreferred(state, action.talent));
            }
            case "used_to_available": {
                return hns(usedToAvailable(state, action.talent));
            }
            // Should never happen thanks to TS failing 
            // on dispatch() call with unknown action type
            default: {
                return state;
            }
        }
    }, initialState);
}
