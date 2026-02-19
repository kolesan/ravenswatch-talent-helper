import { html } from "htm/preact";
import { ComponentChildren } from "preact";

import { MagicalObject, MagicalObjectType } from "../../types";

import { List } from "./List/List";
import { ObjectListItem } from "./ObjectListItem";

type Props = {
    classes?: {
        root?: string;
        label?: string;
        content?: string;
    };
    label: string;
    labelStuckAtPx?: number;
    slots?: {
        labelRight?: ComponentChildren;
    };
    objects: MagicalObject[];
    objectType: MagicalObjectType;
    confirmBeforeClear?: boolean;
    onClear?: () => void;
    onStickyLabelScrollingAgain?: (isScrollingAgain: boolean) => void;
    onObjectClick?: (item: MagicalObject) => void;
    onObjectAltClick?: (item: MagicalObject) => void;
    onObjectHold?: (item: MagicalObject) => void;
}

export function ObjectList({
    classes,
    label,
    labelStuckAtPx,
    slots,
    objects,
    objectType,
    confirmBeforeClear,
    onStickyLabelScrollingAgain,
    onClear,
    onObjectClick,
    onObjectAltClick,
    onObjectHold,
}: Props) {
    return html`
        <${List}
            classes=${classes}
            label=${label} 
            labelStuckAtPx=${labelStuckAtPx}
            slots=${slots}
            items=${objects} 
            entityName=${"objects"}
            confirmBeforeClear=${confirmBeforeClear}
            onStickyLabelScrollingAgain=${onStickyLabelScrollingAgain}
            onClear=${onClear}
            renderItem=${(object: MagicalObject, index: number) => html`
                <${ObjectListItem}
                    index=${index}
                    object=${object}
                    objectType=${objectType}
                    onClick=${() => onObjectClick?.(object)}
                    onAltClick=${() => onObjectAltClick?.(object)}
                    onHold=${() => onObjectHold?.(object)}
                />
            `}
        />
    `;
}
