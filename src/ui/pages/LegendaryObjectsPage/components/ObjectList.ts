import { html } from "htm/preact";

import { MagicalObject } from "../../../../types";
import { List } from "../../../components/List/List";

import { ObjectListItem } from "./ObjectListItem";

type Props = {
    className?: string;
    label: string;
    objects: MagicalObject[];
    onObjectClick?: (item: MagicalObject) => void;
    onObjectAltClick?: (item: MagicalObject) => void;
}

export function ObjectList({
    label,
    objects,
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
                    onClick=${() => onObjectClick?.(object)}
                    onAltClick=${() => onObjectAltClick?.(object)}
                />
            `}
        />
    `;
}
