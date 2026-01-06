import { html } from "htm/preact";

import { List } from "../../../../components/List/List";
import { Item } from "../../types";
import { ObjectListItem } from "../ObjectListItem/ObjectListItem";

type Props = {
    className?: string;
    label: string;
    objects: Item[];
    onObjectClick?: (item: Item) => void;
    onObjectAltClick?: (item: Item) => void;
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
            renderItem=${(object: Item) => html`
                <${ObjectListItem}
                    object=${object}
                    onClick=${() => onObjectClick?.(object)}
                    onAltClick=${() => onObjectAltClick?.(object)}
                />
            `}
        />
    `;
}
