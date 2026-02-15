import { Talent } from "../../../../../scripts/extractTalents/types";
import { maxUsedTalents } from "../../consts/maxUsedTalents";
import { TalentWithLockedFlag } from "../../types";

import { BuilderState, BuilderStateReducerActionType } from "./hooks/useBuilderStateReducer/types";
import { useBuilderStateReducer } from "./hooks/useBuilderStateReducer/useBuilderStateReducer";

type Params = {
    getInitialState: () => BuilderState;
    onAction: (state: BuilderState, actionType: BuilderStateReducerActionType) => void;
}

export function useBuilder({
    getInitialState,
    onAction,
}: Params) {
    const [state, dispatch] = useBuilderStateReducer({
        getInitialState,
        onAction,
    });

    return {
        state,
        loadState(newState: BuilderState) {
            dispatch({
                type: "load_state",
                state: newState,
            });
        },
        clearUsed() {
            dispatch({
                type: "clear_used",
            });
        },
        clearPreferred() {
            dispatch({
                type: "clear_preferred",
            });
        },
        removeFromUsed(talent: Talent) {
            dispatch({
                type: talent.preferred
                    ? "used_to_preferred"
                    : "used_to_available",
                talent,
            });
        },
        preferredToUsed(talent: Talent) {
            if (state.used.length >= maxUsedTalents) {
                return;
            }

            dispatch({
                type: "preferred_to_used",
                talent,
            });
        },
        preferredToAvailable(talent: Talent) {
            dispatch({
                type: "preferred_to_available",
                talent,
            });
        },
        availableToUsed(talent: TalentWithLockedFlag) {
            if (
                talent.locked 
                || state.used.length >= maxUsedTalents
            ) {
                return;
            }

            dispatch({
                type: "available_to_used",
                talent,
            });
        },
        availableToPreferred(talent: TalentWithLockedFlag) {
            if (talent.locked) {
                return;
            }

            dispatch({
                type: "available_to_preferred",
                talent,
            });
        },
    };
}
