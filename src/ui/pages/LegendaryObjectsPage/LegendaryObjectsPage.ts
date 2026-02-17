import { html } from "htm/preact";

import { ListLabelRight } from "../../components/ListLabelRight/ListLabelRight";
import { ObjectList } from "../../components/ObjectList";
import { useBooleanState } from "../../hooks/useBooleanState";
import { usePageTitle } from "../../hooks/usePageTitle";

import { useLegendaryObjectsBuilder } from "./hooks/useLegendaryObjectsBuilder/useLegendaryObjectsBuilder";

import cls from "./LegendaryObjectsPage.module.css";

const listLabelStuckAtPx = 56;

export function LegendaryObjectsPage() {
    usePageTitle("Legendary Objects");

    const builder = useLegendaryObjectsBuilder();

    const usedLabelScrollingAgain = useBooleanState(false);
    const preferredLabelScrollingAgain = useBooleanState(false);

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
                objects=${builder.state.used}
                objectType=legendary
                onStickyLabelScrollingAgain=${usedLabelScrollingAgain.set}
                onClear=${builder.actions.clearUsed}
                onObjectClick=${builder.actions.removeFromUsed}
                onObjectAltClick=${builder.actions.removeFromUsed}
                onObjectHold=${builder.actions.removeFromUsed}
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
                            used=${builder.state.used.length}
                        />
                    `,
                }}
                objects=${builder.state.preferred} 
                objectType=legendary
                onStickyLabelScrollingAgain=${preferredLabelScrollingAgain.set}
                onClear=${builder.actions.clearPreferred}
                onObjectClick=${builder.actions.preferredToUsed}
                onObjectAltClick=${builder.actions.preferredToAvailable}
                onObjectHold=${builder.actions.preferredToAvailable}
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
                            used=${builder.state.used.length}
                            preferred=${builder.state.preferred.length}
                        />
                    `,
                }}
                objects=${builder.state.available} 
                objectType=legendary
                onObjectClick=${builder.actions.availableToUsed}
                onObjectAltClick=${builder.actions.availableToPreferred}
                onObjectHold=${builder.actions.availableToPreferred}
            />
        </div>
    `;
}
