import clsx from "clsx";
import { html } from "htm/preact";

import { useBooleanState } from "../../hooks/useBooleanState";
import { List } from "../List/List";

import { ListLabelRight } from "./components/ListLabelRight/ListLabelRight";
import { BuilderItem } from "./hooks/useBuilderStateReducer/types";
import { BuilderListItemRenderer, BuilderType } from "./types";

import cls from "./Builder.module.css";

type Props<T extends BuilderItem> = {
    classes?: {
        root?: string;
        list?: {
            root?: string;
            label?: string;
            content?: string;
            listItem?: (item: T) => string;
        }
    }
    builder: BuilderType<T>
    // props below should be taken a look at and probably refactored
    // double check other props just in case as well
    maxUsedItems?: number;
    entityName: string;
    listLabelStuckAtPx: number;
    canCountItemAvailable?: (item: T) => boolean;
    renderItem: BuilderListItemRenderer<T>;
}

export function Builder<T extends BuilderItem>({
    classes,
    builder,
    maxUsedItems,
    entityName,
    listLabelStuckAtPx,
    canCountItemAvailable,
    renderItem,
}: Props<T>) {
    const usedLabelScrollingAgain = useBooleanState(false);
    const preferredLabelScrollingAgain = useBooleanState(false);

    const usedIsFull = maxUsedItems !== undefined 
        && builder.state.used.length >= maxUsedItems;

    return html`
        <div class=${clsx(cls.builderRoot, classes?.root)}>
            <${List}
                classes=${classes?.list}
                label=${"Used"}
                labelStuckAtPx=${listLabelStuckAtPx}
                entityName=${entityName}
                items=${builder.state.used} 
                maxItems=${maxUsedItems}
                onStickyLabelScrollingAgain=${usedLabelScrollingAgain.set}
                onClear=${builder.actions.clearUsed}
                renderItem=${(item: T, index: number) => {
                    return renderItem(item, index, {
                        onClick: () => builder.actions.removeFromUsed(item),
                        onAltClick: () => builder.actions.removeFromUsed(item),
                        onHold: () => builder.actions.removeFromUsed(item),
                    });
                }}
            />
            <${List}
                classes=${classes?.list}
                label=${"Preferred"}
                labelStuckAtPx=${listLabelStuckAtPx}
                slots=${{
                    labelRight: html`
                        <${ListLabelRight} 
                            className=${cls.listLabelRight}
                            visible=${
                                usedLabelScrollingAgain.is 
                                && !preferredLabelScrollingAgain.is
                            }
                            used=${builder.state.used.length}
                            maxUsed=${maxUsedItems}
                        />
                    `,
                }}
                items=${builder.state.preferred} 
                entityName=${entityName}
                onStickyLabelScrollingAgain=${preferredLabelScrollingAgain.set}
                onClear=${builder.actions.clearPreferred}
                confirmBeforeClear
                renderItem=${(item: T, index: number) => {
                    return renderItem(item, index, {
                        onClick: () => !usedIsFull
                            && builder.actions.preferredToUsed(item),
                        onAltClick: () => builder.actions.preferredToAvailable(item),
                        onHold: () => builder.actions.preferredToAvailable(item),
                    });
                }}
            />
            <${List}
                classes=${classes?.list}
                label=${"Available"}
                labelStuckAtPx=${listLabelStuckAtPx}
                slots=${{
                    labelRight: html`
                        <${ListLabelRight}
                            className=${cls.listLabelRight}
                            visible=${preferredLabelScrollingAgain.is}
                            used=${builder.state.used.length}
                            preferred=${builder.state.preferred.length}
                            maxUsed=${maxUsedItems}
                        />
                    `,
                }}
                items=${builder.derivedState.available} 
                entityName=${entityName}
                canCountItemUsable=${canCountItemAvailable}
                renderItem=${(item: T, index: number) => {
                    return renderItem(item, index, {
                        onClick: () => !usedIsFull 
                            && builder.actions.availableToUsed(item),
                        onAltClick: () => builder.actions.availableToPreferred(item),
                        onHold: () => builder.actions.availableToPreferred(item),
                    });
                }}
            />
        </div>
    `;
}
