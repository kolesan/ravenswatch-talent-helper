import { useReducer } from "preact/hooks";

import { MagicalObject } from "../../../../types";
import { CursedObjectsPageState } from "../types";

type Action =
    | { type: "clear_used" }
    | { type: "clear_preferred" }
    | { type: "object_from_available_to_preferred", object: MagicalObject }
    | { type: "object_from_available_to_used", object: MagicalObject }
    | { type: "object_from_preferred_to_used", object: MagicalObject }
    | { type: "object_from_preferred_to_available", object: MagicalObject }
    | { type: "object_from_used_to_available", object: MagicalObject }
    | { type: "object_from_used_to_preferred", object: MagicalObject };

export function useCursedObjectsPageState(initialState: CursedObjectsPageState) {
    return useReducer<CursedObjectsPageState, Action>((state, action) => {
        switch (action.type) {          
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
            case "object_from_available_to_preferred": {
                const object = {
                    ...action.object,
                    preferred: true,
                }
                const preferred = [...state.preferred, object];
                return {
                    ...state,
                    preferred,
                };
            }
            case "object_from_available_to_used": {
                const used = [...state.used, action.object];
                return {
                    ...state,
                    used
                };
            }
            case "object_from_preferred_to_used": {
                const used = [...state.used, action.object];
                const preferred = state.preferred
                    .filter(it => it.code !== action.object.code);
                return {
                    used,
                    preferred, 
                };
            }
            case "object_from_preferred_to_available": {
                const preferred = state.preferred
                    .filter(it => it.code !== action.object.code);
                return {
                    ...state,
                    preferred
                };
            }
            case "object_from_used_to_preferred": {
                const used = state.used
                    .filter(it => it.code !== action.object.code);
                const preferred = [...state.preferred, action.object];
                return {
                    used,
                    preferred,
                };
            }
            case "object_from_used_to_available": {
                const used = state.used
                    .filter(it => it.code !== action.object.code);
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
