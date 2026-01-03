import { useReducer } from "preact/hooks";

import { Hero } from "../../../../finalData/finalData";
import { Talent } from "../../../../scripts/extractTalents/types";
import { minmax } from "../../../utils/minmax";
import { maxUsedTalents } from "../consts/maxUsedTalents";
import { rankConsts } from "../consts/rankConsts";
import { AppState } from "../types";
import { isNotLocked } from "../utils/isNotLocked";

const minmaxRank = minmax(rankConsts.min, rankConsts.max);

type Action =
    | { type: "set_hero", hero: Hero }
    | { type: "set_rank", rank: number }
    | { type: "talent_from_available_to_preferred", talent: Talent }
    | { type: "talent_from_available_to_used", talent: Talent }
    | { type: "talent_from_preferred_to_used", talent: Talent }
    | { type: "talent_from_preferred_to_available", talent: Talent }
    | { type: "talent_from_used_to_available", talent: Talent }
    | { type: "talent_from_used_to_preferred", talent: Talent };

// TODO consider moving state calculations to separate appropriately named functions
export function useTalentsPageState(initialState: AppState) {
    return useReducer<AppState, Action>((state, action) => {
        switch (action.type) {
            case "set_hero": {
                return {
                    ...state,
                    hero: action.hero,
                    talents: {
                        used: [],
                        preferred: [],
                    }
                };
            }
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
            case "talent_from_available_to_preferred": {
                const preferred = [...state.talents.preferred, action.talent];
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
                    .filter(it => it !== action.talent);

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
                    .filter(it => it !== action.talent);
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
                    .filter(it => it !== action.talent);
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
                    .filter(it => it !== action.talent);
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
