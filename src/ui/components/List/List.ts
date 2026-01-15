import { html } from "htm/preact";
import { ComponentChildren } from "preact";

import cls from "./List.module.css";

type Props<T> = {
    label: string;
    items: T[];
    renderItem: (item: T) => ComponentChildren;
    onItemClick?: (item: T) => void;
    onItemAltClick?: (item: T) => void;
}

type WithCode = {
    code: string;
}

export function List<T extends WithCode>({
    label,
    items,
    renderItem,
}: Props<T>) {
    return html`
        <div>
            <h1>${label} ${items.length}</h1>
            <ul>
                ${!items.length && html`
                    <div class=${cls.empty}>
                        This list is empty
                    </div>
                `}
                ${items.map(item => html`
                    <div class=${cls.listItem} key=${item.code}>
                        ${renderItem(item)}
                    </div>
                `)}
            </ul>
        </div>
    `;
}
