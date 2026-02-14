import { useMemo, useReducer } from "preact/hooks";

import { Talent } from "../../../../../../../scripts/extractTalents/types";
import { BuilderState } from "../../types";

import { availableToPreferred } from "./actions/availableToPreferred";
import { availableToUsed } from "./actions/availableToUsed";
import { clearPreferred } from "./actions/clearPreferred";
import { clearUsed } from "./actions/clearUsed";
import { preferredToAvailable } from "./actions/preferredToAvailable";
import { preferredToUsed } from "./actions/preferredToUsed";
import { usedToAvailable } from "./actions/usedToAvailable";
import { usedToPreferred } from "./actions/usedToPreferred";

type Action =
    | { type: "load_state_without_new_state_cb", state: BuilderState }
    | { type: "clear_used" }
    | { type: "clear_preferred" }
    | { type: "used_to_preferred", talent: Talent }
    | { type: "used_to_available", talent: Talent }
    | { type: "preferred_to_used", talent: Talent }
    | { type: "preferred_to_available", talent: Talent }
    | { type: "available_to_preferred", talent: Talent }
    | { type: "available_to_used", talent: Talent };

type Params = {
    getInitialState: () => BuilderState;
    onNewState: (newState: BuilderState) => void;
}

export function useBuilderStateReducer({
    getInitialState,
    onNewState,
}: Params) {
    const initialState = useMemo(() => {
        return getInitialState();
    }, []);

    // handleNewState
    function hns(newState: BuilderState): BuilderState {
        onNewState(newState);
        return newState;
    }

    return useReducer<BuilderState, Action>((state, action) => {
        switch (action.type) {
            case "load_state_without_new_state_cb": {
                return action.state;
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
            default: {
                return state;
            }
        }
    }, initialState);
}
