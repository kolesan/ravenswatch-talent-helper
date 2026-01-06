import { html } from "htm/preact";

import { cursedItemsPageStateStorage } from "../../utils/cursedItemsPageStateStorage/cursedItemsPageStateStorage";

import { MainList } from "./components/MainList";
import cls from "./CursedItemsPage.module.css";
import { useCursedItemsPageState } from "./hooks/useCursedItemsPageState";
import { useSaveCursedItemsPageStateToStorage } from "./hooks/useSaveCursedItemsPageStateToStorage";
import { Item } from "./types";
import { defaultCursedItemsPageState } from "./utils/defaultCursedItemsState";
import { getDerivedCursedItemsPageState } from "./utils/getDerivedCursedItemsPageState";

const initialState = cursedItemsPageStateStorage.get() || defaultCursedItemsPageState;

export function CursedItemsPage() {
    const [state, dispatch] = useCursedItemsPageState(initialState);

    useSaveCursedItemsPageStateToStorage(state);

    const derivedState = getDerivedCursedItemsPageState(state);

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
