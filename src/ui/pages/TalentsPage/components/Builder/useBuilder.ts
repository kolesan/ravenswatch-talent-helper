import { Talent } from "../../../../../scripts/extractTalents/types";
import { maxUsedTalents } from "../../consts/maxUsedTalents";
import { TalentWithLockedFlag } from "../../types";

import { useBuilderState } from "./hooks/useBuilderState/useBuilderState";
import { BuilderState } from "./types";

type Params = {
    initialState: BuilderState;
    onNewState: (state: BuilderState) => void;
}

export function useBuilder({
    initialState,
    onNewState,
}: Params) {
    const [state, dispatch] = useBuilderState({
        initialState,
        onNewState,
    });

    return {
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
    }
}
