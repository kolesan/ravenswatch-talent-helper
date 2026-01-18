import { html } from "htm/preact";

import { MagicalObject, MagicalObjectType } from "../../types";

import { List } from "./List/List";
import { ObjectListItem } from "./ObjectListItem";

type Props = {
    className?: string;
    classes?: {
        label?: string;
        content?: string;
    };
    label: string;
    labelStuckAtPx?: number;
    objects: MagicalObject[];
    objectType: MagicalObjectType;
    onObjectClick?: (item: MagicalObject) => void;
    onObjectAltClick?: (item: MagicalObject) => void;
    onObjectHold?: (item: MagicalObject) => void;
}

export function ObjectList({
    className,
    classes,
    label,
    labelStuckAtPx,
    objects,
    objectType,
    onObjectClick,
    onObjectAltClick,
    onObjectHold,
}: Props) {
    return html`
        <${List} 
            className=${className}
            classes=${classes}
            label=${label} 
            labelStuckAtPx=${labelStuckAtPx}
            items=${objects} 
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
