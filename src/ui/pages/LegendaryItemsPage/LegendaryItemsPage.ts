import { html } from "htm/preact";

import { legendaryItemsPageStateStorage } from "../../utils/legendaryItemsPageStateStorage/legendaryItemsPageStateStorage";

import { MainList } from "./components/MainList";
import { useLegendaryItemsPageState } from "./hooks/useLegendaryItemsPageState";
import { useSaveLegendaryItemsPageStateToStorage } from "./hooks/useSaveLegendaryItemsPageStateToStorage";
import cls from "./LegendaryItemsPage.module.css";
import { Item } from "./types";
import { defaultLegendaryItemsPageState } from "./utils/defaultLegendaryItemsState";
import { getDerivedLegendaryItemsPageState } from "./utils/getDerivedLegendaryItemsPageState";

const initialState = legendaryItemsPageStateStorage.get() || defaultLegendaryItemsPageState;

export function LegendaryItemsPage() {
    const [state, dispatch] = useLegendaryItemsPageState(initialState);

    useSaveLegendaryItemsPageStateToStorage(state);

    const derivedState = getDerivedLegendaryItemsPageState(state);

    return html`
        <div class=${cls.root}>
            <${MainList} 
                label=Used 
                items=${state.used}
                onItemClick=${(item: Item) => {
                    dispatch({
                        type: "item_from_used_to_available",
                        item,
                    });
                }}
                onItemAltClick=${(item: Item) => {
                    dispatch({
                        type: "item_from_used_to_preferred",
                        item,
                    });
                }}
            />
            <${MainList} 
                label=Preferred 
                items=${state.preferred} 
                onItemClick=${(item: Item) => {
                    dispatch({
                        type: "item_from_preferred_to_used",
                        item,
                    });
                }}
                onItemAltClick=${(item: Item) => {
                    dispatch({
                        type: "item_from_preferred_to_available",
                        item,
                    });
                }}
            />
            <${MainList} 
                label=Available 
                items=${derivedState.available} 
                onItemClick=${(item: Item) => {
                    dispatch({
                        type: "item_from_available_to_used",
                        item,
                    });
                }}
                onItemAltClick=${(item: Item) => {
                    dispatch({
                        type: "item_from_available_to_preferred",
                        item,
                    });
                }}
            />
        </div>
    `;
}
