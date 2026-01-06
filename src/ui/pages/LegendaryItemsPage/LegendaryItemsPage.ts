import { html } from "htm/preact";

import { legendaryItemsPageStateStorage } from "../../utils/legendaryItemsPageStateStorage/legendaryItemsPageStateStorage";

import { ObjectList } from "./components/ObjectList/ObjectList";
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
            <${ObjectList} 
                label=Used 
                objects=${state.used}
                onObjectClick=${(object: Item) => {
                    dispatch({
                        type: "item_from_used_to_available",
                        item: object,
                    });
                }}
                onObjectAltClick=${(object: Item) => {
                    dispatch({
                        type: "item_from_used_to_preferred",
                        item: object,
                    });
                }}
            />
            <${ObjectList} 
                label=Preferred 
                objects=${state.preferred} 
                onObjectClick=${(object: Item) => {
                    dispatch({
                        type: "item_from_preferred_to_used",
                        item: object,
                    });
                }}
                onObjectAltClick=${(object: Item) => {
                    dispatch({
                        type: "item_from_preferred_to_available",
                        item: object,
                    });
                }}
            />
            <${ObjectList} 
                label=Available 
                objects=${derivedState.available} 
                onObjectClick=${(object: Item) => {
                    dispatch({
                        type: "item_from_available_to_used",
                        item: object,
                    });
                }}
                onObjectAltClick=${(object: Item) => {
                    dispatch({
                        type: "item_from_available_to_preferred",
                        item: object,
                    });
                }}
            />
        </div>
    `;
}
