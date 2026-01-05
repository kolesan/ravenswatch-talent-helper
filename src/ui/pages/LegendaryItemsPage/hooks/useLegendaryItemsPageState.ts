import { useReducer } from "preact/hooks";

import { Item, LegendaryItemsPageState } from "../types";

type Action =
    | { type: "item_from_available_to_preferred", item: Item }
    | { type: "item_from_available_to_used", item: Item }
    | { type: "item_from_preferred_to_used", item: Item }
    | { type: "item_from_preferred_to_available", item: Item }
    | { type: "item_from_used_to_available", item: Item }
    | { type: "item_from_used_to_preferred", item: Item };

export function useLegendaryItemsPageState(initialState: LegendaryItemsPageState) {
    return useReducer<LegendaryItemsPageState, Action>((state, action) => {
        switch (action.type) {
            case "item_from_available_to_preferred": {
                const preferred = [...state.preferred, action.item];
                return {
                    ...state,
                    preferred,
                };
            }
            case "item_from_available_to_used": {
                const used = [...state.used, action.item];
                return {
                    ...state,
                    used
                };
            }
            case "item_from_preferred_to_used": {
                const used = [...state.used, action.item];
                const preferred = state.preferred
                    .filter(it => it !== action.item);
                return {
                    used,
                    preferred, 
                };
            }
            case "item_from_preferred_to_available": {
                const preferred = state.preferred
                    .filter(it => it !== action.item);
                return {
                    ...state,
                    preferred
                };
            }
            case "item_from_used_to_preferred": {
                const used = state.used
                    .filter(it => it !== action.item);
                const preferred = [...state.preferred, action.item];
                return {
                    used,
                    preferred,
                };
            }
            case "item_from_used_to_available": {
                const used = state.used
                    .filter(it => it !== action.item);
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
