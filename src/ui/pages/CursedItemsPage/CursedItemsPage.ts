import { html } from "htm/preact";

import { MagicalObject } from "../../../types";
import { ObjectList } from "../../components/ObjectList";
import { cursedItemsPageStateStorage } from "../../utils/cursedItemsPageStateStorage/cursedItemsPageStateStorage";

import cls from "./CursedItemsPage.module.css";
import { useCursedItemsPageState } from "./hooks/useCursedItemsPageState";
import { useSaveCursedItemsPageStateToStorage } from "./hooks/useSaveCursedItemsPageStateToStorage";
import { defaultCursedItemsPageState } from "./utils/defaultCursedItemsState";
import { getDerivedCursedItemsPageState } from "./utils/getDerivedCursedItemsPageState";

const initialState = cursedItemsPageStateStorage.get() || defaultCursedItemsPageState;

export function CursedItemsPage() {
    const [state, dispatch] = useCursedItemsPageState(initialState);

    useSaveCursedItemsPageStateToStorage(state);

    const derivedState = getDerivedCursedItemsPageState(state);

    return html`
        <div class=${cls.root}>
            <${ObjectList} 
                label=Used 
                objects=${state.used}
                objectType=cursed
                onObjectClick=${(object: MagicalObject) => {
                    dispatch({
                        type: "object_from_used_to_available",
                        object: object,
                    });
                }}
                onObjectAltClick=${(object: MagicalObject) => {
                    dispatch({
                        type: "object_from_used_to_preferred",
                        object: object,
                    });
                }}
            />
            <${ObjectList} 
                label=Preferred 
                objects=${state.preferred} 
                objectType=cursed
                onObjectClick=${(object: MagicalObject) => {
                    dispatch({
                        type: "object_from_preferred_to_used",
                        object: object,
                    });
                }}
                onObjectAltClick=${(object: MagicalObject) => {
                    dispatch({
                        type: "object_from_preferred_to_available",
                        object: object,
                    });
                }}
            />
            <${ObjectList} 
                label=Available 
                objects=${derivedState.available} 
                objectType=cursed
                onObjectClick=${(object: MagicalObject) => {
                    dispatch({
                        type: "object_from_available_to_used",
                        object: object,
                    });
                }}
                onObjectAltClick=${(object: MagicalObject) => {
                    dispatch({
                        type: "object_from_available_to_preferred",
                        object: object,
                    });
                }}
            />
        </div>
    `;
}
