import { html } from "htm/preact";
import { useMemo } from "preact/hooks";

import { MagicalObject } from "../../../types";
import { ListLabelRight } from "../../components/ListLabelRight/ListLabelRight";
import { ObjectList } from "../../components/ObjectList";
import { useBooleanState } from "../../hooks/useBooleanState";
import { usePageTitle } from "../../hooks/usePageTitle";

import { useLegendaryObjectsPageState } from "./hooks/useLegendaryObjectsPageState";
import { useSaveLegendaryObjectsPageStateToStorage } from "./hooks/useSaveLegendaryObjectsPageStateToStorage";
import { defaultLegendaryObjectsPageState } from "./utils/defaultLegendaryObjectsPageState";
import { getDerivedLegendaryObjectsPageState } from "./utils/getDerivedLegendaryObjectsPageState";
import { legendaryObjectsPageStateStorage } from "./utils/legendaryObjectsPageStateStorage/legendaryObjectsPageStateStorage";

import cls from "./LegendaryObjectsPage.module.css";

const getInitialState = () => 
    legendaryObjectsPageStateStorage.get() 
    || defaultLegendaryObjectsPageState;

const listLabelStuckAtPx = 56;

export function LegendaryObjectsPage() {
    usePageTitle("Legendary Objects");
    
    const initialState = useMemo(getInitialState, []);

    const [state, dispatch] = useLegendaryObjectsPageState(initialState);
    const usedLabelScrollingAgain = useBooleanState(false);
    const preferredLabelScrollingAgain = useBooleanState(false);

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
                onStickyLabelScrollingAgain=${usedLabelScrollingAgain.set}
                onClear=${() => {
                    dispatch({
                        type: "clear_used",
                    });
                }}
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
                confirmBeforeClear
                slots=${{
                    labelRight: html`
                        <${ListLabelRight} 
                            className=${cls.listLabelRight}
                            visible=${
                                usedLabelScrollingAgain.is 
                                && !preferredLabelScrollingAgain.is
                            }
                            used=${state.used.length}
                        />
                    `,
                }}
                objects=${state.preferred} 
                objectType=legendary
                onStickyLabelScrollingAgain=${preferredLabelScrollingAgain.set}
                onClear=${() => {
                    dispatch({
                        type: "clear_preferred",
                    });
                }}
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
                slots=${{
                    labelRight: html`
                        <${ListLabelRight}
                            className=${cls.listLabelRight}
                            visible=${preferredLabelScrollingAgain.is}
                            used=${state.used.length}
                            preferred=${state.preferred.length}
                        />
                    `,
                }}
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
