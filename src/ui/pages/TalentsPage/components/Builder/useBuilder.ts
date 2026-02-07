import { Talent } from "../../../../../scripts/extractTalents/types";
import { TalentWithLockedFlag } from "../../types";

import { useBuilderState } from "./hooks/useBuilderState";
import { BuilderState } from "./types";

export function useBuilder(initialState: BuilderState) {
    const [state, dispatch] = useBuilderState(initialState);
    return {
        state,
        loadState(stateToLoad: BuilderState) {
            dispatch({
                type: "load_state",
                state: stateToLoad,
            })
        },
        applyRank(rank: number) {
            dispatch({
                type: "apply_rank",
                rank,
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
                    ? "talent_from_used_to_preferred"
                    : "talent_from_used_to_available",
                talent,
            });
        },
        preferredToUsed(talent: Talent) {
            dispatch({
                type: "talent_from_preferred_to_used",
                talent,
            });
        },
        preferredToAvailable(talent: Talent) {
            dispatch({
                type: "talent_from_preferred_to_available",
                talent,
            });
        },
        availabelToUsed(talent: TalentWithLockedFlag) {
            if (talent.locked) {
                return;
            }
            dispatch({
                type: "talent_from_available_to_used",
                talent,
            });
        },
        availableToPreferred(talent: TalentWithLockedFlag) {
            if (talent.locked) {
                return;
            }
            dispatch({
                type: "talent_from_available_to_preferred",
                talent,
            });
        },
    }
}
