import { useReducer } from "preact/hooks";

import { Talent } from "../../../../../../scripts/extractTalents/types";
import { maxUsedTalents } from "../../../consts/maxUsedTalents";
import { isNotLocked } from "../../../utils/isNotLocked";
import { BuilderState } from "../types";

// TODO consider reworking how talents are moved to preferred (favorites)
// to used, and back to available

type Action =
    | { type: "load_state", state: BuilderState }
    | { type: "apply_rank", rank: number }
    | { type: "clear_used" }
    | { type: "clear_preferred" }
    | { type: "talent_from_used_to_preferred", talent: Talent }
    | { type: "talent_from_used_to_available", talent: Talent }
    | { type: "talent_from_preferred_to_used", talent: Talent }
    | { type: "talent_from_preferred_to_available", talent: Talent }
    | { type: "talent_from_available_to_preferred", talent: Talent }
    | { type: "talent_from_available_to_used", talent: Talent };

// TODO consider moving state calculations to separate appropriately named functions
export function useBuilderState(initialState: BuilderState) {
    return useReducer<BuilderState, Action>((state, action) => {
        switch (action.type) {
            case "load_state": {
                return action.state;
            }
            case "apply_rank": {
                const { rank } = action;
                // TODO might need to move isNotLocked utils here 
                // if they arent used elsewhere
                const used = state.used.filter(isNotLocked(rank));
                const preferred = state.preferred.filter(isNotLocked(rank));
                return {
                    used,
                    preferred,
                };
            }
            case "clear_used": {
                const preferredFromUsed = state.used.filter(it => it.preferred);
                return {
                    used: [],
                    preferred: [...state.preferred, ...preferredFromUsed],
                };
            }
            case "clear_preferred": {
                return {
                    ...state,
                    preferred: [],
                };
            }
            case "talent_from_available_to_preferred": {
                const talent = {
                    ...action.talent,
                    preferred: true,
                }
                const preferred = [...state.preferred, talent];
                return {
                    ...state,
                    preferred,
                };
            }
            case "talent_from_available_to_used": {
                if (state.used.length >= maxUsedTalents) {
                    return state;
                }

                const used = [...state.used, action.talent];
                return {
                    ...state,
                    used
                };
            }
            case "talent_from_preferred_to_used": {
                if (state.used.length >= maxUsedTalents) {
                    return state;
                }

                const used = [...state.used, action.talent];
                const preferred = state.preferred
                    .filter(it => it.code !== action.talent.code);

                return {
                    used,
                    preferred,
                };
            }
            case "talent_from_preferred_to_available": {
                const preferred = state.preferred
                    .filter(it => it.code !== action.talent.code);
                return {
                    ...state,
                    preferred
                };
            }
            case "talent_from_used_to_preferred": {
                const used = state.used
                    .filter(it => it.code !== action.talent.code);
                const preferred = [...state.preferred, action.talent];
                return {
                    used,
                    preferred,
                };
            }
            case "talent_from_used_to_available": {
                const used = state.used
                    .filter(it => it.code !== action.talent.code);
                return {
                    ...state,
                    used,
                };
            }
            default: {
                return state;
            }
        }
    }, initialState)
}
