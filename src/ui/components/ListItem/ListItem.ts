import { html } from "htm/preact";

import cls from "./ListItem.module.css";

interface Props<T> {
    className?: string;
    name: string;
    iconElement: Element;
    descriptionElement: Element;
    onItemClick?: () => void;
    onItemAltClick?: () => void;
}

export function ListItem<T>({
    className,
    name,
    iconElement,
    descriptionElement,
    onItemClick,
    onItemAltClick,
}: Props<T>) {
    return html`
        <li class=${`${cls.root} ${className}`}
            onClick=${(e: any) => {
                if (e.altKey) {
                    onItemAltClick?.();
                } else {
                    onItemClick?.();
                }
            }}
        >
            <div class=${cls.iconContainer}>
                ${iconElement}
            </div>
            <div class=${cls.textContainer}>
                <div class=${cls.name}>${name}</div>
                ${descriptionElement}
            </div>
        </li>
    `;
}
