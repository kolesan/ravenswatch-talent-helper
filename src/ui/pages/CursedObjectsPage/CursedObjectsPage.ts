import { html } from "htm/preact";

import { MagicalObject } from "../../../types";
import { ObjectList } from "../../components/ObjectList";

import cls from "./CursedObjectsPage.module.css";
import { useCursedObjectsPageState } from "./hooks/useCursedObjectsPageState";
import { useSaveCursedObjectsPageStateToStorage } from "./hooks/useSaveCursedObjectsPageStateToStorage";
import { cursedObjectsPageStateStorage } from "./utils/cursedObjectsPageStateStorage/cursedObjectsPageStateStorage";
import { defaultCursedObjectsPageState } from "./utils/defaultCursedObjectPageState";
import { getDerivedCursedObjectsPageState } from "./utils/getDerivedCursedObjectsPageState";

const initialState = cursedObjectsPageStateStorage.get() || defaultCursedObjectsPageState;

export function CursedObjectsPage() {
    const [state, dispatch] = useCursedObjectsPageState(initialState);

    useSaveCursedObjectsPageStateToStorage(state);

    const derivedState = getDerivedCursedObjectsPageState(state);

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
