import clsx from "clsx";
import { html } from "htm/preact";

import { useBooleanState } from "ui/hooks/useBooleanState";

import { List } from "../List/List";
import { Snackbar } from "../Snackbar/Snackbar";
import { useSnackbar } from "../Snackbar/useSnackbar";

import { PreviousListsItemCounts } from "./components/PreviousListsItemCounts/PreviousListsItemCounts";
import { BuilderItem } from "./hooks/useBuilderStateReducer/types";
import { BuilderListItemRenderer, BuilderType } from "./types";
import { onAction } from "./utils/onAction";
import { onItemAction } from "./utils/onItemAction";

import cls from "./Builder.module.css";

type Props<T extends BuilderItem> = {
    classes?: {
        root?: string;
        list?: {
            root?: string;
            label?: string;
            content?: string;
        }
    }
    builder: BuilderType<T>
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
    const snackbar = useSnackbar();

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
                onClear=${onAction({
                    showMsg: snackbar.show,
                    action: builder.actions.clearUsed, 
                    msg: "Used list cleared",
                })}
                renderItem=${(item: T, index: number) => {
                    const removeFromUsed = onItemAction({
                        showMsg: snackbar.show,
                        action: builder.actions.removeFromUsed, 
                        msg: "removed from Used",
                        item, 
                    });
                    return renderItem(item, index, {
                        onClick: removeFromUsed,
                        onAltClick: removeFromUsed,
                        onHold: removeFromUsed,
                    });
                }}
            />
            <${List}
                classes=${classes?.list}
                label=${"Preferred"}
                labelStuckAtPx=${listLabelStuckAtPx}
                slots=${{
                    labelRight: html`
                        <${PreviousListsItemCounts} 
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
                onClear=${onAction({
                    showMsg: snackbar.show,
                    action: builder.actions.clearPreferred, 
                    msg: "Preferred list cleared",
                })}
                confirmBeforeClear
                renderItem=${(item: T, index: number) => {
                    const moveToUsed = onItemAction({
                        showMsg: snackbar.show,
                        predicate: () => !usedIsFull,
                        failedPredicateMsg: "Can't move: Used list is full",
                        action: builder.actions.preferredToUsed,
                        msg: "moved to Used",
                        item,
                    });
                    const moveToAvailable = onItemAction({
                        showMsg: snackbar.show,
                        action: builder.actions.preferredToAvailable,
                        msg: "removed from Preferred",
                        item,
                    });
                    return renderItem(item, index, {
                        onClick: moveToUsed,
                        onAltClick: moveToAvailable,
                        onHold: moveToAvailable,
                    });
                }}
            />
            <${List}
                classes=${classes?.list}
                label=${"Available"}
                labelStuckAtPx=${listLabelStuckAtPx}
                slots=${{
                    labelRight: html`
                        <${PreviousListsItemCounts}
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
                    const moveToUsed = onItemAction({
                        showMsg: snackbar.show,
                        predicate: () => !usedIsFull,
                        failedPredicateMsg: "Can't move: Used list is full",
                        action: builder.actions.availableToUsed,
                        msg: "moved to Used",
                        item,
                    });
                    const moveToPreferred = onItemAction({
                        showMsg: snackbar.show,
                        action: builder.actions.availableToPreferred,
                        msg: "moved to Preferred",
                        item,
                    });
                    return renderItem(item, index, {
                        onClick: moveToUsed,
                        onAltClick: moveToPreferred,
                        onHold: moveToPreferred,
                    });
                }}
            />
        </div>
        <${Snackbar} 
            open=${snackbar.open}
            text=${snackbar.text}
            onClose=${snackbar.hide}
        />
    `;
}
