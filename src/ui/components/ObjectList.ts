import { html } from "htm/preact";

import { MagicalObject, MagicalObjectType } from "../../types";
import { List } from "./List/List";

import { ObjectListItem } from "./ObjectListItem";

type Props = {
    className?: string;
    label: string;
    objects: MagicalObject[];
    objectType: MagicalObjectType;
    onObjectClick?: (item: MagicalObject) => void;
    onObjectAltClick?: (item: MagicalObject) => void;
}

export function ObjectList({
    label,
    objects,
    objectType,
    onObjectClick,
    onObjectAltClick,
}: Props) {
    return html`
        <${List} 
            label=${label} 
            items=${objects} 
            renderItem=${(object: MagicalObject) => html`
                <${ObjectListItem}
                    object=${object}
                    objectType=${objectType}
                    onClick=${() => onObjectClick?.(object)}
                    onAltClick=${() => onObjectAltClick?.(object)}
                />
            `}
        />
    `;
}
