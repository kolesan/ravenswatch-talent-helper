import { useReducer } from "preact/hooks";

import { Talent } from "../../../../scripts/extractTalents/types";
import { maxUsedTalents } from "../consts/maxUsedTalents";
import { ReactiveTalentsPageState } from "../types";
import { isNotLocked } from "../utils/isNotLocked";
import { minmaxRank } from "../utils/minmaxRank";

// TODO consider reworking how talents are moved to preferred (favorites)
// to used, and back to available

type Action =
    | { type: "set_rank", rank: number }
    | { type: "clear_used" }
    | { type: "clear_preferred" }
    | { type: "talent_from_available_to_preferred", talent: Talent }
    | { type: "talent_from_available_to_used", talent: Talent }
    | { type: "talent_from_preferred_to_used", talent: Talent }
    | { type: "talent_from_preferred_to_available", talent: Talent }
    | { type: "talent_from_used_to_available", talent: Talent }
    | { type: "talent_from_used_to_preferred", talent: Talent };

// TODO consider moving state calculations to separate appropriately named functions
export function useTalentsPageState(initialState: ReactiveTalentsPageState) {
    return useReducer<ReactiveTalentsPageState, Action>((state, action) => {
        switch (action.type) {
            case "set_rank": {
                const rank = minmaxRank(action.rank);
                // TODO might need to move isNotLocked utils here if they arent used elsewhere
                const used = state.talents.used.filter(isNotLocked(rank));
                const preferred = state.talents.preferred.filter(isNotLocked(rank));
                return {
                    ...state,
                    rank,
                    talents: {
                        used,
                        preferred
                    }
                };
            }
            case "clear_used": {
                const preferredFromUsed = state.talents.used.filter(it => it.preferred);
                return {
                    ...state,
                    talents: {
                        ...state.talents,
                        used: [],
                        preferred: [...state.talents.preferred, ...preferredFromUsed],
                    }
                };
            }
            case "clear_preferred": {
                return {
                    ...state,
                    talents: {
                        ...state.talents,
                        preferred: [],
                    }
                };
            }
            case "talent_from_available_to_preferred": {
                const talent = {
                    ...action.talent,
                    preferred: true,
                }
                const preferred = [...state.talents.preferred, talent];
                return {
                    ...state,
                    talents: {
                        ...state.talents,
                        preferred,
                    }
                };
            }
            case "talent_from_available_to_used": {
                if (state.talents.used.length >= maxUsedTalents) {
                    return state;
                }

                const used = [...state.talents.used, action.talent];
                return {
                    ...state,
                    talents: {
                        ...state.talents,
                        used
                    }
                };
            }
            case "talent_from_preferred_to_used": {
                if (state.talents.used.length >= maxUsedTalents) {
                    return state;
                }

                const used = [...state.talents.used, action.talent];
                const preferred = state.talents.preferred
                    .filter(it => it.code !== action.talent.code);

                return {
                    ...state,
                    talents: {
                        preferred, 
                        used,
                    }
                };
            }
            case "talent_from_preferred_to_available": {
                const preferred = state.talents.preferred
                    .filter(it => it.code !== action.talent.code);
                return {
                    ...state,
                    talents: {
                        ...state.talents,
                        preferred
                    }
                };
            }
            case "talent_from_used_to_preferred": {
                const used = state.talents.used
                    .filter(it => it.code !== action.talent.code);
                const preferred = [...state.talents.preferred, action.talent];
                return {
                    ...state,
                    talents: {
                        used,
                        preferred,
                    }
                };
            }
            case "talent_from_used_to_available": {
                const used = state.talents.used
                    .filter(it => it.code !== action.talent.code);
                return {
                    ...state,
                    talents: {
                        ...state.talents,
                        used,
                    }
                };
            }
            default: {
                return state;
            }
        }
    }, initialState)
}
