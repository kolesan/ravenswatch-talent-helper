import { html } from "htm/preact";

import { MagicalObject } from "../../../types";

import { ObjectList } from "../../components/ObjectList";
import { useLegendaryObjectsPageState } from "./hooks/useLegendaryObjectsPageState";
import { useSaveLegendaryObjectsPageStateToStorage } from "./hooks/useSaveLegendaryItemsPageStateToStorage";
import cls from "./LegendaryObjectsPage.module.css";
import { defaultLegendaryObjectsPageState } from "./utils/defaultLegendaryItemsState";
import { getDerivedLegendaryObjectsPageState } from "./utils/getDerivedLegendaryObjectsPageState";
import { legendaryObjectsPageStateStorage } from "./utils/legendaryObjectsPageStateStorage/legendaryObjectsPageStateStorage";

const initialState = legendaryObjectsPageStateStorage.get() || defaultLegendaryObjectsPageState;

export function LegendaryObjectsPage() {
    const [state, dispatch] = useLegendaryObjectsPageState(initialState);

    useSaveLegendaryObjectsPageStateToStorage(state);

    const derivedState = getDerivedLegendaryObjectsPageState(state);

    return html`
        <div class=${cls.root}>
            <${ObjectList} 
                label=Used 
                objects=${state.used}
                objectType=legendary
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
                objectType=legendary
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
                objectType=legendary
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
