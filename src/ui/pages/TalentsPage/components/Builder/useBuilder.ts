import { useMemo } from "preact/hooks";

import { Talent } from "../../../../../scripts/extractTalents/types";
import { maxUsedTalents } from "../../consts/maxUsedTalents";
import { TalentWithLockedFlag } from "../../types";

import { useBuilderStateReducer } from "./hooks/useBuilderStateReducer/useBuilderStateReducer";
import { BuilderState } from "./types";

type Params = {
    getInitialState: () => BuilderState;
    onNewState: (state: BuilderState) => void;
}

export function useBuilder({
    getInitialState,
    onNewState,
}: Params) {
    const [state, dispatch] = useBuilderStateReducer({
        getInitialState,
        onNewState,
    });

    return useMemo(() => ({
        state,
        loadStateWithoutNewStateCb(newState: BuilderState) {
            dispatch({
                type: "load_state_without_new_state_cb",
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
    }), [state]);
}
