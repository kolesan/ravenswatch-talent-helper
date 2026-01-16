import clsx from "clsx";
import { html } from "htm/preact";
import { ComponentChildren } from "preact";

import cls from "./List.module.css";

type Props<T> = {
    className?: string;
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
    className,
    label,
    items,
    renderItem,
}: Props<T>) {
    return html`
        <div class=${clsx(cls.listRoot, className)}>
            <div class=${cls.label}>
                ${label} ${items.length}
            </div>
            ${!items.length && html`
                <div class=${cls.empty}>
                    This list is empty
                </div>
            `}
            <ul class=${cls.list}>
                ${items.map(item => html`
                    <div class=${cls.listItem} key=${item.code}>
                        ${renderItem(item)}
                    </div>
                `)}
            </ul>
        </div>
    `;
}
