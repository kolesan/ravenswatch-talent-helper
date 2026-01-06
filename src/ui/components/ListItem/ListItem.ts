import { clsx } from "clsx";
import { html } from "htm/preact";

import cls from "./ListItem.module.css";

interface Props {
    className?: string;
    name: string;
    iconElement: Element;
    descriptionElement: Element;
    onItemClick?: () => void;
    onItemAltClick?: () => void;
}

export function ListItem({
    className,
    name,
    iconElement,
    descriptionElement,
    onItemClick,
    onItemAltClick,
}: Props) {
    return html`
        <li class=${clsx(cls.root, className)}
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
            <div>
                <div class=${cls.name}>${name}</div>
                ${descriptionElement}
            </div>
        </li>
    `;
}
