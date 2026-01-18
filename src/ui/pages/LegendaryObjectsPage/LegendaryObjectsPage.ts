import { html } from "htm/preact";

import { MagicalObject } from "../../../types";
import { ObjectList } from "../../components/ObjectList";
import { usePageTitle } from "../../hooks/usePageTitle";

import { useLegendaryObjectsPageState } from "./hooks/useLegendaryObjectsPageState";
import { useSaveLegendaryObjectsPageStateToStorage } from "./hooks/useSaveLegendaryItemsPageStateToStorage";
import { defaultLegendaryObjectsPageState } from "./utils/defaultLegendaryItemsState";
import { getDerivedLegendaryObjectsPageState } from "./utils/getDerivedLegendaryObjectsPageState";
import { legendaryObjectsPageStateStorage } from "./utils/legendaryObjectsPageStateStorage/legendaryObjectsPageStateStorage";

import cls from "./LegendaryObjectsPage.module.css";

const initialState = legendaryObjectsPageStateStorage.get() || defaultLegendaryObjectsPageState;

const listLabelStuckAtPx = 56;

export function LegendaryObjectsPage() {
    usePageTitle("Legendary Objects");

    const [state, dispatch] = useLegendaryObjectsPageState(initialState);

    useSaveLegendaryObjectsPageStateToStorage(state);

    const derivedState = getDerivedLegendaryObjectsPageState(state);

    return html`
        <div class=${cls.root}>
            <${ObjectList} 
                className=${cls.list}
                classes=${{ 
                    label: cls.listLabel,
                    content: cls.listContent,
                }}
                label=Used 
                labelStuckAtPx=${listLabelStuckAtPx}
                objects=${state.used}
                objectType=legendary
                onObjectClick=${(object: MagicalObject) => {
                    dispatch({
                        type: object.preferred
                            ? "object_from_used_to_preferred"
                            : "object_from_used_to_available",
                        object,
                    });
                }}
                onObjectAltClick=${(object: MagicalObject) => {
                    dispatch({
                        type: object.preferred
                            ? "object_from_used_to_preferred"
                            : "object_from_used_to_available",
                        object,
                    });
                }}
                onObjectHold=${(object: MagicalObject) => {
                    dispatch({
                        type: object.preferred
                            ? "object_from_used_to_preferred"
                            : "object_from_used_to_available",
                        object,
                    });
                }}
            />
            <${ObjectList} 
                className=${cls.list}
                classes=${{ 
                    label: cls.listLabel,
                    content: cls.listContent,
                }}
                label=Preferred 
                labelStuckAtPx=${listLabelStuckAtPx}
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
                onObjectHold=${(object: MagicalObject) => {
                    dispatch({
                        type: "object_from_preferred_to_available",
                        object,
                    });
                }}
            />
            <${ObjectList} 
                className=${cls.list}
                classes=${{ 
                    label: cls.listLabel,
                    content: cls.listContent,
                }}
                label=Available 
                labelStuckAtPx=${listLabelStuckAtPx}
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
                onObjectHold=${(object: MagicalObject) => {
                    dispatch({
                        type: "object_from_available_to_preferred",
                        object,
                    });
                }}
            />
        </div>
    `;
}
