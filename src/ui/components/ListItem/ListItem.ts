import { clsx } from "clsx";
import { html } from "htm/preact";
import { ComponentChildren } from "preact";

import cls from "./ListItem.module.css";

interface Props {
    className?: string;
    name: string;
    iconElement: ComponentChildren;
    descriptionElement: ComponentChildren;
    onClick?: () => void;
    onAltClick?: () => void;
}

export function ListItem({
    className,
    name,
    iconElement,
    descriptionElement,
    onClick,
    onAltClick,
}: Props) {
    return html`
        <li class=${clsx(cls.root, className)}
            onClick=${(e: any) => {
                if (e.altKey) {
                    onAltClick?.();
                } else {
                    onClick?.();
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
